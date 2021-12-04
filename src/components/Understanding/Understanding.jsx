import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function UnderstandingForm() {

    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const onUnderstandingSubmit = () => {
        console.log('Understanding dispatch');
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        });
        goToSupport();
    }

    const goToSupport = () => {
        console.log('going to /Support')
    }

    return (
        <form>
            <h3>How well are you understanding the content?</h3>
            <input
                value={understandingInput}
                onChange={(event) => {setUnderstandingInput(event.target.value)}}
                type="number"
                placeholder="1-5"/>
            <button onClick={onUnderstandingSubmit}>Next</button>
        </form>
    )

}

export default UnderstandingForm;