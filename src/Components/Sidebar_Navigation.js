import "../Style/Sidebar_Navigation.css";

const Sidebar_Navigation = () => {
  return (
    <div className="sidenav"> 
            <div className="nav">
                <div>
                    <img src={require('../images/M2U.png')} />
                    <div><img src={require('../images/pic.png')} />Canvas Valley</div>
                    <ul>
                        <li>
                            <a>
                            <i><img src={require('../images/path.png')} /></i>
                            <span>Approvals</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/fill.png')} /></i>
                            <span>Bill Payment</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/path.png')} /></i>
                            <span>Transfer</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/path.png')} /></i>
                            <span>Transaction</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/path.png')} /></i>
                            <span>Bulk Payment</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/path.png')} /></i>
                            <span>Request Payment</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/view.png')} /></i>
                            <span>View Statements</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/view.png')} /></i>
                            <span>Business Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/view.png')} /></i>
                            <span>Apply</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/invest.png')} /></i>
                            <span>Investment</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/forex.png')} /></i>
                            <span>Forex Counter</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/invest.png')} /></i>
                            <span>Inbox</span>
                            </a>
                        </li>
                        <li>
                            <a>
                            <i><img src={require('../images/sett.png')} /></i>
                            <span>Setting</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
  );
};
export default Sidebar_Navigation;