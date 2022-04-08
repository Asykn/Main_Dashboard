import "../Style/Side_Nav.css";

const Side_Nav = () => {
    return (
        <>
        <div className="sidebar">
            <div className="Side-cont">
                <div className="logo">

                    <div className='subLogo1'>
                        <img src={require('../images/menu.png')} />
                    </div>

                    <div className='subLogo2'>
                        <img src={require('../images/M2U.png')} />
                    </div>

                    <div className='subLogo3'>
                        <img src={require('../images/notificationIcon.png')} />
                    </div>
                </div>
                <div className="side-panel">
                    <div className="img-panel"><img src={require('../images/pic.png')} /></div>
                    <div className="canvas-valley">Canvas Valley</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Approvals</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Bill Payment</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Transfer</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Scheduled Transactions</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Bulk Payment</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Request Payment</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">View Statements</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Business Dashboard</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Apply</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Investment</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Forex Counter</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Inbox</div>
                </div>
                <div className="sidebar-menu">
                    <div className="menu">Settings</div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Side_Nav;