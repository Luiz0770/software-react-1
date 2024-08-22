import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import IconMenu from "../../assets/icons/menu.svg"

function Header() {
  return (
    <header class="header">
      <div class="header-logo-menu">
        <img id="menu" class="menu" src={IconMenu} alt="menu hamburguer" onclick="clickMenu()"/>
        <Link to="/"><img src={Logo} alt="FE Choices"/></Link>
      </div>
      <div class="header-nav">
        <div class="header-pages">
          <Link to='/palpites'>Palpites</Link>
          <Link to='/fantasy'>Fantasy</Link>
          <Link to='/roleta'>Roleta</Link>
        </div>
        <div class="header-login">
          <Link to='/login'>Entrar</Link>
          <Link to='/cadastro'>Cadastre-se</Link>
        </div>
      </div>
    </header>
  )
}

export default Header