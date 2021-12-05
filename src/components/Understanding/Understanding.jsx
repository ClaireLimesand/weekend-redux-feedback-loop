import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function UnderstandingForm() {

    const [understandingInput, setUnderstandingInput] = useState({understanding: 0});

    const dispatch = useDispatch();
    const history = useHistory();

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
        <div>
            <h3>How well are you understanding the content?</h3>
            <input
                onChange={getUnderstandingInput}
                type="number"
                placeholder="1-5"/>
            <button onClick={onUnderstandingSubmit}>Next</button>
        </div>
    )

} // end UnderstandingForm

export default UnderstandingForm;