import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
// importing all my dependencies 

function UnderstandingForm() {

    const [understandingInput, setUnderstandingInput] = useState({understanding: 0});
     // using useState to set the state of feeling input to an 
    // array with an object of understanding: 0

    const dispatch = useDispatch();
    const history = useHistory();
    // declaring dispatch and history

    const getUnderstandingInput = (event) => {
        setUnderstandingInput({
            ...understandingInput,
            understanding: event.target.value
        });
    }

    const onUnderstandingSubmit = () => {
        console.log('Understanding dispatch');
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        });
        goToSupport();
    }

    const goToSupport = () => {
        console.log('going to support');
        history.push('/SupportForm');
    }

    return (
        <form onSubmit={onUnderstandingSubmit}>
            <h3>How well are you understanding the content?</h3>
            <input
                onChange={getUnderstandingInput}
                type="number"
                placeholder="1-5"
                required 
            />
            <button>Next</button>
        </form>
    )

} // end UnderstandingForm

export default UnderstandingForm;