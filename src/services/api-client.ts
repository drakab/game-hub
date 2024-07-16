import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f19bd56d4b354221aef5fd86ee95f686",
  },
});
