import React from 'react';
import {useHistory} from 'react-router-dom';

function FinalPage() {

    const history = useHistory();

    const goToStart = () => {
        console.log('going to start');
        history.push('/');
    }
    // sends user back to home page

    return (
        <div>
            <h3>Thank you!</h3>
            <button onClick={goToStart}>Leave New Feedback</button>
        </div>
    )
}

export default FinalPage;