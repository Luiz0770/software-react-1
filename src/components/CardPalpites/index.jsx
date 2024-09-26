import Bandeira from "../../assets/icons/bandeira.svg"

function CardPalpites({ data, nomeCorrida, pilotos}) {

  return (
    <article className="card-palpites">
      <div className="card-palpites-info">
        <img src={Bandeira} alt="bandeira" />
        <div>
          <span>{data}</span>
          <h2>{nomeCorrida}</h2>
        </div>
      </div>
      <div className="lista-pilotos">
        {pilotos.map((selecionado, index) => (
          <div>
            <h3 key={index}>{selecionado.nome}</h3>
            <p>{selecionado.odd}</p>
          </div>
        ))}
        <a href="#">Palpitar</a>
      </div>
    </article>
  )
}

export default CardPalpites