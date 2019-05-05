import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';
import HeaderComponent from './components/HeaderComponent.jsx';
import MapComponent from './components/MapComponent.jsx';

const App = () => {
  return (
    <div className="content-wrapper">
      <HeaderComponent />
      <MapComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
