<template>
    <div class="container">
        <header class="navbar">
            <img @click="goBack" src="back.png" width="30px"/>
            <span class="navbarText">Wiadomości</span>
            <div style="width: 30px"></div>
        </header>
        <div @click="openMessages(recipent.uid)" class="nick" v-for="recipent in uniqueRecipentsData" :key="recipent.uid"><h2>{{ recipent.nickname }}</h2></div>
    </div>
</template>
<style>

</style>
<script setup>
    import { firebaseApp } from '@/firebase';
import { useAuthStore } from '@/stores/auth';
import { collection, doc, getDoc, getDocs, getFirestore, or, query, where } from 'firebase/firestore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

    let uniqueRecipentsData = ref([]);

    const router = useRouter();

    function openMessages(uid) {
        router.push(`/messages/${uid}`)
    }

    function goBack() {
        router.go(-1);
    }

    onMounted(() => {
        const db = getFirestore(firebaseApp);
        const messagesColRef = collection(db, "messages");
        const auth = useAuthStore();

        const q = query(messagesColRef, or(where('from', '==', auth.user.uid),
        where('to', '==', auth.user.uid)
        ))

        const uniqueRecipents = [];

        getDocs(q)
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

            

            uniqueRecipents.forEach(recipent => {
                const recipentDoc = doc(db, "users", recipent);
                getDoc(recipentDoc)
                .then((snapshot) => {
                    if(snapshot.exists()) {
                        uniqueRecipentsData.value.push({
                            'uid': recipent,
                            nickname: snapshot.data().nickname
                        });
                    }
                });
            });

            console.log(uniqueRecipentsData);
        })


    });
</script>