// import React from 'react'
// import { useSelector } from 'react-redux'

// const CustomModel = ({ id, setShowPopUp }) => {
//     const allUsers = useSelector((state) => (state.app.users));

//     const singleUser = allUsers.filter((ele) => ele.id === id);
//     console.log("single user", singleUser);
//     return (
//         <div>
//             <button onClick={() => setShowPopUp(false)}>Close</button>
//             {/* <h2> {singleUser[0].name} </h2>
//             <h3> {singleUser[0].emai} </h3>
//             <h3> {singleUser[0].gender} </h3>
//             <h3> {singleUser[0].age} </h3> */}

//             <h2>{singleUser[0].name}</h2>
//             <h3>{singleUser[0].email}</h3>
//             <h4>{singleUser[0].age}</h4>
//             <p>{singleUser[0].gender}</p>
//         </div>
//     );
// };

// export default CustomModel;


import React from "react";
import { useSelector } from "react-redux";
import './CustomModel.css'

const CustomModal = ({ id, setShowPopup }) => {
    const allusers = useSelector((state) => state.app.users);

    const singleUser = allusers.filter((ele) => ele.id === id);
    console.log("singleuser", singleUser);

    return (
        <div className="box-design">
            <div className="container">
                <button className="close" onClick={() => setShowPopup(false)}>Close</button>
                <h2>{singleUser[0].name}</h2>
                <h3>{singleUser[0].email}</h3>
                <h4>{singleUser[0].age}</h4>
                <p>{singleUser[0].gender}</p>
            </div>
        </div>
    );
};

export default CustomModal;
