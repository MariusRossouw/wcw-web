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

                <input id="file-input" type="file" @change="onFileChanged"/>
            </div>
            <p v-if="selectedFile" >{{selectedFile.name}}</p>
            <button v-if="selectedFile" class="uk-button uk-button-default" @click="onUpload()">Upload Sales</button>

            <h3>Budget</h3>
            <div class="image-upload">
                <label for="the-file-inputB">
                    <img src="@/assets/svg/upload.svg" class="logo-image"/>
                </label>

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
                selectedFileB: null
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
                    console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
                .then(response => {
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
                    console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
                .then(response => {
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
