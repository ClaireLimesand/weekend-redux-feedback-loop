import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentsForm() {
    
    const [commentsInput, setCommentsInput] = useState({comments: ""});

    const dispatch = useDispatch();
    const history = useHistory();

    const getCommentsInput = (event) => {
        setCommentsInput({
            ...commentsInput,
            comments: event.target.value
        })
    }
    
    const onCommentsSubmit = () => {
        console.log('Comments dispatch');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        });
        goToReview();
    }

    const goToReview = () => {
        console.log('going to /review')
    }

    return (
    <form>
        <h3>Any comments you want to leave?</h3>
        <input 
            onChange={getCommentsInput}
            type="text" />
        <button onClick={onCommentsSubmit}>Next</button>
    </form>
    )

} // end CommentsForm

export default CommentsForm;