import { Banner } from "./components/Banner";
import { Formulario } from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyle";
import { shoonenCard, isekaiCard, seinenCard, terrorCard } from './components/UI/Variaveis'
import { Genero } from "./components/Genero/Genero";
import { useState } from "react";

function App() {

  const generos = [
    {
      nome: 'Shounen',
      corGenero: shoonenCard,
    },
    {
      nome: 'Isekai',
      corGenero: isekaiCard,
    },
    {
      nome: 'Seinen',
      corGenero: seinenCard,
    },
    {
      nome: 'Terror',
      corGenero: terrorCard,
    },
  ]

  const dias = [
    {
      dia: 'Seg',
      horario: ''
    },
    {
      dia: 'Ter',
      horario: ''
    },
    {
      dia: 'Qua',
      horario: ''
    },
    {
      dia: 'Qui',
      horario: ''
    },
    {
      dia: 'Sex',
      horario: ''
    },
    {
      dia: 'Sab',
      horario: ''
    },
    {
      dia: 'Dom',
      horario: ''
    },
  ]

  const [animes, setAnime] = useState([]);

  const novoAnimeAdicionado = (anime) => {
    setAnime([...animes, anime]);
    console.log(anime)
  }

  return (
    <>
      <GlobalStyle />
      <Banner />
      <Formulario 
        dias={dias.map((item) => item.dia)}
        genero={generos.map((item) => item.nome)}
        AnimeCadastrado = {anime => novoAnimeAdicionado(anime)}
      />
      {generos.map(genero => 
        <Genero 
          key={genero.nome}
          nome={genero.nome}
          corFundo={genero.corGenero}
          animes={animes.filter(anime => anime.genero === genero.nome)}
        />  
      )}
    </>
  );
}

export default App;
