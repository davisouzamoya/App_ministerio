import React,{useState} from 'react';
import {secondURL} from '../../service/api'
import { Container } from "./style";

function App({ placeholder, setValue,setArtist,Icon }){
  var optionsLyrics = [];

  async function seachLyrics(e){
    let artist = e.target.value
    artist = artist.replaceAll(' ','-').toLowerCase()
    const response = await secondURL.get(`/${artist}/index.js`)

    {response.data.artist.lyrics.item.map(data =>(
      optionsLyrics.push({ value: data.id, label: data.desc })
    ))}

    setArtist(artist)
    setValue(optionsLyrics)
  }

  return (
      <Container>
        <input
          placeholder={placeholder}
          onBlur={seachLyrics}
          setValue={setValue}
          setArtist={setArtist}
          />
        <Icon size={20}/>
      </Container>
  );
}

export default App;
