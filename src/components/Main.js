import Card from './Card'

function Main(props) {
    return (
        <>
            <div className="container" style={{marginLeft: 0}}>
                <h1>{props.title}</h1>
                <div className="row">
                    <div className="col-4">
                        <Card title="Create workout" linkText="Create"/>
                    </div>
                    <div className="col-4">
                        <Card title="Last workout" linkText="View"/>
                    </div>
                    <div className="col-4">
                        <Card title="Next workout" linkText="View"/>
                    </div>
                    <div className="col-4">
                        <Card title="Calendar" linkText="View"/>
                    </div>
                    <div className="col-4">
                        <Card title="List" linkText="View"/>
                    </div>
                    <div className="col-4">
                        <Card title="My templates" linkText="View"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;