import logo from './logo.svg';
import './App.css';
import Account_Details from './Components/Account_Details';
import Transaction_History from './Components/Transaction_History';
import Side_Nav from './Components/Side_Nav';
import Top_Nav from './Components/Top_Nav';

function App() {
  return (
    <>
    {/* <div className="container1">
      <div>
        <Side_Nav />
      </div>
      <div className="container2">
        <div className="top-nav">
          <Top_Nav />
        </div>
        <div className="first">SME First Account</div>
        <div className="container3">
          <div><Account_Details /></div>
          <div className="cont3-trans"><Transaction_History /></div>
          <div><button className="button">View Statements</button></div>
        </div>
        
      </div>
    </div> */}

    <div className="container1">
        <Side_Nav />
        <div className = "conTry">
          <div className="container2">
            <Top_Nav />
          </div>
          <div className="container3">
            <h2 className="sme">SME First Account</h2>
            <div className="container4">
              <Account_Details />
              <Transaction_History />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
