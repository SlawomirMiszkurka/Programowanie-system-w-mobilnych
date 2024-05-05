<template>
    <div class="container">
        <header class="navbar">
            <img @click="goBack" src="back.png" width="30px"/>
            <span class="headerText">Nowi znajomi</span>
            <div style="width: 30px;"></div>
        </header>
        <div class="content">
            <div @click="openMessages(recipent.uid)" class="nick" v-for="recipent in newContactsData" :key="recipent.uid"><h2>{{ recipent.nickname }}</h2></div>
        </div>
    </div>
</template>

<script setup>
    import { firebaseApp } from '@/firebase';
import { useAuthStore } from '@/stores/auth';
import { collection, doc, getDoc, getDocs, getFirestore, or, query, where } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

    const router = useRouter();
    const auth = useAuthStore();

    let newContactsData = ref([]);

    function goBack() {
        router.go(-1);
    }

    function openMessages(uid) {
        router.push(`/messages/${uid}`)
    }

    onMounted(() => {
        const db = getFirestore(firebaseApp);
        const usersColRef = collection(db, "users");
        const messagesColRef = collection(db, "messages");

        const q = query(usersColRef, where('country', '==', auth.user.contactCountry), where('interests', '==', auth.user.interests));

        let newContacts = [];

        getDocs(q)
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                newContacts.push(doc.id);
            })
            const uniqueRecipents = [];

            const q2 = query(messagesColRef, or(where('from', '==', auth.user.uid),
            where('to', '==', auth.user.uid)))
        
            getDocs(q2)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    let data = doc.data();

                    if(data.from != auth.user.uid && !uniqueRecipents.includes(data.from)) {
                        uniqueRecipents.push(data.from);
                    }

                    if(data.to != auth.user.uid && !uniqueRecipents.includes(data.to)) {
                        uniqueRecipents.push(data.to);
                    }
                })

                const newContactsVerified = [];
                console.log(uniqueRecipents);
                console.log(newContacts);
                newContacts.forEach((contact) => {
                    if(!uniqueRecipents.includes(contact)) {
                        newContactsVerified.push(contact);
                    }
                });
                console.log(newContactsVerified);
                newContactsVerified.forEach(recipent => {
                    const recipentDoc = doc(db, "users", recipent);
                    getDoc(recipentDoc)
                    .then((snapshot) => {
                        if(snapshot.exists()) {
                            newContactsData.value.push({
                                'uid': recipent,
                                nickname: snapshot.data().nickname
                            });
                        }
                    });
                });

            })
        })
    });

</script>