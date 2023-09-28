import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className='sticky-top'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <Link className="navbar-brand logo" to="/" alt=''>Logo</Link>
                    <button className="navbar-toggler the-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-span"></span>
                        <span className="toggler-span"></span>
                        <span className="toggler-span"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link link active" aria-current="page" to="/" alt=''>Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                            <NavLink className="nav-link link" to="/about" alt=''>About</NavLink>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
