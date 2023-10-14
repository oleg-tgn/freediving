function Card(props) {
    return (
        <div className="card mb-3">
            {/* <img src="..." className="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary">{props.linkText}</button>
                </div>
            </div>
        </div>
    )
}

export default Card;

