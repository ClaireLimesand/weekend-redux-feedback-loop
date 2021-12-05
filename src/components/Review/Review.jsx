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
                    <h4>Comments: {comments.comments}</h4>
                </div>
            )
        }
    };

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