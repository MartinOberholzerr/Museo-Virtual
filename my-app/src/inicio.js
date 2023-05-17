import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import './index.js'

export function Inicio(){
    return (
    <div class="page">
	
        <input type="checkbox" id="themeSwitch" name="theme-switch" class="theme-switch__input" />
        <label for="themeSwitch" class="theme-switch__label">
            <span></span>
        </label>
        

    
        <div class="login-page">
        <div class="form">
            
            
            <form class="login-form">
            <button>Empezar experiencia</button>
            
            <button>Registrarse</button>
            
            <button>Configuracion</button>
            
            <button>Donaciones</button>
        <p class="message">¿Buscas registrarte? <a href="#">Create an account</a></p>
        </form>
    </div>
    </div>
</div>
    )
}

export function Background(){
    return(
        <div className='backgroundImage'>
            
        </div>
    )
}
