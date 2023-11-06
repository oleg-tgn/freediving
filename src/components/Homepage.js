import Card from './Card'

function Homepage(props) {
    return (
        <>            
            <h1 className="title mb-3">{props.title}</h1>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Create workout" linkText="Create" icon="fa-solid fa-plus" description="Create yor workout"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Last workout" linkText="View" icon="fa-solid fa-play"  description="See yor last workout"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Next workout" linkText="View" icon="fa-solid fa-forward" description="See yor next workout"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Calendar" linkText="View" icon="fa-solid fa-calendar-days" description="See your personal calendar"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="List" linkText="View" icon="fa-solid fa-list"  description="See list all workouts"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="My templates" linkText="View" icon="fa-regular fa-paste" description="See workout templates"/>
                </div>
            </div>
        </>
    );
}

export default Homepage;