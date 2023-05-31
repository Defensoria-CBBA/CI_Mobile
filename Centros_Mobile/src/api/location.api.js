import axios from 'axios'

export const getLocation = () => {
    return axios.get('http://127.0.0.1:8000/proyect/api/v1/stablishments/')
}