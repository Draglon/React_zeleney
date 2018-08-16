var React = require('react');
var Logo = require('./logo.js');
var Phones = require('./phones.js');
var SocialLinks = require('./social.js');

const propsValues = {
    classIcon: "",
    urlLogo: require('../images/logo_footer.jpg')
};

class Footer extends React.Component {      
    render() {
        return (
            <footer className="footer" id="footer">
                <div className="wrapper footer_wrapper">
                    <Logo data={propsValues} />
                    <div className="footer_info">
                        <SocialLinks />
                        <a className="email" href="mailto:info@zeleney.com">info@zeleney.com</a>
                        <Phones data={propsValues} />
                    </div>
                </div>
            </footer>
        );
    }
}
 
module.exports = Footer;