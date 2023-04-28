import './NavBar.css'


const NavBar = () => {
    return (
        <nav className="nav">
            <h3 className="nav-title">Ecommerce</h3>
            <div className="nav-links">
                <ul>
                    <li className="nav-link">Rascadores</li>
                    <li className="nav-link">Camitas</li>
                    <li className="nav-link">Juguetes</li>
                </ul>
            </div>
        </nav>

    )
}

export default NavBar;