import "../Style/Transaction_History.css"

const Transaction_History = () => {
    return (
        <>
            <div>
                <div className="column-tran">
                    <div className="container-tran">
                        <div>
                            <div className="title-tran">
                                All Transaction History <img src={require('../images/rectangle.png')} />
                                <button type="button">Show: Last 30 days <img src={require('../images/rectangle.png')} /></button>
                                <input type="text" placeholder="Search" name="search"></input>
                            </div>
                            <div className="table-tran">
                                <table>
                                    <tr>
                                        <th>DESCRIPTION</th>
                                        <th>DATE</th>
                                        <th>AMOUNT</th>
                                        <th></th>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />DuitNow QR Bizbox Cafe Sdn Bhd 745194971 Payment</td>
                                        <td>23 Jan 2020</td>
                                        <td>-RM 10,000,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />SME First Account</td>
                                        <td>23 Apr 2020</td>
                                        <td>-RM 10,000,000.40</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />Timothy and Brother Fresh Fruit Sdn Bhd</td>
                                        <td>23 Jan 2021</td>
                                        <td>-RM 99,900.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />Genting Commodities Trading Sdn Bhd</td>
                                        <td>23 Jan 2021</td>
                                        <td>-RM 20,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />DuitNow QR Bizbox Sdn Bhd DuitNow QR Bizbox</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 5,000,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />Timothy and Brother Fresh Fruit Sdn Bhd</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 570,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />Timothy and Brother Fresh Fruit Sdn Bhd</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 10,000,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />SME First Account</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 6,003.40</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />Timothy and Brother Fresh Fruit Sdn Bhd</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 10,000,000.00</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><img src={require('../images/du.png')} />SME First Account</td>
                                        <td>23 Jan 2021</td>
                                        <td>RM 6,003.40</td>
                                        <td></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Transaction_History;