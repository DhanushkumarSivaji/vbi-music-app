import React,{useState,useEffect} from 'react';
import { useSelector } from "react-redux";
import CardsContainer from './CardsContainer';
import Search from './Search';

const Songs = () => {
  const songsState = useSelector((state) => state.data.songs);
  const filteredSongsState = useSelector((state)=> state.data.filtered)
  const [songs,setSongs] = useState(null)
  const [filtered,setFiltered] = useState(null)

  useEffect(() => {
    setSongs(songsState)
  }, [songsState]);

  useEffect(()=>{
    setFiltered(filteredSongsState)
  },[filteredSongsState])

  return (
    <div>
        <Search />
        {filtered !== null
            ? <CardsContainer songs={filtered}/>
            : <CardsContainer songs={songs}/>
            }
    </div>
  )
}


export default Songs;