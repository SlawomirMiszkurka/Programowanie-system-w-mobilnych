<template>
    <div class="container">
        <header class="navbar">
            <img @click="goBack" src="back.png" width="30px"/>
            <span class="headerText">{{ nickname }}</span>
            <div style="width: 30px"></div>
        </header>
        <div class="messagesContent">
            <component v-for="component in components" :is="component.name" :key="component.id" :content="component.content"></component>
        </div>
        <footer>
            <label for="photoUpload">
                <input id="photoUpload" type="file" accept="image/png,image/jpeg" @change="photoUploaded">
                <img src="images.png" width="30px"/>
            </label>
            <img id="startRecording" @click="openAudio" src="mic.png" width="30px"/>
            <img id="stopRecording" src="stop.png" width="30px"/>
            <img id="deleteRecording" src="trashcan.png" width="30px"/>
            <input class="form-control" ref="textContent" type="text" />
            <img id="sendMessage" @click="sendMessage" src="send.png" width="30px"/>
            <img id="sendAudioMessage" src="send.png" width="30px"/>
        </footer>
    </div>
</template>

<style>

    #stopRecording {
        display: none;
    }

    #sendAudioMessage {
        display: none;
    }

    #recordingStatus {
        display:block;
    }

    #deleteRecording {
        display: none;
    }

    #photoUpload {
        display: none;
    }


    .container .messagesContent {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column-reverse;
        overflow-y: auto;
        min-height: 0px;
    }

    footer {
        padding: 5px;
        display: flex;
        align-items: center;
    }

    footer textarea {
        flex: 1 1 auto;
        height: 50px;
    }

    footer img {
        margin: 5px;
    }


</style>

<script setup>
    import { useRoute, useRouter } from 'vue-router';
    import { onMounted, ref } from 'vue';
    import { firebaseApp } from '@/firebase';
    import { Timestamp, addDoc, and, collection, doc, getDoc, getDocs, getFirestore, or, orderBy, query, where } from 'firebase/firestore';
    import { useAuthStore } from '@/stores/auth';
    import SentTextMessage from './messages/SentTextMessage.vue';
    import ReceivedTextMessage from './messages/ReceivedTextMessage.vue';
    import SentImageMessage from './messages/SentImageMessage.vue';
    import ReceivedImageMessage from './messages/ReceivedImageMessage.vue';
import { getStorage, ref as storageRef, uploadBytes } from 'firebase/storage';
import SentAudioMessage from './messages/SentAudioMessage.vue';
import ReceivedAudioMessage from './messages/ReceivedAudioMessage.vue';
    const route = useRoute();
    const auth = useAuthStore();
    const router = useRouter();

    let textContent = ref('');
    let nickname = ref('');
    let messages = ref([]);
    let components = ref([]);
    let isRecording = false;
    let initial = true;
    let recordedSeconds = ref(0);
    onMounted(() => {
        updateMessages();
    });

    function goBack() {
        router.go(-1);
    }


    function photoUploaded(event) {
        let file = event.target.files[0];
        const uuid = crypto.randomUUID();
        const storage = getStorage(firebaseApp);
        const imagesRef = storageRef(storage, `images/${uuid}`);
        uploadBytes(imagesRef, file)
        .then(() => {
            const db = getFirestore(firebaseApp);
            const messagesColRef = collection(db, "messages");
            const newMessage = {
                from: auth.user.uid,
                to: route.params.uid,
                type: 'image',
                timestamp: Timestamp.fromDate(new Date(Date.now())),
                content: uuid
            };
            addDoc(messagesColRef, newMessage)
            .then(() => {
                updateMessages();
            })
        })

        console.log(file);
    }

    function openAudio() {
        if(navigator.mediaDevices.getUserMedia) {
            isRecording = true;
            const start = document.getElementById('startRecording');
            const stop = document.getElementById('stopRecording');
            const deleteRecording = document.getElementById('deleteRecording');
            const sendMessage = document.getElementById('sendMessage');
            const sendAudioMessage = document.getElementById('sendAudioMessage');

            const constrains = { audio: true };
            navigator.mediaDevices.getUserMedia(constrains)
            .then((stream) => {
                let chunks = [];
                const mediaRecorder = new MediaRecorder(stream);

                mediaRecorder.ondataavailable = (e) => {
                    chunks.push(e.data);
                }
                recordedSeconds.value = 0
                textContent.value.value = new Date(recordedSeconds.value * 1000).toISOString().slice(14, 19);
                mediaRecorder.start();
                var countTimeInterval = setInterval(() => {
                    recordedSeconds.value++;
                    console.log(textContent.value);
                    textContent.value.value = new Date(recordedSeconds.value * 1000).toISOString().slice(14, 19);
                }, 1000);
                sendMessage.style.display = 'none';
                sendAudioMessage.style.display = 'block';
                start.style.display = 'none';
                stop.style.display = 'block';

                stop.onclick = () => {
                    mediaRecorder.stop();
                    clearInterval(countTimeInterval);
                    console.log('stop clicked');
                    stop.style.display = 'none';
                    deleteRecording.style.display = 'block';
                    deleteRecording.onclick = () => {
                        chunks = [];
                        recordedSeconds.value = 0;
                        textContent.value.value = "";
                        sendMessage.style.display = 'block';
                        sendAudioMessage.style.display = 'none';
                        start.style.display = 'block';
                        deleteRecording.style.display = 'none';
                        stop.style.display = 'none';
                        stream.getTracks().forEach(track => track.stop());
                        isRecording = false;
                    }
                }

                mediaRecorder.onstop = () => {
                    console.log('onstop event');
                    sendAudioMessage.onclick = () => {
                        console.log('send audio click')
                    const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
                    const uuid = crypto.randomUUID();
                    const storage = getStorage(firebaseApp);
                    const imagesRef = storageRef(storage, `audio/${uuid}`);
                    uploadBytes(imagesRef, blob)
                    .then(() => {
                        const db = getFirestore(firebaseApp);
                        const messagesColRef = collection(db, "messages");
                        const newMessage = {
                            from: auth.user.uid,
                            to: route.params.uid,
                            type: 'audio',
                            timestamp: Timestamp.fromDate(new Date(Date.now())),
                            content: uuid
                        };
                        addDoc(messagesColRef, newMessage)
                        .then(() => {
                            updateMessages();
                            recordedSeconds.value = 0;
                            textContent.value.value = "";
                            sendMessage.style.display = 'block';
                            sendAudioMessage.style.display = 'none';
                            start.style.display = 'block';
                            stop.style.display = 'none';
                            deleteRecording.style.display = 'none';
                            stream.getTracks().forEach(track => track.stop());
                            isRecording = false;
                        })
                    })

                }
                }


            })
        }
    }

    function updateMessages() {
        const db = getFirestore(firebaseApp)
        const messagesColRef = collection(db, "messages");
        const userDocRef = doc(db, "users", route.params.uid);
        messages.value = [];
        getDoc(userDocRef)
        .then((snapshot) => {
            if(snapshot.exists()) {
                nickname.value = snapshot.data().nickname;
                console.log(nickname.value);
            }
        })

        const q = query(messagesColRef, or(and(where('from', '==', auth.user.uid), where('to', '==', route.params.uid)), and(where('to', '==', auth.user.uid), where('from', '==', route.params.uid))), orderBy('timestamp', 'desc'));
        getDocs(q)
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                let data = doc.data();
                messages.value.push({'id': doc.id, ...data});
            });
            console.log(messages.value);
            messages.value.forEach((message) => {
                const id = message.id;
                const type = message.type;
                const sent = message.from === auth.user.uid;
                const content = message.content;
                if(!components.value.map((c) => c.id).includes(id)) {
                    if(initial) {
                        switch(type) {
                    case 'text':
                        if(sent) {
                            components.value.push({
                                'id': id,
                                'name': SentTextMessage,
                                'content': content
                            });
                        } else {
                            components.value.push({
                                'id': id,
                                'name': ReceivedTextMessage,
                                'content': content
                            });
                        }
                        break;
                    case 'image':
                    if(sent) {
                            components.value.push({
                                'id': id,
                                'name': SentImageMessage,
                                'content': content
                            });
                        } else {
                            components.value.push({
                                'id': id,
                                'name': ReceivedImageMessage,
                                'content': content
                            });
                        }
                        break;
                    case 'audio':
                    if(sent) {
                            components.value.push({
                                'id': id,
                                'name': SentAudioMessage,
                                'content': content
                            });
                        } else {
                            components.value.push({
                                'id': id,
                                'name': ReceivedAudioMessage,
                                'content': content
                            });
                        }
                        break;
                }
                    } else {
                        switch(type) {
                    case 'text':
                        if(sent) {
                            components.value.unshift({
                                'id': id,
                                'name': SentTextMessage,
                                'content': content
                            });
                        } else {
                            components.value.unshift({
                                'id': id,
                                'name': ReceivedTextMessage,
                                'content': content
                            });
                        }
                        break;
                    case 'image':
                    if(sent) {
                            components.value.unshift({
                                'id': id,
                                'name': SentImageMessage,
                                'content': content
                            });
                        } else {
                            components.value.unshift({
                                'id': id,
                                'name': ReceivedImageMessage,
                                'content': content
                            });
                        }
                        break;
                case 'audio':
                    if(sent) {
                            components.value.unshift({
                                'id': id,
                                'name': SentAudioMessage,
                                'content': content
                            });
                        } else {
                            components.value.unshift({
                                'id': id,
                                'name': ReceivedAudioMessage,
                                'content': content
                            });
                        }
                        break;
                }
                    }

                }
                
            });

            if(initial) initial = !initial;
        })
    }

    function sendMessage() {
        if(!isRecording) {
            const db = getFirestore(firebaseApp);
            const messagesColRef = collection(db, "messages");
            const newMessage = {
                from: auth.user.uid,
                to: route.params.uid,
                type: 'text',
                timestamp: Timestamp.fromDate(new Date(Date.now())),
                content: textContent.value.value
            };
            addDoc(messagesColRef, newMessage)
            .then(() => {
                updateMessages();
                textContent.value.value = '';
            })
        }
    }
</script>