<template>
    <div>
        <center>
            <!-- <input type="file" @change="onFileChanged"> -->
            <div>Click the upload icon below to select a file to be uploaded.</div>

            <div class="image-upload">
                <label for="file-input">
                    <img src="@/assets/svg/upload.svg" class="logo-image"/>
                </label>

                <input id="file-input" type="file" @change="onFileChanged"/>
            </div>
            <p v-if="selectedFile" >{{selectedFile.name}}</p>
            <button v-if="selectedFile" class="uk-button uk-button-default" @click="onUpload()">Upload</button>
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
                selectedFile: null
            }
        },
        methods: {
            onFileChanged (event) {
                this.selectedFile = event.target.files[0]
            },
            onUpload() {
                const formData = new FormData();
                formData.append('myFile', this.selectedFile, this.selectedFile.name);
                axios.post(this.$store.state.api_url + '/upload', formData, {
                    onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded / progressEvent.total)
                    }
                })
                .then(response => {
                        // Add entity to session in vuex
                        console.log('Response: ', response);
                        this.selectedFile = null;
                    })
                    .catch(error => {
                        console.log(error.response);
                        if(error.response.status == 400){
                            console.log(error.response);
                            this.selectedFile = null;
                        }
                        if(error.response.status == 401){
                            console.log(error.response);
                            // login / session expired
                            this.selectedFile = null;
                        }
                        if(error.response.status == 403){
                            console.log(error.response);
                            // broke a rule
                            this.selectedFile = null;
                            
                        }
                        if(error.response.status == 404){
                            console.log(error.response);
                            // page not found / not there
                            this.selectedFile = null;
                        }
                        if(error.response.status == 500){
                            console.log(error.response);
                            // server error / db error
                            this.selectedFile = null;
                        }
                    });
            }
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
