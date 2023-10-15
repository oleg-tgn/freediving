import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import Calendar from './components/calendar/Calendar';


function App() {
  return (
    
    <div className='app'>
      <Header />

      <div className="container-fluid">
        <div className='row'>
          <div className='col-12 col-md-2'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-10 content pt-3'>
            <div className="container" style={{marginLeft: 0}}>
              <Main title="Main page"/>

              <Calendar />
            </div>
          </div>
        </div> 
      </div>
    </div> 
  );
}

export default App;
