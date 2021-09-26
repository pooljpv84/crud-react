import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { addTrabajador, updateTrabajador } from '../../actions/trabajador';

export class Form extends Component {
    state = {
        nombre_usuario: '',
        cedula_usuario: '',
        telefono_usuario: '',
        email_usuario: ''  
          
    }
    //prototipos para guardar
    static PropTypes ={
        addTrabajador: PropTypes.func.isRequired,
        updateTrabajador: PropTypes.func.isRequired
        
    };
    
    onChange = e => this.setState({[e.target.name]: e.target.value})

    //guardar
    onSubmit = e => {
        e.preventDefault();
        //console.log("guardado");
        const {nombre_usuario, cedula_usuario, telefono_usuario, email_usuario} = this.state;
        const trabajador = {nombre_usuario, cedula_usuario, telefono_usuario, email_usuario};
        this.props.addTrabajador(trabajador);
        //blanquear al guardar
        this.setState({
          nombre_usuario: '',
          cedula_usuario: '',
          telefono_usuario: '',
          email_usuario: ''
        });
    }

    


    render() {
        const {nombre_usuario, cedula_usuario, telefono_usuario, email_usuario} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
        <h2>Añadir trabajador</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nombre</label>
            <input
              className="form-control"
              type="text"
              name="nombre_usuario"
              onChange={this.onChange}
              value={nombre_usuario}
            />
          </div>
          <div className="form-group">
            <label>Cedula</label>
            <input
              className="form-control"
              type="text"
              name="cedula_usuario"
              onChange={this.onChange}
              value={cedula_usuario}
            />
          </div>
          <div className="form-group">
            <label>Telefono</label>
            <input
              className="form-control"
              type="text"
              name="telefono_usuario"
              onChange={this.onChange}
              value={telefono_usuario}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email_usuario"
              onChange={this.onChange}
              value={email_usuario}
            />
          </div>
          
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </div>
        </form>
      </div>
        )
    }
}

export default connect(null, {addTrabajador, updateTrabajador})(Form);
