import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
// importing all my dependencies 

function FeelingForm() {

    const [feelingInput, setFeelingInput] = useState({feeling: 0});
    // using useState to set the state of feeling input to an 
    // array with an object of feeling: 0
    
    const dispatch = useDispatch();
    const history = useHistory();
    // declaring dispatch and history

    const getFeelingInput = (event) => {
        setFeelingInput({
            ...feelingInput,
            feeling: event.target.value
        });
    }

    const onFeelingSubmit = () => {
        console.log('Feeling Dispatch');
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        });
        goToUnderstanding();
    }

    const goToUnderstanding = () => {
        console.log('going to understanding');
        history.push('/UnderstandingForm');
    }
    
    return (
    <form onSubmit={onFeelingSubmit}>
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