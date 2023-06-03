import React from 'react';
import './App.css';
import './styles/main.scss';
import './styles/text.scss';
import './styles/syntax.sass';
import Pd from './components/pd';
import PlantsList from './components/plants';

function App() {
  return (
    <div className="App">
      <h1 className='clat'>Alp Plants</h1>
      <Pd />
      <PlantsList />
    </div>
  );
}

export default App;
