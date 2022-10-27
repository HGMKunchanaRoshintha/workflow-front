import axios from "axios";

const API_URL = "http://localhost:8080/api"

// this const use for get data set from using API
const getDetails= () => {
    return axios.get(API_URL + "/details" );
  };

const DetailService =  {
 getDetails
}


export default DetailService;