import { useState } from 'react';
import { useDispatch } from 'react-redux';

function FeelingForm() {

    const [feelingInput, setFeelingInput] = useState('');
    
    const dispatch = useDispatch();

    const onFeelingSubmit = (event) => {
        console.log('Feeling Dispatch');
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        })
    }

    return (
    <form>
        <input
            value={feelingInput}
            onChange={(event) => {setFeelingInput(event.target.value)}}
            type="number"
            placeholder="How are you feeling about today's content?" />
        <button onClick={onFeelingSubmit}>Next</button>
    </form>
    )

} // end FeelinForm

export default FeelingForm;