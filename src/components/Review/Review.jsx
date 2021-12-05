import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewPage() {

    const history = useHistory();

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);
    // sets new values to send to router based on reducers 

    const postData = () => {
        console.log('inside POST');
        axios ({
            method: 'POST',
            url:  '/feedback',
            data: {
                "feeling": `${feeling.feeling}`,
                "understanding": `${understanding.understanding}`,
                "support": `${support.support}`,
                "comments": `${comments.comments}`,
            }
        }).then ((response) => {
            console.log('feedback', feedback);
        }).catch ((error) => {
            console.log('error', error);
        })
        goToFinal();
    }
    // sends data 

    const goToFinal = () => {
        console.log('going to final');
        history.push('/FinalPage');
    }
    // sends user to next page

    const displayComments = () => {
        if (comments.comments == "") {
            console.log('in zero comment')
            return (
                <div>
                    <h4>Comments: No comments were left</h4>
                </div>
            )
        } else {
            console.log('in comment')
            return (
                <div>
                    <h4>Comments: {comments.comments}</h4>
                </div>
            )
        }
    };
    // changes comments diplay if user put comments or didn't 

    return (
        <div>
            <h3>Review Your Feedback:</h3>
            <h4>Feeling: {feeling.feeling}</h4>
            <h4>Understanding: {understanding.understanding}</h4>
            <h4>Support: {support.support}</h4>
            {displayComments()}
            <button onClick={postData}>Submit Feedback</button>
        </div>
    )

} // end ReviewPage

export default ReviewPage;