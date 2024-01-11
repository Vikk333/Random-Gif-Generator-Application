import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (Tag) => {
  const ranurl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  const [gif, setGif] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchData(tag) {
    setLoading(true);
    try {
      const response = await axios.get(tag ? url : ranurl);
      const imageSource = response.data.data.images.downsized_large.url;
      setGif(imageSource);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData(Tag); // Pass Tag to the fetchData function
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Tag]);

  return { gif, loading, fetchData };
};

export default useGif;
