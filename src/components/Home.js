import Card from './Card'

function Home(props) {
    return (
        <>            
            <h1 className="title mb-3">{props.title}</h1>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Create workout" link="/" linkText="Create" icon="fa-solid fa-plus" description="Create yor workout" disabled="true"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Last workout" link="/" linkText="View" icon="fa-solid fa-play"  description="See yor last workout" disabled="true"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Next workout" link="/" linkText="View" icon="fa-solid fa-forward" description="See yor next workout" disabled="true"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Calendar" link="/calendar" linkText="View" icon="fa-solid fa-calendar-days" description="See your personal calendar"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Trainings List" link="/trainings-list" linkText="View" icon="fa-solid fa-list"  description="See list all workouts"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="My templates" linkText="View" icon="fa-regular fa-paste" description="See workout templates" disabled="true"/>
                </div>
            </div>
        </>
    );
}

export default Home;