const { default: axios } = require("axios");
const host = process.env.HOST || 'localhost'; 
const port = process.env.PORT || 3000;  
const baseUrl = `https://be-prep-master.vercel.app/api`;

async function getUserId(){
    return axios.get(`${baseUrl}/users`)
    .then((response) => {
        return response.data.users.length + 1
    })
}

module.exports = {getUserId}