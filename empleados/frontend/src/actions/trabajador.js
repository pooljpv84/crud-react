//peticiones HTTP con axios
import axios from "axios";
import { createMessage } from "./messages";

import {
  GET_TRABAJADOR,
  DELETE_TRABAJADOR,
  ADD_TRABAJADOR,
  GET_ERRORS,
  UPDATE_TRABAJADOR,
  SELECT_EMPLOYEE,
  LOADING_EMPLOYEE,
} from "./types";

// GET TRABAJADOR
export const getTrabajador = () => (dispatch) => {
  axios
    .get("/api/trabajador/")
    .then((res) => {
      dispatch({
        type: GET_TRABAJADOR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

//BORRAR TRABAJADOR
export const deleteTrabajador = (id) => (dispatch) => {
  axios
    .delete(`/api/trabajador/${id}/`)
    .then((res) => {
      dispatch(createMessage({ deleteTrabajador: "Trabajador eliminado" }));
      dispatch({
        type: DELETE_TRABAJADOR,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};
//INSERTAR TRABAJADOR
export const addTrabajador = (trabajador) => (dispatch) => {
  axios
    .post("/api/trabajador/", trabajador)
    .then((res) => {
      dispatch(createMessage({ addTrabajador: "Trabajador añadido" }));
      dispatch({
        type: ADD_TRABAJADOR,
        payload: res.data,
      });
    })
    .catch((err) => {
      const errors = {
        msg: err.response.data,
        status: err.response.status,
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors,
      });
    });
};

//EDITAR TRABAJADOR
export const updateTrabajador = (id, trabajador) => (dispatch) => {
  axios
    .put(`/api/trabajador/${id}/`, trabajador)
    .then((res) => {
      dispatch(createMessage({ deleteTrabajador: "Trabajador actualizado" }));
      dispatch({
        type: UPDATE_TRABAJADOR,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err.toString()));
};

export const selectEmployee = (employee) => ({
  type: SELECT_EMPLOYEE,
  payload: employee,
});
