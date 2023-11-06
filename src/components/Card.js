import { backpack } from 'fontawesome';
import {Link} from 'react-router-dom';

function Card(props) {
    return (
        <div className="card mb-3">
            <div className="card-img-top" style={{textAlign: "center", fontSize: 40, padding: "20px 0", background: "rgba(94, 110, 130, .15)"}}>
                <i className={props.icon}></i>
            </div>
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="d-grid gap-2">
                <Link 
                    to={props.link} 
                    className={`btn btn-primary ${props.disabled ? 'disabled' : ''}`}
                    style={props.disabled ? { pointerEvents: 'none', opacity: 0.5, background: 'grey', borderColor: 'grey' } : {}}
                >
                    {props.linkText}
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Card;

