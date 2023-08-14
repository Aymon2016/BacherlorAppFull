

import axios from 'axios'


const URL = import.meta.env.VITE_backendurl


const fetchDataFromApi = async (url) => {
    try {

        const { data } = await axios.get(URL + url)
        return data;
    } catch (error) {

        console.log(error)
        return error
    }
}
export default fetchDataFromApi
