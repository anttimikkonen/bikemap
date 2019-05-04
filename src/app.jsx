import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import HeaderComponent from './components/HeaderComponent.jsx';

const App = () => {
  return (
    <div>
      <HeaderComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
