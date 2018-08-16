var React = require('react');
var Logo = require('./logo.js');
var Navigation = require('./navigation.js');
var Phones = require('./phones.js');

const propsValues = {
    classIcon: "icon-phone",
    urlLogo: require('../images/logo.png')
};

class Header extends React.Component {
    render() {
        return (
            <header className="header" id="header">
                <div className="wrapper header_wrapper">
                    <Logo data={propsValues} />
                    <Navigation />
                    <Phones data={propsValues} />
                </div>
            </header>
        );
    }
}
 
module.exports = Header;