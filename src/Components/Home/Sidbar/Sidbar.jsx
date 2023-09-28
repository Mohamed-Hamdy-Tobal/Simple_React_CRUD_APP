import { NavLink } from 'react-router-dom'
import './Sidbar'

const Sidbar = () => {
    return (
        <>            
        <div className="sticky-top side-content d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{height:'calc(100vh - 68px)', top:"68px"}}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-4">Sidebar</span>
            </a>
            <hr/>
            <ul className="nav nav-pills flex-column mb-auto navs" style={{gap:'15px',marginTop:'15px'}}>
                <li className="nav-item">
                    <NavLink to="/" className="nav-link  text-white side-item" aria-current="page">
                        <svg className="bi me-2" style={{width:"16" ,height:"16"}}><use xlinkHref="#home"></use></svg>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/products" className="nav-link text-white side-item">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#grid"></use></svg>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categories" className="nav-link text-white side-item">
                        <svg className="bi me-2" width="16" height="16"><use xlinkHref="#table"></use></svg>
                        Categories
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidbar
