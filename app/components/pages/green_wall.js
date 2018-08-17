var React = require('react');

// var SectionOrder = require('../sections/Old_sections/order.js');
// var SectionBlock = require('../sections/Old_sections/tile.js');
// var SectionOxygen = require('../sections/Old_sections/oxygen.js');
// var SectionSimpleCare = require('../sections/Old_sections/simple-care.js');
// var SectionDetails = require('../sections/Old_sections/details.js');
// var SectionBlockByBlock = require('../sections/Old_sections/block-by-block.js');
// var SectionDelivery = require('../sections/Old_sections/delivery.js');
// var SectionPortfolio = require('../sections/Old_sections/portfolio.js');
// var SectionRequest = require('../sections/Old_sections/request.js');

var Section = require('../sections/Section.js');
const dataGreenWall = require('./data/dataGreenWall.js');
// const dataGreenWall = require('./dataOld/dataGreenWall.js');

var Popup = require('../popup.js');

class GreenWall extends React.Component {

    constructor(props) {
        super(props);

        this.state = {showPopup: false};

        this.togglePopup = () => {
            this.setState({showPopup: !this.state.showPopup});
        }
    }

    render() {
        return (
            <main className="main">
                {dataGreenWall.sections.map( (section, index) => <Section data={section} key={index} popup={this.togglePopup} /> ) }

                {/* <SectionOrder data={dataGreenWall.sections[0]} />
                <SectionBlock data={dataGreenWall.sections[1]} />
                <SectionOxygen data={dataGreenWall.sections[2]} />
                <SectionBlock data={dataGreenWall.sections[3]} />
                <SectionSimpleCare data={dataGreenWall.sections[4]} />
                <SectionDetails data={dataGreenWall.sections[5]} />
                <SectionBlockByBlock data={dataGreenWall.sections[6]} />
                <SectionDelivery data={dataGreenWall.sections[7]} />
                <SectionPortfolio data={dataGreenWall.sections[8]} />
                <SectionRequest data={dataGreenWall.sections[9]} /> */}

                {this.state.showPopup ? <Popup /> : null}
            </main>
        );
    }
}
 
module.exports = GreenWall;