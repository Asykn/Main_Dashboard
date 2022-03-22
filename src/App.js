import logo from './logo.svg';
import './App.css';
import Account_Details from './Components/Account_Details';
import Transaction_History from './Components/Transaction_History';
import Side_Nav from './Components/Side_Nav';
import Top_Nav from './Components/Top_Nav';
import sideBar from './Components/sideBar';

function App() {
  return (
    <>
    <div>
      <Side_Nav />
    </div>

    <div>
      <Top_Nav />
    </div>

    <div className="header">
      <h2>SME First Account</h2>
    </div>

    <div>
      <Account_Details />
    </div>

    <div>
      <Transaction_History />
    </div>

    <div>
      <button className="button">View Statements</button>
    </div>
    </>
  );
}

export default App;
