import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from "../Feeling/Feeling.jsx"
import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    < FeelingForm />
    {/* <Router>
      <Route exact path="/"> */}
{/* <compontent name will go here /> */}
      {/* </Route>
    </Router> */}
    
    </div>
    
  );
}

export default App;


// set up routes to new files 

// pattern:

// take info 
// dispatch to whatever
// goToPlace
// GoToPlace will use useHistory to new page 