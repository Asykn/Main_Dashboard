import "../Style/Account_Details.css";

const Account_Details = () => {
    return(
        <>
        <div>
            <div className="column-dts">
                <div className="container-dts">
                    <div>
                        <div className="title-dts">Account Details</div>
                        <div className="list-dts">
                            <li>Account Number</li>
                            <li><b>310121306725</b></li>
                            <br/>
                            <li>Available Balance</li>
                            <li><b>RM 690,420.00</b></li>
                            <br/>
                            <li>Current Balance</li>
                            <li><b>RM 90,420.00</b></li>
                            <br/>
                            <li>Account Name</li>
                            <li><b>SME First Account</b></li>
                            <br/>
                            <li>Type of Account</li>
                            <li><b>Savings Account</b></li>
                            <br/>
                            <li>One-Day Float</li>
                            <li><b>RM 0.00</b></li>
                            <br/>
                            <li>Two-Day Float</li>
                            <li><b>RM 0.00</b></li>
                            <br/>
                            <li>Late Clearing/Outstation Cheque Float</li>
                            <li><b>RM 0.00</b></li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Account_Details;