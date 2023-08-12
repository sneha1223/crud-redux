import React, { useEffect, useState } from 'react'
import './Update.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../Redux/crudSlice';


const Update = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [updateData, setUpdateData] = useState();

    const { users } = useSelector((state) => state.app)

    useEffect(() => {
        if (id) {
            const singleUser = users.filter((ele) => ele.id === id);
            // console.log(singleUser);
            setUpdateData(singleUser[0]);
        }
    }, [])

    const newData = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    console.log("Updated Data", updateData)

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(updateUser(updateData));
        navigate("/read");
    };
    return (
        <div>
            <div className='update-div'>
            <h1 className='data'>Edit the Data</h1>
                <form className='form' onSubmit={handleSubmit}>
                   

                    <div className='name'>
                        <label className='labels'>Name:</label>
                        <input
                            type='text'
                            name='name'
                            className='form-control'
                            value={updateData && updateData.name}
                            onChange={newData}
                            required
                        />
                    </div>
                    <div className='name'>
                        <label className='labels'>Email:</label>
                        <input
                            type='email'
                            name='email'
                            class='form-control'
                            value={updateData && updateData.email}
                            onChange={newData}
                            required
                        />
                    </div>
                    <div className='name'>
                        <label className='labels'> Age:</label>
                        <input
                            type='text'
                            name='age'
                            class='form-control'
                            value={updateData && updateData.age}
                            onChange={newData}
                            required
                        />
                    </div>

                    <div className="name">
                        <input
                            className="form-check-input"
                            name="gender"
                            value="male"
                            type="radio"
                            checked={updateData && updateData.gender === "male"}
                            onChange={newData}
                            required
                        />
                        <label className="form-check-label">Male</label>

                        <div className='mb-3'>
                            <input
                                className="form-check-input"
                                name="gender"
                                value="female"
                                type="radio"
                                checked={updateData && updateData.gender === "female"}
                                onChange={newData}
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
        </div>
    )
}

export default Update