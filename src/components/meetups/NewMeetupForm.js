import { useRef } from 'react';

import classes from './NewMeetupForm.module.css';
import Card from '../UI/Card';
function NewMeetupForm (props){
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription

        };
        props.onAddMeetup(meetupData)
        console.log(meetupData);

    }
    return <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>TITLE</label>
                <input type='text' required id='title' ref={titleInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Meetup Image</label>
                <input type='url' required id='title' ref={imageInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input type='text' required id='address'ref={addressInputRef}></input>
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea required id='description' rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button>Add Event</button>
            </div>

        </form>
    </Card>
}
export default NewMeetupForm;