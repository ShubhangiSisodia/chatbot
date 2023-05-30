import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/home';
import Chatbot from './components/Chatbot';
import Age from './components/Age';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        {/* Render components based on the application flow */}
        <Home />
        <Chatbot />
        <Age />
      </div>
    </Provider>
  );
};

export default App;
