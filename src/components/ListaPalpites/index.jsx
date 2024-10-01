import CardPalpites from "../CardPalpites"

function ListaPalpites() {

  const palpites = [
    {
      data: "29 de jun, 18:03",
      nomeCorrida: "HANKOOK PORTLAND E-PRIX - TOP 3",
      pilotos: [
        {
          nome: "Da Costa, Antônio Félix", 
          odd: "1.2",
        },
        {
          nome: "Hughes, Jake", 
          odd: "1.2",
        },
        {
          nome: "Nato, Norman", 
          odd: "1.2",
        },
        {
          nome: "Cassidy, Nick", 
          odd: "1.2",
        },
        {
          nome: "Evans, Mitch", 
          odd: "1.2",
        },
        {
          nome: "Vandoorne, Stoffel", 
          odd: "1.2",
        },
        {
          nome: "Vergne, Jean-Éric", 
          odd: "1.2",
        },
        {
          nome: "Gunther, Maximilian", 
          odd: "1.2",
        },
        {
          nome: "Frijns, Robin", 
          odd: "1.2",
        },
        {
          nome: "Rowland, Oliver", 
          odd: "1.2",
        },
        {
          nome: "Dennis, Jake", 
          odd: "1.2",
        },
        {
          nome: "Mortara, Edoardo", 
          odd: "1.2",
        },
      ]
    },

    {
      data: "29 de jun, 18:03",
      nomeCorrida: "HANKOOK PORTLAND E-PRIX - TOP 3",
      pilotos: [
        {
          nome: "Da Costa, Antônio Félix", 
          odd: "1.2",
        },
        {
          nome: "Hughes, Jake", 
          odd: "1.2",
        },
        {
          nome: "Nato, Norman", 
          odd: "1.2",
        },
        {
          nome: "Cassidy, Nick", 
          odd: "1.2",
        },
        {
          nome: "Evans, Mitch", 
          odd: "1.2",
        },
        {
          nome: "Vandoorne, Stoffel", 
          odd: "1.2",
        },
        {
          nome: "Vergne, Jean-Éric", 
          odd: "1.2",
        },
        {
          nome: "Gunther, Maximilian", 
          odd: "1.2",
        },
        {
          nome: "Frijns, Robin", 
          odd: "1.2",
        },
        {
          nome: "Rowland, Oliver", 
          odd: "1.2",
        },
        {
          nome: "Dennis, Jake", 
          odd: "1.2",
        },
        {
          nome: "Mortara, Edoardo", 
          odd: "1.2",
        },
      ]
    },
    
  ]

  return (
    <section className="section-palpites">
      <div>
        {palpites.map((palpite, idx) => <CardPalpites
          key={idx}
          data={palpite.data}
          nomeCorrida={palpite.nomeCorrida}
          pilotos={palpite.pilotos}
        />)}
      </div>
    </section>
  )
}
export default ListaPalpites;