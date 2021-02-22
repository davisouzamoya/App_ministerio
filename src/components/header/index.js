import React,{useState} from 'react';
import { Container } from "./style";
import { HiMenu } from 'react-icons/hi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom'

function App() {
  const [openNav,setOpenNav] = useState(250)
  const [closeNav,setCloseNav] = useState(0)

  return (
  <>
    <Container>
      <section 
        tamanho={true}
      >
        <a 
          href="javascript:void(0)" 
          className="closebtn" 
        >
        <AiOutlineCloseCircle size={30}/>
        </a>
        <Link to={`/`}>Cadastro</Link>
        <Link to={`/list`}>Lista de músicas</Link>
        </section>
      <header>
        <a 
          tamanho={false}
        >
          <HiMenu size={35}/>
        </a>
      </header>
        <div>
          <h1>Min. Louvor</h1>
        </div>
    </Container>
    </>
  );
}

export default App;
