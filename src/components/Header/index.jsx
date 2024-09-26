import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import IconMenu from "../../assets/icons/menu.svg"

function Header() {
  return (
    <header class="header">
      <div class="header-logo-menu">
        <img id="menu" class="menu" src={IconMenu} alt="menu hamburguer" onclick="clickMenu()"/>
        <NavLink to="/"><img src={Logo} alt="FE Choices"/></NavLink>
      </div>
      <div class="header-nav">
        <div class="header-pages">
          <NavLink to='/palpites'>Palpites</NavLink>
          <NavLink to='/fantasy'>Fantasy</NavLink>
          <NavLink to='/roleta'>Roleta</NavLink>
        </div>
        <div class="header-login">
          <NavLink to='/login'>Entrar</NavLink>
          <NavLink to='/cadastro'>Cadastre-se</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header