import React from 'react';
import withGrapes from './hoc/withGrapes';
import './App.css';
import Card from './components/Card';

function App() {
  const GrapeJsScreen = withGrapes(Card);
  return (
    <div className="App">
      <GrapeJsScreen />
    </div>
  );
}

export default App;
