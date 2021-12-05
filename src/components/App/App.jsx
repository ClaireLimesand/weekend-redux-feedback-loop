import React from 'react';
import axios from 'axios';
import './App.css';
import FeelingForm from "../Feeling/Feeling.jsx";
import UnderstandingForm from "../Understanding/Understanding.jsx";
import SupportForm from "../Support/Support.jsx";
import CommentsForm from "../Comments/Comments.jsx";
import ReviewPage from "../Review/Review.jsx";
import { HashRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
    {/* < FeelingForm /> */}
    {/* < UnderstandingForm /> */}
    {/* < SupportForm /> */}
    {/* < CommentsForm />
    < ReviewPage /> */}
    <Router>
      <Route exact path="/">
        <FeelingForm />
      </Route>
      <Route exact path="/UnderstandingForm">
        <UnderstandingForm />
      </Route>
      <Route exact path="/SupportForm">
        <SupportForm />
      </Route>
      <Route exact path="/CommentsForm">
        <CommentsForm />
      </Route>
      <Route exact path="/ReviewPage">
        <ReviewPage />
      </Route>
    </Router>
    
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