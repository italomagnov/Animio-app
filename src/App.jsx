import { Banner } from "./components/Banner";
import { Form } from "./components/Form/Form";
import { GlobalStyle } from "./GlobalStyle";
import { shoonenCard, isekaiCard, seinenCard, terrorCard } from './components/UI/Variaveis'
import { Genero } from "./components/Genero/Genero";

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

  return (
    <>
      <GlobalStyle />
      <Banner />
      <Form 
        dias={dias.map((item) => item.dia)}
        genero={generos.map((item) => item.nome)}
      />
      {generos.map(genero => 
        <Genero 
          key={genero.nome}
          nome={genero.nome}
          corFundo={genero.corGenero}
        />  
      )}
    </>
  );
}

export default App;
