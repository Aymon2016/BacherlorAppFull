
import LogoBar from "../component/logoBar/LogoBar"
import NavBar from "../component/navBar/NavBar"
const Layout = ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100vw'
        }}>
            <LogoBar />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                height: 'calc( 100vh - 50px)',

            }} >
                <NavBar />
                {children}
            </div>
        </div>
    )
}

export default Layout