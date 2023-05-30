import { createStore } from 'redux';
import studentReducer from './reducers';

const store = createStore(studentReducer);

export default store;
