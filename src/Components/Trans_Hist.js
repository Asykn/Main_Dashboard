import "../Style/Trans_Hist.css"

const Trans_Hist = () => {
    return (
        <>
        <div className="trans-hist">
            <div className="trans-head">
                <div>DESCRIPTION</div>
                <div>DATE</div>
                <div>AMOUNT</div>
                <div></div>
            </div>

            <div className="trans-data">
                <ul>
                    <li>
                        <img src={require("../images/du.png")} />
                        DuitNow QR Bizbox Cafe Sdn Bhd 745194971 Payment
                    </li>
                    <li>
                        <img src={require('../images/du.png')} />
                        SME First Account
                    </li>
                    <li>
                        <img src={require('../images/du.png')} />
                        Timothy and Brother Fresh Fruit Sdn Bhd
                    </li>
                </ul>
                <ul>
                    <li>23 Jan 2020</li>
                    <li>23 Apr 2020</li>
                    <li>23 Jan 2021</li>
                </ul>
                <ul>
                    <li>-RM 10,000,000.00</li>
                    <li>-RM 10,000,000.40</li>
                    <li>-RM 99,900.00</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Trans_Hist;