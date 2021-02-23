import React from 'react';
import ShowList from './ShowList';
import shows from '../data/data.json';
import '../stylesheets/App.css';

function App() {
  return (
    <div>
      <h1>Searchflix</h1>
      <ShowList shows={shows} />
    </div>
  );
}

export default App;
