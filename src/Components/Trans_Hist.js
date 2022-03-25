import "../Style/Trans_Hist.css"

const Trans_Hist = () => {
    return (
        <>
        <div className="trans-hist">
            <div className="trans-head">
                <div className="desc">DESCRIPTION</div>
                <div>DATE</div>
                <div>AMOUNT</div>
            </div>
            <div className="trans-data">
                <ul>
                    <li>
                        <img src={require("../images/du.png")} />
                        <div>DuitNow QR Bizbox Cafe Sdn Bhd 745194971 Payment</div>
                    </li>
                    <li>23 Jan 2020</li>
                    <li className="negative">-RM 10,000,000.00</li>
                    <li>...</li>
                </ul>
                <ul>
                    <li>
                        <img src={require("../images/du.png")} />
                        SME First Account
                    </li>
                    <li>23 Apr 2020</li>
                    <li className="negative">-RM 10,000,000.40</li>
                    <li>...</li>
                </ul>
                <ul>
                    <li>
                        <img src={require('../images/du.png')} />
                        Timothy and Brother Fresh Fruit Sdn Bhd
                    </li>
                    <li>23 Jan 2021</li>
                    <li className="negative">-RM 99,900.00</li>
                </ul>
                <ul>
                    <li>
                        <img src={require('../images/du.png')} />
                        Genting Commodities Trading Sdn Bhd
                    </li>
                    <li>23 Jan 2021</li>
                    <li className="negative">-RM 20,000.00</li>
                    <li>...</li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default Trans_Hist;