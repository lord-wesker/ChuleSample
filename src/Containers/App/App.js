import React, { useState } from 'react';
import './App.css';
import AppTemplate from '../../Templates/AppTemplate/AppTemplate';
import Curriculum from '../../Components/Curriculum/Curriculum';
import AppContext from '../../Context';

function App() {
  const [currType, setCurrType] = useState('');
  const contextValues = {
    curriculum: currType,
    setCurriculum: value => setCurrType(value)
  };

  return (
    <div className="App">
      <AppContext.Provider value={contextValues}>
        <AppTemplate>
          <Curriculum type={contextValues.curriculum} />
        </AppTemplate>
      </AppContext.Provider>
    </div>
  );
}

export default App;
