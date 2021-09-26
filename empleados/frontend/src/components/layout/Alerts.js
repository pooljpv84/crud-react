import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired,
      };
    
      componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        if (error !== prevProps.error) {
          if (error.msg.nombre_usuario) alert.error(`nombre usuario: ${error.msg.nombre_usuario.join()}`);
          if (error.msg.cedula_usuario) alert.error(`cedula usuario: ${error.msg.cedula_usuario.join()}`);
          if (error.msg.telefono_usuario) alert.error(`telefono usuario: ${error.msg.telefono_usuario.join()}`);
          if (error.msg.email_usuario) alert.error(`email usuario: ${error.msg.email_usuario.join()}`);
          

        }
    
        if (message !== prevProps.message) {
          if (message.deleteTrabajador) alert.success(message.deleteTrabajador);
          if (message.addTrabajador) alert.success(message.addTrabajador);
          
        }
      }
    

    render() {
        return (
            <Fragment/>
        )
    }
}
const mapStateToProps = (state) => ({
    error: state.errors,
    message: state.messages,
  });
  export default connect(mapStateToProps)(withAlert()(Alerts));
