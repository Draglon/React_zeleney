var React = require('react');
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

var Header = require('./header.js');
var Home = require('./pages/home.js');
var GreenWall = require('./pages/green_wall.js');
var PhytoPicture = require('./pages/phyto_picture.js');
var NotFound = require('./pages/notfound.js');
var Footer = require('./footer.js');

const history = createBrowserHistory();

class MainComponent extends React.Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {toggle: false};

    //     this.togglePopup = () => this.setState({toggleActive: !toggle})
    // }

    render() {
        return(
            <Router history={history}>
                <div>
                    {/* <Popup data={this.togglePopup} /> */}
                    <Header />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/green_wall" component={GreenWall} />
                        <Route path="/phyto_picture" component={PhytoPicture} />
                        <Route component={NotFound} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
}

module.exports = MainComponent;