import "../Style/Top_Nav.css"

const Top_Nav = () => {
    return (
        <>
        <div className="wrap-top">
            <div className="container-top">
                <div>
                    <ul>
                        <li>
                            <img src={require('../images/bussa.png')} /> 
                        </li>
                        <li>
                            Business Accounts 
                            <br/>
                            RM1,000,000.00
                        </li>
                        <li>
                            
                        </li>
                        <li>
                            <img src={require('../images/bell.png')} />
                        </li>
                        <li>
                            <img src={require('../images/key.png')} />
                        </li>
                    </ul>
                    {/* <span>
                        Business Accounts 
                        RM1,000,000.00
                        <img src={require('../images/rectangle.png')} />
                    </span>
                    <i><img src={require('../images/bell.png')} /></i>
                    <i><img src={require('../images/key.png')} /></i> */}
                </div>
            </div>
        </div>
        </>
    );
};
export default Top_Nav;