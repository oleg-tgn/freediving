import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
  return (
    
    <div className='app'>
      <Header />

      <div className="content">
        <div className='row'>
          <div className='col-12 col-md-3'>
            <Sidebar />
          </div>
          <div className='col-12 col-md-9'>
            <Main title="Main page"/>
          </div>
        </div> 
      </div>
    </div> 
  );
}

export default App;
