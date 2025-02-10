import axios from 'axios';

export default axios.create({
    baseURL:'http://localhost:8080', //adresse du serveur Spring boot en local
    headers: {"ngrok-skip-browser-warning": "true"}
});