import { NavLink } from 'react-router-dom';

function Aside() {
  return(
    <aside class="aside" id="aside">
      <a class="link-obter" href="./index.html">Ganhe 20</a>
      <nav>
        <p><button onclick="eventoPopulares()" aria-controls="populares" aria-expanded="true">Populares</button></p>
        <ul id="populares" class="ativa">
          <li><NavLink to='/palpites'>Palpites</NavLink></li>
          <li><NavLink to='/roleta'>Roleta</NavLink></li>
          <li><NavLink to='/fantasy'>Fantasy</NavLink></li>
          <li><NavLink to='/circuitos'>Circuitos</NavLink></li>
          <li><NavLink to='/aovivo'>Ao Vivo</NavLink></li>
        </ul>
      </nav>
      <nav>
        <ul>
          <li><NavLink to='/sobre'>Sobre Nós</NavLink></li>
          <li><NavLink to='/afiliados'>Afiliados</NavLink></li>
          <li><NavLink to='/premios'>Prêmios</NavLink></li>
          <li><NavLink to='/suporte'>Suporte</NavLink></li>
          <li><NavLink to='/blog'>Blog</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

export default Aside