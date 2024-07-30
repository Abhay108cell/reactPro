import axios from "axios";


export default axios.create({
  baseURL: "http://www.googleapis.com/yotube/v3",
})