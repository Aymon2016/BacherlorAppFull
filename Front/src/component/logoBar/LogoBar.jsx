import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom"
import "./logoBar.scss"
const LogoBar = () => {
    return (
        <div className="logobar">
            <div className="logo">
                <img src={logo} alt="logo.png" />
            </div>
            <div className="name">Bachelor Home</div>
            <div className="btn"><Link to="/login">Sign In</Link></div>
            {/* <div className="btn"><Link to="/login">Sign Out</Link></div> */}
        </div>
    )
}

export default LogoBar