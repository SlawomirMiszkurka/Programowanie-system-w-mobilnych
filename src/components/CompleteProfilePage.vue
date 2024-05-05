<template>
    <div class="container">
        <div class="navbar"><img src="back.png" width="30px"/></div>
        <div class="mainContent">
            <h2>Uzupełnij swój profil</h2>
            <form @submit.prevent="completeProfile">
                <input class="form-control" type="text" ref="nickname" placeholder="Nick" required>
                <span id="nickname-error" class="error-msg"></span>
                <select class="form-control" ref="yourCountry">
                    <option value="" selected disabled hidden>Kraj pochodzenia</option>
                    <option v-for="(yourCountry, index) in countries" :key="index" :value="yourCountry.name">{{ yourCountry.name }}</option>
                </select>
                <select class="form-control" ref="contactCountry" @change="contactCountryChanged">
                    <option value="" selected disabled hidden>Kraj kontaktowy</option>
                    <option v-for="(contactCountry, index) in countries" :key="index" :value="contactCountry.name">{{ contactCountry.name }}</option>
                </select>
                <select class="form-control" ref="language">
                    <option value="" selected disabled hidden>Język</option>
                    <option v-for="(language, index) in selectedContactCountryLanguages" :key="index" :value="language">{{ language }}</option>
                </select>
                <input class="form-control" type="date" ref="birthdate" required>
                <select class="form-control" ref="selectedHobbies">
                    <option value="" selected disabled hidden>Zainteresowania</option>
                    <option v-for="(hobby, index) in hobbies" :key="index" :value="hobby">{{ hobby }}</option>
                </select>
                <textarea class="form-control" ref="moreInfo" placeholder="Więcej informacji"></textarea>
                <button class="btn btn-primary" type="submit">Uzupełnij</button>
            </form>
        </div>
    </div>

</template>

<style>


</style>

<script setup>
    import { firebaseApp } from '@/firebase';
    import { doc, setDoc, getFirestore, collection, getDocs } from 'firebase/firestore';
    import { ref, onMounted } from 'vue';
    import { useAuthStore } from '@/stores/auth';
    import { useRouter } from 'vue-router';

    const nickname = ref('');
    const yourCountry = ref('');
    const contactCountry = ref('');
    const language = ref('');
    const birthdate = ref('');
    const selectedHobbies = ref('');
    const moreInfo = ref('');
    let countries = ref([]);
    let hobbies = ref([]);
    let selectedContactCountryLanguages = ref([]);

    const router = useRouter();
    const authStore = useAuthStore();

    onMounted(() => {
        const db = getFirestore(firebaseApp);
        const langColRef = collection(db, "languages");
        getDocs(langColRef)
        .then((result) => {
            result.forEach((doc) => {
                countries.value.push({'name': doc.id, ...doc.data()});
            })
            setTimeout(() => {
                if(authStore.user.country) yourCountry.value.value = countries.value.find(country => country.name === authStore.user.country).name;
                if(authStore.user.contactCountry) contactCountry.value.value = countries.value.find(country => country.name === authStore.user.contactCountry).name;
                contactCountryChanged();
                if(authStore.user.language) language.value.value = authStore.user.language;
            }, 1000);
            // console.log(countries.value.find(country => country.name === authStore.user.contactCountry).name);
            // console.log(contactCountry.value);
            // 
            // if(authStore.user.country) yourCountry.value.value = countries.value.find(country => country.name === authStore.user.country);
            // const countryQuery = countries.value.find(country => country.name === authStore.user.contactCountry);
            // selectedContactCountryLanguages.value = countryQuery ? countryQuery.languages : [];
            // console.log(countries.value);
            // if(authStore.user.language) language.value.value = authStore.user.language;
        });

        const hobbiesColRef = collection(db, "hobbies");

        getDocs(hobbiesColRef)
        .then((result) => {
            result.forEach((doc) => {
                hobbies.value.push(doc.id);
            })
            setTimeout(() => {
                if(authStore.user.interests) selectedHobbies.value.value = authStore.user.interests;
            }, 1000);
            
        });

        
        if(authStore.user.birthdate) birthdate.value.value = authStore.user.birthdate;
        if(authStore.user.nickname) nickname.value.value = authStore.user.nickname;
        if(authStore.user.moreInfo) moreInfo.value.value = authStore.user.moreInfo;


    })

    function contactCountryChanged() {
        console.log(contactCountry.value.value);
        const newCountry = contactCountry.value.value;
        const countryQuery = countries.value.find(country => country.name === newCountry);
        selectedContactCountryLanguages.value = countryQuery ? countryQuery.languages : [];
        language.value.value = '';
    }

    function completeProfile() {

        const db = getFirestore(firebaseApp);
        const docRef = doc(db, "users", authStore.user.uid);
        const userData = {
            birthdate: birthdate.value.value,
            contactCountry: contactCountry.value.value,
            country: yourCountry.value.value,
            email: authStore.user.email,
            interests: selectedHobbies.value.value,
            language: language.value.value,
            moreInfo: moreInfo.value.value,
            nickname: nickname.value.value
        }
        setDoc(docRef, userData);

        authStore.setUser({'uid': authStore.user.uid, ...userData});
        router.push('/home');
    }
</script>