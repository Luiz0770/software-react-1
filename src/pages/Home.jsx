import { Link } from 'react-router-dom';

import LogoGoogle from '../assets/icons/google.svg'
import IlustrationBemVindo from '../assets/ilustrations/bem-vindo.svg'
import IlustrationGanhePontos from '../assets/ilustrations/ganhe-pontos.svg'
import IlustrationResgatePremios from '../assets/ilustrations/resgate-premios.svg'
import IlustrationBandeira from '../assets/icons/bandeira-usa.svg'
import IlustrationGiro1 from '../assets/ilustrations/giro-1.svg'
import IlustrationGiro2 from '../assets/ilustrations/giro-2.svg'
import ImgFuncionamento from '../assets/img-funcionamento.jpg'

function Home() {
  return (
    <main class="main container">
      {/* ------------------------------------ CARD CARROSSEL ------------------------------------ */}
      <section class="carrosel">
        <button id="prev-img">=</button>
        <div class="container-carrosel">
            <ul class="container-cards" id="images">
              <li class="cadastro bg-card item-carrossel">
                <div class="cadastro-conteudo card-conteudo">
                  <h2>Bem vindo ao FE Choices</h2>
                  <p>Cadastre-se e receba bônus de até 800 pontos</p>
                  <div class="cadastro-btn">
                    <Link to='/cadastro' class="card-btn">cadastre-se</Link>
                    <Link to='/cadastro'><img src={LogoGoogle} alt="google"/></Link>
                  </div>
                  <p class="breadcrumb">
                    <span>Cadastre-se</span>
                    <span>Palpite</span>
                    <span>Ganhe Pontos</span>
                  </p>
                </div>
                <div class="cadastro-img">
                  <img src={IlustrationBemVindo} alt="Dois homens com um carro esportivo"/>
                </div>
              </li>
              <li class="ganhar-pontos bg-card item-carrossel">
                <div class="ganhar-pontos-conteudo card-conteudo">
                  <h2>Ganhe mais pontos!</h2>
                  <p>Chame seus amigos através do seu link e ganhe mais pontos</p>
                  <Link to='/afiliados' class="card-btn">Saiba Mais</Link>
                </div>
                <div class="ganhar-pontos-img">
                  <img src={IlustrationGanhePontos} alt="Três pessoas sentadas com café na mão."/>
                </div>
              </li>
              <li class="resgate-premios bg-card item-carrossel">
                <div class="resgate-premios-conteudo card-conteudo">
                  <h2>Resgate prêmios!</h2>
                  <p>De seus palpites, ganhe pontos e troque seus pontos por prêmios</p>
                  <Link to='/premios' class="card-btn">Veja os prêmios</Link>
                </div>
                <div class="resgate-premios-img">
                  <img src={IlustrationResgatePremios} alt="Pessoa em pé do lado de um pacote de presente"/>
                </div>
              </li>
            </ul>
        </div>
        <button id="next-img">=</button>
      </section>
      {/* ------------------------------------ CARD PROXIMA CORRIDA ------------------------------------ */}
      <section class="proximo-circuito">
        <h2>Venha conhecer o próximo circuito que será percorrido pela formula e!</h2>
        <div class="proximo-circuito-conteudo">
          <div>
            <img src={IlustrationBandeira} alt="Bandeira dos Estados Unidos da América"/>
            <h3>Portland - rodada 13</h3>
          </div>
          <Link to='/circuitos' class="card-btn">Ver Circuito</Link>
        </div>
      </section>
      {/* ------------------------------------ CARD ROLETA ------------------------------------ */}
      <section class="giro-gratis bg-card">
        <img src={IlustrationGiro1} alt="Pessoa sentada mexendo no celular."/>
        <div class="giro-gratis-conteudo">
          <h2>Venha coletar seu giro grátis</h2>
          <div>
            <Link to='/roleta-semanal' class="card-btn">Roleta semanal</Link>
            <Link to='/roleta-diaria'>Roleta diária</Link>
          </div>
        </div>
        <img src={IlustrationGiro2} alt="Pessoa em pé mexendo no celular"/>
      </section>
      {/* ------------------------------ CARD FUNCIONAMENTO PALPITES ------------------------------ */}
      <section class="funcionamento">
        <h2>Como funcionam os Palpites?</h2>
        <p>Com a FE CHOICES, o usuário tem a oportunidade de testar os seus conhecimentos sobre a Fórmula E, palpitando, de forma totalmente gratuita, apenas usando os nossos <span>(pontos).</span></p>
        <div class="funcionamento-img">
          <img src={ImgFuncionamento} alt="Imagem do fantasy"/>
        </div>
      </section>
      {/* ------------------------------ CARD FUNCIONAMENTO FANTASY ------------------------------ */}
      <section class="funcionamento">
        <h2>Como funciona o Fantasy?</h2>
        <p>Com a FE CHOICES, o usuário tem a oportunidade de criar a sua própria equipe no Fantasy, podendo escolher os seus pilotos, e escolhendo a bandeira de sua equipe, de equipes reais da FE.</p>
        <div class="funcionamento-img">
          <img src={ImgFuncionamento} alt="Imagem do fantasy"/>
        </div>
      </section>
    </main>
  )
}

export default Home