
import { Spinner } from "./Spinner";
import { useState} from "react";
import useGif from "../hooks/useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

export default function Random() {
  // const [gif, setGif] = useState('');
  // const [loading, setloading] = useState('false');
   const [Tag, setTag] = useState('');
  // async function fetchData() {
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  //   setloading(true);
  //   try {
  //     const response = await axios.get(url);
  //     const imageSource = response.data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setloading(false);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  const {gif,loading,fetchData}= useGif(Tag);
  function clickHandler() {
    fetchData(Tag);
  }
  function changeHandler(event){
  setTag(event.target.value);
  }
  return (
    <div className="w-2/5 h-[350px] bg-blue-400 rounded-lg border border-black flex flex-col items-center">
      <h1 className="mt-[15px] text-3xl underline uppercase font-bold">Random {Tag} Gif</h1>
      
      {
        loading?(<Spinner/>):(<img src={gif} width="450" alt="GIF" />)
      }
      <input
      className="w-11/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={changeHandler}
      value={Tag}
      >
      
      </input>
      <button onClick={clickHandler} className="w-11/12 bg-yellow-400 text-lg py-2 rounded-lg mb-[20px]">
        Generate
      </button>
    </div>
  );
}