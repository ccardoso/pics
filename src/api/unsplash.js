import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 4aa8f859dec647f21c1f028c51448490cbd24a99ddfaa4c2d1f8f13f643450fb"
  }
});
