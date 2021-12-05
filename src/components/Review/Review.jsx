import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewPage() {
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer)

    const postData = () => {
        console.log('inside POST')
    }

    return (
        <div>
            <h3>Review Your Feedback:</h3>
            <h5>Feeling: {feeling.feeling}</h5>
            <h5>Understanding: {understanding.understanding}</h5>
            <h5>Support: {support.support}</h5>
            <h5>Comments: {comments.comments}</h5>
            <button onClick={postData}>Submit Feedback</button>
        </div>
    )

} 

export default ReviewPage;