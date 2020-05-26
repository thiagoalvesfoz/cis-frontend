import React from 'react'
import './perfil.css'
import Bemvindo from '../../Components/bem vindo/bemvindo'
import Dados from '../../Components/dados/dados'
const perfil = () => ( 
   
        <>
            <div className="titulo-pagina">
                <h1 className="container">Area do paciente</h1>
            </div>
            <section className="perfil container">
               <Bemvindo/>                 
               <Dados/>
                    
            </section>
        </>
    );


export default perfil
