import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
// importing all my dependencies 

function FeelingForm() {

    const [feelingInput, setFeelingInput] = useState({feeling: 0});
    // using useState to set the state of feelingInput to an 
    // array with an object of feeling: 0
    
    const dispatch = useDispatch();
    const history = useHistory();
    // declaring dispatch and history

    const getFeelingInput = (event) => {
        setFeelingInput({
            ...feelingInput,
            feeling: event.target.value
        });
        // uses spread operator on feelingInput
        // sets feeling value
    }


    const onFeelingSubmit = () => {
        console.log('Feeling Dispatch');
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        });
        // dispatches feelingInput to feelingReducer
        goToUnderstanding()
        // sends user to next page
    }

    const goToUnderstanding = () => {
        console.log('going to understanding');
        history.push('/UnderstandingForm');
    }
    // sends user to next page
    
    const limitFeelings = () => {
        if (feelingInput.feeling > 0 && feelingInput.feeling < 5) {
            onFeelingSubmit()
        } else {
            alert("Feedback must be between 1 and 5")
        }
    }
    // only submits form if input value is between 1 and 5

    return (
    <form onSubmit={limitFeelings}>
        <h3>How are you feeling today?</h3>
        <input
            onChange={getFeelingInput}
            type="number"
            placeholder="1-5"
            required
            />
        <button type="submit">Next</button>
    </form>
    )

} // end FeelingForm

export default FeelingForm;