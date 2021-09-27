import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getTrabajador,
  deleteTrabajador,
  updateTrabajador,
  selectEmployee,
} from "../../actions/trabajador";

export class Leads extends Component {
  static propTypes = {
    trabajador: PropTypes.array.isRequired,
    getTrabajador: PropTypes.func.isRequired,
    deleteTrabajador: PropTypes.func.isRequired,
    updateTrabajador: PropTypes.func.isRequired,
    selectEmployee: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getTrabajador();
  }

  render() {
    return (
      <Fragment>
        <h2>Trabajadores</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cedula</th>
              <th>Telefono</th>
              <th>E-mail</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.trabajador.map((trabajador) => (
              <tr key={trabajador.id}>
                <td>{trabajador.id}</td>
                <td>{trabajador.nombre_usuario}</td>
                <td>{trabajador.cedula_usuario}</td>
                <td>{trabajador.telefono_usuario}</td>
                <td>{trabajador.email_usuario}</td>
                <td>
                  <button
                    onClick={this.props.deleteTrabajador.bind(
                      this,
                      trabajador.id
                    )}
                    className="btn btn-danger btn-sm"
                  >
                    Borrar
                  </button>
                  <button
                    onClick={() => this.props.selectEmployee(trabajador)}
                    className="btn btn-success btn-sm"
                  >
                    Seleccionar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    trabajador: state.trabajador.trabajador,
  };
};
export default connect(mapStateToProps, {
  getTrabajador,
  deleteTrabajador,
  updateTrabajador,
  selectEmployee,
})(Leads);
