import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

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
            <Main title="Main page"/>
          </div>
        </div> 
      </div>
    </div> 
  );
}

export default App;
