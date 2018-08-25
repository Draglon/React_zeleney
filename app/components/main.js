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

var AdminPanel = require('./admin/Auth.js');

const history = createBrowserHistory();

class MainComponent extends React.Component {
    render() {
        return(
            <Router history={history}>
                {window.location.pathname === "/admin" ? 
                    <div>
                        <Switch>
                            <Route path="/admin" component={AdminPanel} />
                        </Switch>
                    </div>
                :
                    <div>
                        <Header />
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/green_wall" component={GreenWall} />
                            <Route path="/phyto_picture" component={PhytoPicture} />
                            <Route component={NotFound} />
                        </Switch>
                        <Footer />
                    </div>
                }
            </Router>
        );
    }
}

module.exports = MainComponent;