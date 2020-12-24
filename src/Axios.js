import axios from 'axios'

const instance = axios.create({

    baseURL: 'https://us-central1-amaclone01.cloudfunctions.net/api'  // THE Deployed API URL
    //For debugging purposes: http://localhost:5001/amaclone01/us-central1/api
});

export default instance
