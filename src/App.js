import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Homepage from './components/Homepage';
import Calendar from './components/Calendar/Calendar';
import TrainingsList from './components/TrainingsList/TrainingsList';

import TrainsProvider from './providers/TrainingsProvider';
import {Routes, Route, Link} from 'react-router-dom';

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
                <TrainsProvider>
                  <Routes>
                    <Route path="/" element={<Homepage title="Home page"/>} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/trainings-list" element={<TrainingsList />} />                      
                  </Routes>
                </TrainsProvider>
            </div>
          </div>
        </div> 
      </div>
    </div> 
  );
}

export default App;
