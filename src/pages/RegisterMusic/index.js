import React,{useState} from 'react';
import {base,seachVideoApi} from '../../service/api'
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import Select from 'react-select';
import { Container, } from "./style";
import makeAnimated from 'react-select/animated';
import { BsSearch } from 'react-icons/bs';

function RegisterMusic() {
  const [value,setValue] = useState('')
  const [lyrics,setLyrics] = useState('')
  const [artist,setArtist] = useState('')
  const [urlVideo,setUrlVideo] = useState('')
  const animatedComponents = makeAnimated(); 

    
    async function seachVideo(e){
      if(e){
        const idChannel = await seachVideoApi.get(`youtube/v3/search`,{
          params:{
            type:'channel',
            q:artist
          }
        })

        const idVideo = await seachVideoApi.get(`youtube/v3/search`,{
          params:{
            type:'video',
            q:e.label,
            channelId:idChannel.data.items[0].id["channelId"]
          }
        })


        const Lyrics = await base.get(`/search.php`,{
          params:{
            art:artist,
            song:e.label
          }
        })
        setUrlVideo(idVideo.data.items[0].id.videoId)
        setLyrics(Lyrics.data)
      }else{
        setLyrics('')
        setUrlVideo('')
      }
    }

    const customStyles = {
      input: (provided, state) => ({
        ...provided,
        padding: 13,
      })
    }

  return (
    <div>
      <Header/>
      <Container>
      <Input 
        placeholder="nome artista"
        setValue={setValue}
        setArtist={setArtist}
        Icon={BsSearch}
      />
        {value &&
          <Select
            className="teste"
            closeMenuOnSelect={true}
            components={animatedComponents}
            options={value}
            styles={customStyles}
            isClearable={true}
            onChange={(e) =>{seachVideo(e)}}
          >
          </Select>
         }

        {urlVideo &&
          <iframe  src={`https://www.youtube.com/embed/${urlVideo}`}></iframe>
        } 

        {lyrics &&
          lyrics.mus.map(data =>( 
            < textarea 
              readOnly
              key={data.id}
            >
              {data.text}
            </textarea>
          ))
        } 
        { lyrics  &&
          <button>Cadastrar</button>
          }
        
      </Container>
    </div>
  );
}

export default RegisterMusic;
