import axios from "axios"

export default axios.create({

    baseURL: 'aws-spring.herokuapp.com/api/v1',
    headers:{
        'Content-Type':'application/json'
    }
})