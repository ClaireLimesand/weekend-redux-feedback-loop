import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function FeelingForm() {

    const [feelingInput, setFeelingInput] = useState({feeling: 0});
    
    const dispatch = useDispatch();
    const history = useHistory();

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
    <div>
        <h3>How are you feeling today?</h3>
        <input
            onChange={getFeelingInput}
            type="number"
            placeholder="1-5"
            required />
        <button onClick={onFeelingSubmit}>Next</button>
    </div>
    )

} // end FeelingForm

export default FeelingForm;