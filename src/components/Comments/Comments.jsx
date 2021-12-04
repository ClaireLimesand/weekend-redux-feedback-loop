import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';

function CommentsForm() {
    
    const [commentsInput, setCommentsInput] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();
    
    const onCommentsSubmit = () => {
        console.log('Comments dispatch');
        dispatch({
            type: 'ADD_COMMENTS',
            payload: commentsInput
        });
        goToReview();
    }

    const goToReview = () => {
        console.log('going to /review')
    }

    return (
    <form>
        <h3>Any comments you want to leave?</h3>
        <input 
            value={commentsInput}
            onChange={(event) => {setCommentsInput(event.target.value)}}
            type="text" />
        <button onClick={onCommentsSubmit}>Next</button>
    </form>
    )

} // end CommentsForm

export default CommentsForm;