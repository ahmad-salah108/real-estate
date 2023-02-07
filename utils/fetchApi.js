import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '98dba69004msh46a6834b6952b49p15e19fjsndf608ae38cb8',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
  return data;
};
