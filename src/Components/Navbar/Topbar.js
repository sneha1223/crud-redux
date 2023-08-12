import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Topbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { searchUser } from '../../Redux/crudSlice'

const Topbar = () => {

    const allUsers = useSelector((state => state.app.users));

    const dispatch = useDispatch();

    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        dispatch(searchUser(searchData))
    }, [searchData])
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav-div ">
                    <Link to='/'> <h4 className="navbar-brand">RTK</h4></Link>

                    <div className="nav-item">
                        <Link to="/" className="nav-link"> Create Post</Link>
                        <Link to="/read" className="nav-link"> All Post ({allUsers.length})   </Link>
                    </div>
                    <input
                        className="search"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={searchData}
                        onChange={(e) => setSearchData(e.target.value)}
                    />
                </div>
            </nav>
        </div>
    )
}

export default Topbar