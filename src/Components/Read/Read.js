import React, { useEffect, useState } from 'react'
import './Read.css'
import { useDispatch } from 'react-redux'
import { deleteUser, showUser } from '../../Redux/crudSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import CustomModel from '../CustomModel/CustomModel';


const Read = () => {

  const [id, setId] = useState();

  const [showPopUp, setShowPopUp] = useState();

  const dispatch = useDispatch();

  const { users, loading, searchData } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showUser());
  }, []);

  if (loading) {
    return <h2>Loading</h2>;
  }

  return (
    <div className='read-div'>
      <div className='data-contents'>
        {showPopUp && (
          <CustomModel
            id={id}
            showPopUp={showPopUp}
            setShowPopup={setShowPopUp}
          />
        )}

        <h2 className='data'>All data</h2>

        {users &&
          users
          .filter((ele) => {
            if (searchData.length === 0){
              return ele;
            }
            else {
              return ele.name
                .toLowerCase()
                .includes(searchData.toLowerCase());
            }
          })

            .map((ele) => (
              <div key={ele.id} className="details">
                <h2>{ele.name}</h2>
                <h4>{ele.email}</h4>
                <p>{ele.gender}</p>
                <p>{ele.age} </p>
                <div className='btn-grp'>
                  <Link to={`/edit/${ele.id}`}>
                    <button className='buttons' >Edit</button></Link>
                  <button onClick={() => [setId(ele.id), setShowPopUp(true)]}
                  >
                    View
                  </button>
                  <button className='buttons'
                    onClick={() => dispatch(deleteUser(ele.id))}>Delete</button>
                </div>
              </div>
            )

            )}

      </div>
    </div>
  );
};

export default Read;