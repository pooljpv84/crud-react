//crud
//IMPORTO LAS CONSTANTES
import { GET_TRABAJADOR, DELETE_TRABAJADOR, ADD_TRABAJADOR, UPDATE_TRABAJADOR } from '../actions/types.js';

const initialState = 
{
    trabajador: []
}

export default function (state = initialState, action)
{
    switch(action.type)
    {
        case GET_TRABAJADOR:
            return {
                ...state,
                trabajador: action.payload
            };
        case DELETE_TRABAJADOR:
            return {
                ...state,
                trabajador: state.trabajador.filter(trabajador => trabajador.id !== action.payload)
            };
        case ADD_TRABAJADOR:
            return {
                ...state,
                trabajador: [...state.trabajador, action.payload]
            };
        case UPDATE_TRABAJADOR:
            return {
                ...state,
                trabajador: state.trabajador.map((trabajador) => {
                    if (trabajador.id == action.payload)
                    {
                        return{
                            ...state.trabajador,
                            ...action.payload   
                        }
                    }
                    else{
                        return {
                            
                            trabajador: [...state.trabajador, action.payload]}
                    }
                })
                    };
        
        default:
            return state;
    }
}