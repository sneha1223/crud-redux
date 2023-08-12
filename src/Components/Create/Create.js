import React, { useState } from 'react'
import './Create.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createUser } from '../../Redux/crudSlice';

const Create = () => {
    const [users, setUsers] = useState({});

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("users...", users);
        dispatch(createUser(users));
        // setUsers({})
        navigate('/read');
    };

    return (
        <div className='main-div'>
            <form className='form' onSubmit={handleSubmit}>
                <h1 className='data'>Fill the Data</h1>

                <div className='name'>
                    <label className='labels'>Name:</label>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className='name'>
                    <label className='labels'>Email:</label>
                    <input
                        type='email'
                        name='email'
                        class='form-control'
                        onChange={getUserData}
                        required
                    />
                </div>
                <div className='name'>
                    <label className='labels'> Age:</label>
                    <input
                        type='text'
                        name='age'
                        class='form-control'
                        onChange={getUserData}
                        required
                    />
                </div>

                <div className="name">
                    <input
                        className="form-check-input"
                        name="gender"
                        value="male"
                        type="radio"
                        onChange={getUserData}
                        required
                    />
                    <label className="form-check-label">Male</label>

                    <div className='mb-3'>
                        <input
                            className="form-check-input"
                            name="gender"
                            value="female"
                            type="radio"
                            onChange={getUserData}
                            required
                        />
                        <label className="form-check-label">Female</label>
                    </div>
                </div>
                <div className='name'>
                    <button type="submit" className='submit-btn' >Sumbit</button>
                </div>
            </form>
        </div>
    )
}

export default Create



