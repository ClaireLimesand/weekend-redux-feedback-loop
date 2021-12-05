import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentsForm() {
    
    const [commentsInput, setCommentsInput] = useState({comments: ""});
    // using useState to set the state of commentsInput to an 
    // array with an object of commetns: ""

    const dispatch = useDispatch();
    const history = useHistory();
    // declaring dispatch and history

    const getCommentsInput = (event) => {
        setCommentsInput({
            ...commentsInput,
            comments: event.target.value
        });
         // uses spread operator on commentsInput
        // sets comments value
    }
    
    const onCommentsSubmit = () => {
        console.log('Comments dispatch');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        });
        // dispatches commentsInput to commentsReducer
        goToReview();
        // sends user to next page
    }

    const goToReview = () => {
        console.log('going to review');
        history.push('/ReviewPage');
    }
    // sends user to next page

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