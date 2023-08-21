import './navbar.scss'
import { Link } from "react-router-dom"
import jwtDecode from 'jwt-decode'
import { useEffect, useState } from 'react'
const NavBar = () => {

    const [admin, setAdmin] = useState('')
    useEffect(() => {
        const token = localStorage.getItem('userToken');

        if (token) {
            const { role } = jwtDecode(token);
            setAdmin(role)

        }
    }, [admin])
    return (
        <div className="navbar" style={{
            display: 'flex',
            justifyContent: 'center',
            height: '100%',
            width: '20%'
        }}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/millpage">Mill</Link></li>
                <li><Link to="/memberpage">Member</Link></li>
                {
                    admin === 'admin' ? <li><Link to="/data">Data</Link></li> : ''
                }
                <li><Link to="/noticepage">Notice</Link></li>
            </ul>

        </div >
    )
}

export default NavBar