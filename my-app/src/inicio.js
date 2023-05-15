import React from 'react';
import ReactDOM from 'react-dom/client';

export function Inicio(){
    return (
        <div className='Caja'>
            <div className='Options'>
                <button>Iniciar Sesion</button>
                <button>Comenzar Experiencia</button>
                <button>Ajustes</button>
            </div>
            <button>Modo noche</button>
        </div>
    )
}

export function Background(){
    return(
        <div className='backgroundInicio'>
            
        </div>
    )
}