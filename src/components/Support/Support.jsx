import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function SupportForm() {

    const  [supportInput, setSupportInput] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const onSupportSubmit = () => {
        console.log('Support dispatch');
        dispatch({
            type: 'ADD_SUPPORT',
            payload: supportInput
        });
        goToComments();
    }

    const goToComments = () => {
        console.log('going to /comments')
    }

    return (
    <form>
        <h3>How well are you being supported?</h3>
        <input 
            value={supportInput}
            onChange={(event) => {setSupportInput(event.target.value)}}
            type="number"
            placeholder="1-5"/>
        <button onClick={onSupportSubmit}>Next</button>
    </form>
    )

} // end SupportForm

export default SupportForm;