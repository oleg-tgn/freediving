import Card from './Card'

function Home(props) {
    return (
        <>            
            <h1 className="title mb-3">{props.title}</h1>
            <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Create training" link="/" linkText="Create" icon="fa-solid fa-plus" description="Create yor training" disabled="true"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Last training" link="/last-training" linkText="View" icon="fa-solid fa-play"  description="See yor last training"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Next training" link="/next-training" linkText="View" icon="fa-solid fa-forward" description="See yor next training"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Calendar" link="/calendar" linkText="View" icon="fa-solid fa-calendar-days" description="See your personal calendar"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="Trainings List" link="/trainings-list" linkText="View" icon="fa-solid fa-list"  description="See list all training"/>
                </div>
                <div className="col-12 col-md-4 col-lg-3">
                    <Card title="My templates" linkText="View" icon="fa-regular fa-paste" description="See trainings templates" disabled="true"/>
                </div>
            </div>
        </>
    );
}

export default Home;