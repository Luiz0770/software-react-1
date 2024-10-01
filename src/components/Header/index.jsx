import { NavLink } from 'react-router-dom';

import Logo from '../../assets/logo.svg'
import IconMenu from "../../assets/icons/menu.svg"

function Header() {
  return (
    <header className="header">
      <div className="header-logo-menu">
        <img id="menu" className="menu" src={IconMenu} alt="menu hamburguer"/>
        <NavLink to="/"><img src={Logo} alt="FE Choices"/></NavLink>
      </div>
      <div className="header-nav">
        <div className="header-pages">
          <NavLink to='/palpites'>Palpites</NavLink>
          <NavLink to='/fantasy'>Fantasy</NavLink>
          <NavLink to='/roleta'>Roleta</NavLink>
        </div>
        <div className="header-login">
          <NavLink to='/login'>Entrar</NavLink>
          <NavLink to='/cadastro'>Cadastre-se</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header