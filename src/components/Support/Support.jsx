import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function SupportForm() {

    const [supportInput, setSupportInput] = useState({support: 0});

    const dispatch = useDispatch();
    const history = useHistory();

    const getSupportInput = (event) => {
        setSupportInput({
            ...supportInput,
            support: event.target.value
        });
    }

    const onSupportSubmit = () => {
        console.log('Support dispatch');
        console.log('support input:', supportInput)
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        });
        goToComments();
    }

    const goToComments = () => {
        console.log('going to comments');
        history.push('/CommentsForm');
    }

    return (
    <form onSubmit={onSupportSubmit}>
        <h3>How well are you being supported?</h3>
        <input 
            onChange={getSupportInput}
            type="number"
            placeholder="1-5"
            required
        />
        <button>Next</button>
    </form>
    )

} // end SupportForm

export default SupportForm;