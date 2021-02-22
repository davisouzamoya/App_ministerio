import React from 'react';
import Header from '../../components/header/index'
import Input from '../../components/input/index'
import { Profile } from "./style";
import pptxgen from "pptxgenjs";
import Background from "../../assets/images/walpaper.jpg";
import { FiFilter } from 'react-icons/fi';

function App() {

  return (
    <div>
    <Header/>
    <Profile>
      <div>
        <img src="https://www.vagalume.com.br/aline-barros/images/aline-barros.jpg"/>
        <h1>Titulo</h1>
      </div>
      <textarea
        readOnly
      >
        Mestre, eu preciso de um milagre
        Transforma minha vida, meu estado
        Faz tempo que eu não vejo a luz do dia
        Estão tentando sepultar minha alegria
        Tentando ver meus sonhos cancelados
        Lázaro ouviu a Sua voz
        Quando aquela pedra removeu
        Depois de quatro dias ele reviveu
        Mestre, não há outro que possa fazer
        Aquilo que só o Teu nome tem todo poder
        Eu preciso tanto de um milagre

        Remove a minha pedra
        Me chama pelo nome
        Muda a minha história
        Ressuscita os meus sonhos
        Transforma a minha vida
        Me faz um milagre
        Me toca nessa hora
        Me chama para fora
        Ressuscita-me

        Mestre, eu preciso de um milagre
        Transforma minha vida, meu estado
        Faz tempo que eu não vejo a luz do dia
        Estão tentando sepultar minha alegria
        Tentando ver meus sonhos cancelados
        Lázaro ouviu a Sua voz
        Quando aquela pedra removeu
        Depois de quatro dias ele reviveu
        Mestre, não há outro que possa fazer
        Aquilo que só o Teu nome tem todo poder
        Eu preciso tanto de um milagre

        Remove a minha pedra
        Me chama pelo nome
        Muda a minha história
        Ressuscita os meus sonhos
        Transforma a minha vida
        Me faz um milagre
        Me toca nessa hora
        Me chama para fora
        Ressuscita-me

        Tu És a própria vida
        A força que há em mim
        Tu És o Filho de Deus
        Que me ergue pra vencer
        Senhor de tudo em mim
        Já ouço a Tua voz
        Me chamando pra viver
        Uma história de poder

        Remove a minha pedra
        Me chama pelo nome
        Muda a minha história
        Ressuscita os meus sonhos
        Transforma a minha vida
        Me faz um milagre
        Me toca nessa hora
        Me chama para fora

        Remove a minha pedra
        Me chama pelo nome
        Muda a minha história
        Ressuscita os meus sonhos
        Transforma a minha vida
        Me faz um milagre
        Me toca nessa hora
        Me chama para fora
        Ressuscita-me
      </textarea>
      <button>Gerar PP</button>
    </Profile>
    </div>
  );
}

export default App;
