const baseURL = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=d079683cbb124abba5dae348b7f665db";

const fetchData = async () => {
  return fetch(baseURL)
    .then(res => res.json())

}

const apiFactory = {
  fetchData
};

export default apiFactory;