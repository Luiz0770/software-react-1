import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import IconInstagram from '../../assets/icons/instagram.svg'
import IconFacebook from '../../assets/icons/facebook.svg'
import IconTwitter from '../../assets/icons/twitter.svg'
import IlustrationFooter from '../../assets/ilustrations/footer.svg'

function Footer() {
  return (
    <footer class="footer-bg">
      <div class="footer container">
        <div class="footer-conteudo">
          <div class="logo-redes">
            <a href="./index.html"><img src={Logo} alt="FE Choices"/></a>
            <ul class="redes">
              <li><a href="https://x.com/home"><img src={IconTwitter} alt="Twitter"/></a></li>
              <li><a href="https://www.facebook.com/"><img src={IconFacebook} alt="Facebook"/></a></li>
              <li><a href="https://www.instagram.com/"><img src={IconInstagram} alt="Instagram"/></a></li>
            </ul>
          </div>
          <nav class="link-footer">
            <h3>Links úteis</h3>
            <ul>
              <li><Link to='/palpites'>Palpites</Link></li>
              <li><Link to='/roleta'>Roleta</Link></li>
              <li><Link to='/fantasy'>Fantasy</Link></li>
              <li><Link to='/circuitos'>Circuitos</Link></li>
              <li><Link to='/aovivo'>Ao Vivo</Link></li>
            </ul>
          </nav>
          <nav class="link-footer">
            <h3>Informações</h3>
            <ul>
              <li><Link to='/sobre'>Sobre Nós</Link></li>
              <li><Link to='/afiliados'>Afiliados</Link></li>
              <li><Link to='/premios'>Prêmios</Link></li>
              <li><Link to='/suporte'>Suporte</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
            </ul>
          </nav>
          <div class="footer-img">
            <img src={IlustrationFooter} alt="Pessoa em pé olhando por um binóculo"/>
          </div>
        </div>
        <div class="footer-copy">
          <p>&copy; 2024 fechoices.com | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer