import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-maker-a1282.firebaseio.com/"
})

export default instance;