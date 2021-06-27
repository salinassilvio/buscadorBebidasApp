import React from 'react';

const Formulario = () => {
    return ( 
        <form 
            className="col-12"
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o ingredientes</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingrediente"
                    ></input>
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="categoria"
                    >
                        <option value="">--Selecciona Categoria--</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <input
                        type="submit"
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    ></input>
                </div>
            </div>
        </form>

     );
}
 
export default Formulario;