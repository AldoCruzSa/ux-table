import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export const Navbar = () => (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{"backgroundColor": "#fcba03", "width": "100%"}}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/"><img src={logo} width="200" height="90" /></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <p style={{
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center", 
                    width: "100%"
                  }}>Standard Nomenclature Configurator</p>
            <div className="collapse navbar-collapse" id="navbarNav">
            {/* <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
                </li>
            </ul> */}
            </div>
        </div>
    </nav>
)