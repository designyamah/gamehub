import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key : '1d2e4f52228e4b829711202eb859f16d'
    }
})