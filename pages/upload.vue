<template>
    <div class="container">
        <center>
            <!-- <input type="file" @change="onFileChanged"> -->
            <div>Click the upload icon below to select a file to be uploaded.</div>
            <h3>Sales</h3>
            <div class="image-upload">
                <label for="file-input">
                    <img src="@/assets/svg/upload.svg" class="logo-image"/>
                </label>
                <span  v-if="spinner0 == true" uk-spinner="ratio: 4.5"></span>
                <progress v-if="bar0 == true" id="js-progressbar" class="uk-progress" :value="loaded0" :max="total0"></progress>
                

                <input id="file-input" type="file" @change="onFileChanged"/>
            </div>
            <p v-if="selectedFile" >{{selectedFile.name}}</p>
            <button v-if="selectedFile" class="uk-button uk-button-default" @click="onUpload()">Upload Sales</button>

            <h3>Budget</h3>
            <div class="image-upload">
                <label for="the-file-inputB">
                    <img src="@/assets/svg/upload.svg" class="logo-image"/>
                </label>
                <span v-if="spinner1 == true" uk-spinner="ratio: 4.5"></span>
                <progress v-if="bar1 == true" id="js-progressbar" class="uk-progress" :value="loaded1" :max="total1"></progress>
                <input id="the-file-inputB" type="file" @change="BonFileChangedB"/>
            </div>
            <p v-if="selectedFileB" >{{selectedFileB.name}}</p>
            <button v-if="selectedFileB" class="uk-button uk-button-default" @click="onUploadB()">Upload Budget</button>
        </center>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        components: {
            "axios": axios
        },
        data() {
            return {
                selectedFile: null,
                selectedFileB: null,
                show0: null,
                loaded0: null,
                total0: null,
                bar0: null,
                show1: null,
                loaded1: null,
                total1: null,
                bar1: null,
                spinner0: false,
                spinner1: false,
            }
        },
        methods: {
            checkAuthState() {
                let ls = JSON.parse(localStorage.getItem("State"));
                console.log(ls);
                if(!ls){
                    this.$router.push("/login");
                } else {
                    this.$store.replaceState(ls);
                }
            },
            onFileChanged (event) {
                this.selectedFile = event.target.files[0]
            },
            BonFileChangedB (event) {
                this.selectedFileB = event.target.files[0]
            },
            onUpload() {
                const formData = new FormData();
                formData.append('file', this.selectedFile, this.selectedFile.name);
                axios.post(this.$store.state.api_url + '/uploads/wine_list', formData, {
                    onUploadProgress: progressEvent => {
                        this.bar0 = true;
                        this.show0 = true;
                        this.loaded0 = progressEvent.loaded;
                        this.total0 = progressEvent.total;
                        // this.bar0.value = this.loaded0;
                        if(progressEvent.loaded / progressEvent.total === 1){
                            this.spinner0 = true;
                            this.bar0 = false;
                        }
                    console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
                .then(response => {
                        this.spinner0 = false;
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.selectedFile = null;
                        if(response.data.http_code == "403"){
                            alert(JSON.stringify(response.data.data, null,2));
                        }
                    })
                    .catch(error => {
                        this.selectedFile = null;
                        console.log(error.response);
                    });
            },
            onUploadB() {
                const formData = new FormData();
                formData.append('file', this.selectedFileB, this.selectedFileB.name);
                axios.post(this.$store.state.api_url + '/uploads/budget', formData, {
                    onUploadProgress: progressEvent => {
                        this.bar1 = true;
                        this.show1 = true;
                        this.loaded1 = progressEvent.loaded;
                        this.total1 = progressEvent.total;
                        // this.bar1.value = this.loaded1;
                        if(progressEvent.loaded / progressEvent.total === 1){
                            this.spinner1 = true;
                            this.bar1 = false;
                        }
                    console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
                .then(response => {
                        this.spinner1 = false;
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.selectedFileB = null;
                    })
                    .catch(error => {
                        console.log(error.response);
                    });
            }
        },
        beforeMount() {
            this.checkAuthState();
        }
    }
</script>

<style>
.image-upload > input
{
    display: none;
}

.image-upload img
{
    width: 80px;
    cursor: pointer;
}
</style>
