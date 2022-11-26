import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            nombre:"",
            descripcion:"",
            usuario:"",
            cantidad:0,
            valor:"Alto",
            imagen:""
        }
        this.cambio=this.cambio.bind(this);
        this.guardar=this.guardar.bind(this);
    }

    cambio(e){
        //console.log(e.target.value,e.target.name)
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state);
    }

    guardar(){
        alert("Guardando...");
    }

    render(){
        return(
            <div className="card w-50 m-auto bg-ligt mt-5 mb-5 border-primary">
                <h1 className="m-auto text-dark">Nuevo artículo</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input type="text" placeholder="Título Artículo" name="nombre" onChange={this.cambio} className="form-control"/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Descripción Artículo" name="descripcion" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="number" placeholder="Cantidad" name="cantidad" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Usuario" name="usuario" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <div className="form-group">
                        <input type="text" placeholder="Imagen Artículo" name="imagen" className="form-control mt-3" onChange={this.cambio}/>   
                    </div>
                    <h5 className="text-white mt-2 ms-2">Prioridad</h5>
                    <div className="form-group">
                        <select name="valor" className="form-control mt-3" onChange={this.cambio}>
                            <option>Alto</option>
                            <option>Medio</option>
                            <option>Bajo</option>
                        </select>
                    </div>
                    <div className="d-grid gap-2 col-3 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={this.guardar}>Crear</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;