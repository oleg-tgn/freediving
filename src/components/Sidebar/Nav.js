import {Link, useLocation } from 'react-router-dom';

function Nav() {
    const location = useLocation();
    const currentPath = location.pathname;
    return (
        <nav>
            <ul className="sidebar-menu">
                <li className="sidebar-menu__item">
                    <Link to="/" className={`sidebar-menu__link ${currentPath === '/' ? 'active-item' : ''}`}>
                        <i className="fa-solid fa-house"></i>Home
                    </Link>
                </li>                
                <li className="sidebar-menu__item"><span className='sidebar-menu__link disabled'><i className="fa-solid fa-plus"></i>Create training</span></li>
                <li className="sidebar-menu__item"><span className='sidebar-menu__link disabled'><i className="fa-solid fa-play"></i>Last training</span></li>
                <li className="sidebar-menu__item"><span className='sidebar-menu__link disabled'><i className="fa-solid fa-forward"></i>Next training</span></li>
                <li className="sidebar-menu__item">
                    <Link to="/calendar" className={`sidebar-menu__link ${currentPath === '/calendar' || currentPath === ''? 'active-item' : ''}`}>
                        <i className="fa-solid fa-calendar-days"></i>Calendar
                    </Link>
                </li>
                <li className="sidebar-menu__item">
                    <Link to="/trainings-list" className={`sidebar-menu__link ${currentPath === '/trainings-list' || currentPath === ''? 'active-item' : ''}`}>
                        <i className="fa-solid fa-list"></i>Trainings List
                    </Link>
                </li>
                <li className="sidebar-menu__item"><span className='sidebar-menu__link disabled'><i className="fa-regular fa-paste"></i>My templates</span></li>
            </ul>
        </nav>
    );
}

export default Nav;