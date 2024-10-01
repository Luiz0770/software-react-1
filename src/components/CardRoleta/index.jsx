import { Link } from 'react-router-dom';

import IlustrationGiro1 from '../../assets/ilustrations/giro-1.svg'
import IlustrationGiro2 from '../../assets/ilustrations/giro-2.svg'

function CardRoleta() {
    return (
        <>
            <section className="giro-gratis bg-card">
                <img src={IlustrationGiro1} alt="Pessoa sentada mexendo no celular." />
                <div className="giro-gratis-conteudo">
                    <h2>Venha coletar seu giro grátis</h2>
                    <div>
                        <Link to='/roleta-semanal' className="card-btn">Roleta semanal</Link>
                        <Link to='/roleta-diaria'>Roleta diária</Link>
                    </div>
                </div>
                <img src={IlustrationGiro2} alt="Pessoa em pé mexendo no celular" />
            </section>
        </>
    );
}

export default CardRoleta;