import React from 'react';

// Componente
import Filtro from '../../Components/Filtrar/index'
import Horarios from '../../Components/horarios/index'
// Estilo Css
import './landing.css'
// Imagem SVG
import lampada from './lampada.svg'

function Landingpage() {
  return (
    <div>
      <div className="titulo-pagina">
        <h1 className="container">Agendamento online</h1>
      </div>
      <div className="container">
        <div className="style-gride">
          <Filtro className="filtro-gride"/>
          <section>
            <h2>22 profissionais encontrados</h2>
            <div className="notifica">
              <img src={lampada} alt="lampada"></img>
              <span>As datas que você selecionou podem ser <strong>alterados</strong> sem avíso prévio</span>
            </div>
            <Horarios />
            <Horarios />
          </section>
        </div>
      </div>
    </div>
  );
}
export default Landingpage;
