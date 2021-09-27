//crud
//IMPORTO LAS CONSTANTES
import {
    GET_TRABAJADOR,
    DELETE_TRABAJADOR,
    ADD_TRABAJADOR,
    UPDATE_TRABAJADOR,
    SELECT_EMPLOYEE,
    LOADING_EMPLOYEE,
  } from "../actions/types.js";
  
  const initialState = {
    trabajador: [],
    selectEmployee: {},
    id: null,
  };
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_TRABAJADOR:
        return {
          ...state,
          trabajador: action.payload,
          loading: false,
        };
      case DELETE_TRABAJADOR:
        return {
          ...state,
          trabajador: state.trabajador.filter(
            (trabajador) => trabajador.id !== action.payload
          ),
        };
      case ADD_TRABAJADOR:
        return {
          ...state,
          trabajador: [...state.trabajador, action.payload],
        };
      case SELECT_EMPLOYEE: {
        return {
          ...state,
          selectEmployee: action.payload,
          id: action.payload.id,
        };
      }
      case UPDATE_TRABAJADOR:
        const { id } = action.payload;
        const employees = state.trabajador.map((employee) => {
          if (employee.id === id) {
            return {
              ...action.payload,
            };
          }
          return employee;
        });
        return {
          ...state,
          selectEmployee: {},
          id: null,
          loading: false,
          trabajador: employees,
        };
  
      default:
        return state;
    }
  }
  