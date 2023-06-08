import axios from "axios";
import BASE_URL from "../constants/url";

export default function handlePostData(url, data) {
    console.log(url, data);
    axios
        .post(`${BASE_URL}${url}`, { ...data })
        .then((res) => console.log(res));
}
