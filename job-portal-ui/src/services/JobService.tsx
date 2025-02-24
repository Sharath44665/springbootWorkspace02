import axios from 'axios'

const base_url = "http://localhost:8080/jobs/"

const postJob = async (job:any) => { 
    return axios.post(`${base_url}post`, job)
            .then(res => res.data)
            .catch(error => {throw error});
}

const getAllJobs = async ()=> {
    return axios.get(`${base_url}get-all`)
        .then(result => result.data)
        .catch(err => {throw err;});
}

const getJob = async(id: any) =>{
    return axios.get(`${base_url}get/${id}`)
        .then(result => result.data)
        .catch(error => {throw error;})
}

export {postJob, getAllJobs, getJob };