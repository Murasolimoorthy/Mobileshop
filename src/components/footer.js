import React from "react";



const FooterSection = () => {
    return(
        <div className="footer-bottom-area">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="copyright">
                        <p>&copy; 2022 Online Shopping area. All the Terms & Conditions Apply</p>
                        <p> Save Tree....Save Water!!!</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="footer-card-icon">
                        <i className="fa fa-cc-discover"></i>
                        <i className="fa fa-cc-mastercard"></i>
                        <i className="fa fa-cc-paypal"></i>
                        <i className="fa fa-cc-visa"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default FooterSection;

