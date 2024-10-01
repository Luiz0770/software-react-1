
import ImgFuncionamento from '../assets/img-funcionamento.jpg'
import Carrosel from '../components/Carrosel';
import CardNextRace from '../components/CardNextRace';
import CardInfo from '../components/CardInfo';
import CardRoleta from '../components/CardRoleta';

function Home() {
  return (
    <main className="main-home container">
      <Carrosel />
      <CardNextRace />
      <CardRoleta/>
      {/* ------------------------------ CARD FUNCIONAMENTO PALPITES ------------------------------ */}
      <CardInfo
        titulo={"Como funcionam os Palpites?"}
        texto={"Com a FE CHOICES, o usuário tem a oportunidade de testar os seus conhecimentos sobre a Fórmula E, palpitando, de forma totalmente gratuita, apenas usando os nossos(pontos)."} 
        imagem={ImgFuncionamento}/>
      {/* ------------------------------ CARD FUNCIONAMENTO FANTASY ------------------------------ */}
      <CardInfo
        titulo={"Como funciona o Fantasy?"}
        texto={"Com a FE CHOICES, o usuário tem a oportunidade de criar a sua própria equipe no Fantasy, podendo escolher os seus pilotos, e escolhendo a bandeira de sua equipe, de equipes reais da FE."} 
        imagem={ImgFuncionamento}/>
    </main>
  )
}

export default Home