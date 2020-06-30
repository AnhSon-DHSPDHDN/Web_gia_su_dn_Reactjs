import axios from 'axios';
import * as Config from '../constants/Config'

export default async function callAPI(endpoint, method = "GET", body) {
    return await axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => {
        console.log(err);
    });
}