import { Link } from 'react-router-dom';

import IlustrationBandeira from '../../assets/icons/bandeira-usa.svg'

function CardNextRace() {
    return (
        <>
            <section className="proximo-circuito">
                <h2>Venha conhecer o próximo circuito que será percorrido pela formula e!</h2>
                <div className="proximo-circuito-conteudo">
                    <div>
                        <img src={IlustrationBandeira} alt="Bandeira dos Estados Unidos da América" />
                        <h3>Portland - rodada 13</h3>
                    </div>
                    <Link to='/circuitos' className="card-btn">Ver Circuito</Link>
                </div>
            </section>
        </>
    );
}

export default CardNextRace;