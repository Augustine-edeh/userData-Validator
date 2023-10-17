import Card from '../UI/Card';
import classes from './AddUser.module.css'
import {useState} from 'react';
import ErrorModal from '../UI/ErrorModal';

import Button from '../UI/Button'

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();
    

    
    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length===0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            return;
        }
        // console.log(enteredUsername, enteredAge);
        props.onAddUser(enteredUsername, enteredAge);
        // props.userData({
        //     username: enteredUsername,
        //     age: enteredAge
        // })
        setEnteredUsername('');
        setEnteredAge('');
    }
    
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
        
    }
    
    const ageChangeHandler = (event)  => {
        setEnteredAge(event.target.value);
    }
    
    const errorHandler = () => {
        setError(null);
    }
    
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form  onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age (Years</label>
                    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    )
}
export default AddUser;