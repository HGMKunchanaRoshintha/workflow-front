import axios from "axios";


// const API_URL = "https://randomuser.me/api";
const API_URL = "http://localhost:8080/api"

const getDetails= () => {
    return axios.get(API_URL + "/details" );
  };

const DetailService =  {
 getDetails
}


const addDetails= () => {

}

export default DetailService;