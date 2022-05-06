import { combineReducers } from 'redux';
import { legacy_createStore as createStore } from 'redux'
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    form: formReducer
});
const store = createStore(rootReducer);
export default store;