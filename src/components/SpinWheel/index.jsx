import React, { useState } from 'react';

function SpinWheel() {
    const [rotacao, setRotacao] = useState(0);
    const opcoes = ["10", "PALPITE GRATIS", "SUPERPALPITE GRATIS", "SEM PREMIACAO", "5", "SEM PREMIACAO"];
    const sectionAngle = 360 / opcoes.length;

    function aoGirarRoleta() {
        const novaRotacao = rotacao + Math.ceil(Math.random() * 10000);

        //Funcionalidade de selecao da roleta sera melhorada em implementacoes futuras  
        const indexSelecionado = Math.floor((novaRotacao % 360 + sectionAngle / 2) / sectionAngle) % opcoes.length;
        const opcaoSelecionada = opcoes[indexSelecionado];

        setRotacao(novaRotacao);

        setTimeout(() => {
            console.log(`Parabéns, você ganhou: ${opcaoSelecionada}`);
        }, 3000); 
    }

    return (
        <div className='roleta'>
            <div 
                className="spin-wheel" 
                style={{ transform: `rotate(${rotacao}deg)`, transition: 'transform 3s ease-out' }}
            >
                {opcoes.map((opcao, idx) => (
                    <div 
                        key={idx} 
                        style={{
                            transform: `rotate(${idx * sectionAngle}deg)`,
                            backgroundColor: idx % 2 === 0 ? '#596E84' : '#22374D',
                            fontSize: 24
                        }}
                    >
                        {opcao}
                    </div>
                ))}
            </div>
            <button className="spin" onClick={aoGirarRoleta}>GIRAR ROLETA</button>
            <div className="stoper"></div>
        </div>
    );
}

export default SpinWheel;
