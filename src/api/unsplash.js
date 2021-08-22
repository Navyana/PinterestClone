import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID kUHqGh2n6_7gIn7TACYJuxiDKxT97PQ5KG-hZyw5m2k"
    }
})  