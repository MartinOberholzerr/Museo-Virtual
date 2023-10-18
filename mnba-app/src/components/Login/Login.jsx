import React, { useState } from 'react';
import appFirebase from '../../firebase.js'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getAuth, signInWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const auth = getAuth(appFirebase);
function Login(props) {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const functAutenticacion = async (e) =>{  
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;
         
        try {
            await signInWithEmailAndPassword(auth, correo, contraseña);
            navigate("/");
            console.log("Iniciado sesion con exito!!")
        } catch (error) {
            // Comprueba el código de error
            if (error.code === 'auth/wrong-password') {
                toast.error('La contraseña es incorrecta');
            } else if (error.code === 'auth/user-not-found') {
                toast.error('El correo es incorrecto');
            } else {
                console.log(error.message);
            }
        }
    }
   
  
    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result.user);  
          navigate("/");
        }).catch((error) => {
          console.log(error.message);
        });
    };
    

  
      return (
        <div className='d-flex d-flex justify-content-center align-items-center'>
        <div className="formulario2">
        <h2 className='form-title2'>Iniciar Sesion</h2>
        <hr className='line-separator'/>
        <form onSubmit={functAutenticacion}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Ingrese email:</label>
            <input className='input-field' type='text' placeholder='Ingresar email' id='email' required/>
          </div>
  
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Ingrese contraseña:</label>
            <input className='input-field' type={showPassword ? "text" : "password"} placeholder='Ingresar contraseña ' id='password' required/>
          </div>
          <hr className='line-separator'/>
          <button className='boton'>Inicia Sesion</button>
        </form>
  
        <button onClick={signInWithGoogle} className='google-signin-button'>
          <FontAwesomeIcon icon={faGoogle}  className='iconoG'/>
          
        </button>  

      </div>
      <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      </div>
    );
}
      export default Login;