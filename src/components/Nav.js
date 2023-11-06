import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul className="list-group">
                <li className="list-group-item"><Link to="/" className="nav-item"><i className="fa-solid fa-house"></i>Home</Link></li>
                <li className="list-group-item"><i className="fa-solid fa-plus"></i>Create workout</li>
                <li className="list-group-item"><i className="fa-solid fa-play"></i>Last workout</li>
                <li className="list-group-item"><i className="fa-solid fa-forward"></i>Next workout</li>
                <li className="list-group-item"><Link to="/calendar" className="nav-item"><i className="fa-solid fa-calendar-days"></i>Calendar</Link></li>
                <li className="list-group-item"><Link to="/trainings-list" className="nav-item"><i className="fa-solid fa-list"></i>Trainings List</Link></li>
                <li className="list-group-item"><i className="fa-regular fa-paste"></i>My templates</li>
            </ul>
        </nav>
    );
}

export default Nav;