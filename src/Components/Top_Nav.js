import "../Style/Top_Nav.css"

const Top_Nav = () => {
    return (
        <>
        <div className="header">
            <div className="header-cont">
                <div className="subheader">
                    <div className="h-image">
                        <img src={require('../images/bussa.png')} /> 
                    </div>
                    <div className="h-content">
                        <div className="buss-cont">Business Accounts </div>
                        <div className="buss-acc">RM 1,000,000.00</div>
                    </div>
                    <div className="h2-content">
                        <div><img src={require('../images/rect.png')} /></div>
                    </div>
                </div>
                <div className="header-cont2">
                    <div className="key">
                        <img src={require('../images/key.png')} />
                    </div>
                    <div className="bell">
                        <img src={require('../images/bell.png')} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};
export default Top_Nav;