import "../Style/sidebar.css";

const sideBar = () => {
    return(
        <>
        <div className="sidebar">
            <ul className="nav_list">
                <li>
                    <a href="#">
                        <i className='bx bxs-user-check'></i>
                            <span class="links_name">Canvas Valley</span>
                    </a>
                    <span className="tooltip">User</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-time-five'></i>
                            <span className="links_name">Approvals</span>
                    </a>
                    <span className="tooltip">Approvals</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-grid-alt'></i>
                            <span className="links_name">Bill Payment</span>
                    </a>
                    <span className="tooltip">Bill Payments</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Transfer</span>
                    </a>
                    <span className="tooltip">Transfer</span>
                </li>
                <li>
                    <a href="#">
                        <i class='bx bx-grid-alt'></i>
                            <span className="links_name">Scheduled Transactions</span>
                    </a>
                    <span className="tooltip">Scheduled Transactions</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Bulk Payment</span>
                    </a>
                    <span className="tooltip">Bulk Payment</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Request Payment</span>
                    </a>
                    <span className="tooltip">Request Payment</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">View Statements</span>
                    </a>
                    <span className="tooltip">View Statements</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Business Dashboard</span>
                    </a>
                    <span className="tooltip">Business Dashboard</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Apply</span>
                    </a>
                    <span className="tooltip">Apply</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Investment</span>
                    </a>
                    <span className="tooltip">Investment</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Forex Counter</span>
                    </a>
                    <span className="tooltip">Forex Counter</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Inbox</span>
                    </a>
                    <span className="tooltip">Inbox</span>
                </li>
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                            <span className="links_name">Setting</span>
                    </a>
                    <span className="tooltip">Setting</span>
                </li>
            </ul>
            </div>
        </>
    );
};
export default sideBar;