import React from 'react';
import './styles.css';

function Forms(){


    return(
        <div className="forms-container">
            <div className="forms-background">
                <label >Nome</label>
                <input placeholder="Guilherme Quintal"></input>
                <label>E-mail</label>
                <input placeholder="guilherme@gmail.com"></input>
                <label>Investimento</label>
                <input placeholder="R$"></input>
                <label>Mensagem</label>
                <input id="message" placeholder="Bom dia"></input>
                <button className="forms-button">ENVIAR MENSAGEM</button>
            </div>
        </div>
    );
}

export default Forms;