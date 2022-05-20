// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const getData = async () => {
  const baseURL = "https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=d079683cbb124abba5dae348b7f665db";

  return axios.get(baseURL);
}

export default getData;