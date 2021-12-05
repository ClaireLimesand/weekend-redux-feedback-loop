import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function ReviewPage() {

    const history = useHistory();

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer)

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

    const goToFinal = () => {
        console.log('going to final');
        history.push('/FinalPage');
    }

    const displayComments = () => {
        if (comments.comments == "") {
            console.log('in zero comment')
            return (
                <div>
                    <h5>Comments: No comments were left</h5>
                </div>
            )
        } else {
            console.log('in comment')
            return (
                <div>
                    <h5>Comments: {comments.comments}</h5>
                </div>
            )
        }
    };

    return (
        <div>
            <h3>Review Your Feedback:</h3>
            <h5>Feeling: {feeling.feeling}</h5>
            <h5>Understanding: {understanding.understanding}</h5>
            <h5>Support: {support.support}</h5>
            {displayComments()}

            <button onClick={postData}>Submit Feedback</button>
        </div>
    )

} // end ReviewPage

export default ReviewPage;