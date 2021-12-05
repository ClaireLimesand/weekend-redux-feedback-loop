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
        console.log('going to review');
        history.push('/ReviewPage');
    }

    return (
    <form onSubmit={onCommentsSubmit}>
        <h3>Any comments you want to leave?</h3>
        <input 
            className="commentForm"
            onChange={getCommentsInput}
            placeholder="your comment"
            type="text" 
        />
        <div>
            <button type="submit">Next</button>
        </div>
    </form>
    )

} // end CommentsForm

export default CommentsForm;