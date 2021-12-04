import { useState } from 'react';
import { useDispatch } from 'react-redux';

function UnderstandingForm() {

    const [understandingInput, setUnderstandingInput] = useState('');

    const dispatch = useDispatch();

    const onUnderstandingSubmit = () => {
        console.log('Understanding dispatch');
        dispatch ({
            type: 'ADD_UNDERSTANDING',
            payload: understandingInput
        })
    }

    return (
        <form>
            <input
                value={understandingInput}
                onChange={(event) => {setUnderstandingInput(event.target.value)}}
                type="number"
                placeholder="How well are you understanding the content?"/>
            <button onClick={onUnderstandingSubmit}>Next</button>
        </form>
    )

}

export default UnderstandingForm;