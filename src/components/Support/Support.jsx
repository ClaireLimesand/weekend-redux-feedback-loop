import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
// importing all my dependencies 

function SupportForm() {

    const [supportInput, setSupportInput] = useState({support: 0});
    // using useState to set the state of supportInput to an 
    // array with an object of support: 0

    const dispatch = useDispatch();
    const history = useHistory();
     // declaring dispatch and history

    const getSupportInput = (event) => {
        setSupportInput({
            ...supportInput,
            support: event.target.value
        });
        // uses spread operator on supportInput
        // sets supportvalue
    }

    const onSupportSubmit = () => {
        console.log('Support dispatch');
        console.log('support input:', supportInput)
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        });
        // dispatches supportInput to supportReducer
        goToComments();
        // sends user to next page
    }

    const goToComments = () => {
        console.log('going to comments');
        history.push('/CommentsForm');
    }
    // sends user to next page

    const limitSupport = () => {
        if (supportInput.support > 0 && supportInput.support < 5) {
            onSupportSubmit()
        } else {
            alert("Feedback must be between 1 and 5")
        }
    }
     // only submits form if input value is between 1 and 5

    return (
    <form onSubmit={limitSupport}>
        <h3>How well are you being supported?</h3>
        <input 
            onChange={getSupportInput}
            type="number"
            placeholder="1-5"
            required
        />
        <button type="submit">Next</button>
    </form>
    )

} // end SupportForm

export default SupportForm;