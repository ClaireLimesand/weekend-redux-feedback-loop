import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function FeelingForm() {

    const [feelingInput, setFeelingInput] = useState('');
    
    const dispatch = useDispatch();
    const history = useHistory();

    const onFeelingSubmit = () => {
        console.log('Feeling Dispatch');
        dispatch({
            type: 'ADD_FEELING',
            payload: feelingInput
        });
        goToUnderstanding();
    }

    const goToUnderstanding = () => {
        console.log('going to /understanding')
        // history.push('/understanding');
    }
    
    return (
    <form>
        <h3>How are you feeling today?</h3>
        <input
            value={feelingInput}
            onChange={(event) => {setFeelingInput(event.target.value)}}
            type="number"
            placeholder="1-5"/>
        <button onClick={onFeelingSubmit}>Next</button>
    </form>
    )

} // end FeelingForm

export default FeelingForm;