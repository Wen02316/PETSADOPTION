import React, {Component} from 'react';

class Encabezado extends Component {
    
    render() { 
        return ( 
            <div>
                <img className = "mx-auto d-block" src = {process.env.PUBLIC_URL+"./Recursos/trueke_1.png"} height = "180" width= "auto"/>
            </div>
         );
    }
}
 
export default Encabezado;