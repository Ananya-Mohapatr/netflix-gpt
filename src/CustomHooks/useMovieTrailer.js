import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/Constant";
export const useMovieTrailer = (movieId) =>{
const dispatch = useDispatch()
const getMovieVideos = async() =>{
    const url = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,API_OPTIONS);
    const json = await url.json()
    console.log("json",json)
    const filterData = json.results.filter((i)=>i.type === "Trailer")
    const trailer = filterData.length >0 ? filterData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))

}
useEffect(()=>{
  getMovieVideos()
},[])
}