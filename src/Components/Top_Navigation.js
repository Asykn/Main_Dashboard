import "../Style/Top_Navigation.css";

const Top_Navigation = () => {
    return (
        <div class="topnav">
            <div class="nav">
                <div>
                    <img src={require('../images/bussa.png')} />
                    <span>
                        Business Accounts 
                        RM1,000,000.00
                    </span>
                    <i><img src={require('../images/rectangle.png')} /></i>
                    <i><img src={require('../images/bell.png')} /></i>
                    <i><img src={require('../images/key.png')} /></i>
                </div>
            </div>
        </div>
    );
};
export default Top_Navigation;