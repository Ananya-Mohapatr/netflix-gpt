import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { lang } from '../utils/LanguageConstants'
import openai from '../utils/openAI';
import { API_OPTIONS } from '../utils/Constant';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
   
    const language = useSelector(store => store.config.lang)
    const selectedLanguage = lang[language]
    const searchText = useRef(null);
    const dispatch = useDispatch()
    const searchMovieTMDB = async(movie) =>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1',API_OPTIONS)
        const json = await data.json()
        return json.results

    }
    const handleGptSearch = async () => {
        /* OPEN AI is not free so commenting below code
        //make an API call to OPEn AI
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give names of 5 movies, comma separated like the example result given ahead.Example Result :
         Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"
        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
          });
        console.log("gptResult",gptResult.choices)
        */
       const moviesArray = searchText.current.value.split(",")
       console.log("---moviesArray----",moviesArray)
       const movieData = moviesArray.map(i=>searchMovieTMDB(i));
       const tmdbResult = await Promise.all(movieData)
       console.log("tmdb",tmdbResult)
       dispatch(addGptMovieResult({movieName:moviesArray,movieResults:tmdbResult}))

    }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input ref= {searchText} type='text' className='p-4 m-4 col-span-9' placeholder={selectedLanguage.gptSearchPlaceHolder}/>
            <button className='py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg' onClick={handleGptSearch}>{selectedLanguage.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar