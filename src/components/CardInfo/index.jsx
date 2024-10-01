function CardInfo({titulo, texto, imagem}) {
    return (
        <>
            <section className="funcionamento">
                <h2>{titulo}</h2>
                <p>{texto}</p>
                <div className="funcionamento-img">
                    <img src={imagem} alt="Imagem do fantasy" />
                </div>
            </section>
        </>
    );
}

export default CardInfo;