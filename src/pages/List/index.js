import React from 'react';
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import { Container } from "./style";
import { FiFilter } from 'react-icons/fi';

function List() {
  return (
    <div>

      <Header/>
      <Input
        placeholder="Buscar música"
        Icon={FiFilter}
      />
      {/* <h1>Musicas cadastradas</h1> */}
      <Container>
      <ul>
        <li>
          <a href="#">
            <img src="https://www.vagalume.com.br/aline-barros/images/aline-barros.jpg" alt=""/>
            <div>
                <span>Yeshua</span>
                <span>Fernandinho</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://www.vagalume.com.br/aline-barros/images/aline-barros.jpg" alt=""/>
            <div>
                <span>Yeshua</span>
                <span>Fernandinho</span>
            </div>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="https://www.vagalume.com.br/aline-barros/images/aline-barros.jpg" alt=""/>
            <div>
                <span>Yeshua</span>
                <span>Fernandinho</span>
            </div>
          </a>
        </li>
      </ul>
      </Container>
    </div>
  );
}

export default List;
