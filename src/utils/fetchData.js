import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "19e76fe935mshd0ebe771864f99fp1856ffjsnfa3ad7af0ef8",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};



const youtubeOptions = {
  headers: {
    "X-RapidAPI-Key": "19e76fe935mshd0ebe771864f99fp1856ffjsnfa3ad7af0ef8",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};



export const fetchData = async (url) => {
  const response = await axios.get(url, options);
  return response.data;
};



export const youtubeFetchData = async (url) => {
  const response = await axios.get(url, youtubeOptions);
  return response.data;
};
