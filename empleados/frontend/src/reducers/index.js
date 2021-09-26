import { combineReducers } from 'redux';
import trabajador from './trabajador';
import errors from './errors';
import messages from './messages';

export default combineReducers({
    trabajador,
    errors,
    messages

});