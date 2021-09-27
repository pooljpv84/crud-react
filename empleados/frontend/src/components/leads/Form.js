import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addTrabajador,
  updateTrabajador,
  getTrabajador,
} from "../../actions/trabajador";

const INITIAL_STATE = {
  nombre_usuario: "",
  cedula_usuario: "",
  telefono_usuario: "",
  email_usuario: "",
};

export class Form extends Component {
  state = {
    ...INITIAL_STATE,
  };

  //prototipos para guardar
  static PropTypes = {
    addTrabajador: PropTypes.func.isRequired,
    updateTrabajador: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({ ...this.props.selectEmployee });
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  //guardar
  onSubmit = (e) => {
    const { id } = this.props;
    e.preventDefault();
    //console.log("guardado");
    const { nombre_usuario, cedula_usuario, telefono_usuario, email_usuario } =
      this.state;
    const trabajador = {
      nombre_usuario,
      cedula_usuario,
      telefono_usuario,
      email_usuario,
    };

    if (id) {
      this.props.updateTrabajador(id, trabajador);
    } else {
      this.props.addTrabajador(trabajador);
      //blanquear al guardar
    }

    this.setState({
      ...INITIAL_STATE,
    });
  };

  render() {
    const { nombre_usuario, cedula_usuario, telefono_usuario, email_usuario } =
      this.state;
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
              {this.props.id ? "Editar" : "Guardar"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectEmployee: state.trabajador.selectEmployee,
    id: state.trabajador.id,
  };
};

export default connect(mapStateToProps, {
  addTrabajador,
  updateTrabajador,
  getTrabajador,
})(Form);
