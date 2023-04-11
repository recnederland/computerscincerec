
import './App.css';
import Profile from './component-tree/Profile';
import Search from './component-tree/Search';
import User from './component-tree/User';
import Main from './component-tree/Main';

function App() {
  return (
    <div className="App">
      <div className='container' >
        <div className='row' >
          <div className='col'>
            <Profile /> 
            <User /> 

          </div>
          <div className='col'>
            <Main /> <p>Main T</p>

          </div>
          <div className='col'>
            <Search /> Search T

          </div>
        </div>
      </div>




      {/* <header className="App-header">

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and build incredable web app!
        </a>
      </header> */}
    </div>
  );
}

export default App;
