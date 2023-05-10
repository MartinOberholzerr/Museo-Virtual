
import React from 'react';

const Formulario = () => {

  return (
    <form className="m-4">
      <div className="form-group">
        <label htmlFor="nombre">Nombre:</label>
        <input type="text" className="form-control" id="nombre" />
      </div>
      <div className="form-group ">
        <label htmlFor="apellido">Apellido:</label>
        <input type="text" className="form-control" id="apellido" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" className="form-control" id="email" />
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea className="form-control" id="mensaje" rows="3"></textarea>
      </div>
      <button type="submit" className="btn btn-outline-warning">Enviar</button>
    </form>
  );
};

export default Formulario;

