var React = require('react');

// var SectionOrder = require('../sections/Old_sections/order.js');
// var SectionBlock = require('../sections/Old_sections/tile.js');
// var SectionOxygen = require('../sections/Old_sections/oxygen.js');
// var SectionSimpleCare = require('../sections/Old_sections/simple-care.js');
// var SectionDetails = require('../sections/Old_sections/details.js');
// var SectionMyself = require('../sections/Old_sections/myself.js');
// var SectionPortfolio = require('../sections/Old_sections/portfolio.js');
// var SectionRequest = require('../sections/Old_sections/request.js');


var Section = require('../sections/Section.js');
const dataPhytoPicture = require('./data/dataPhytoPicture.js');
// const dataPhytoPicture = require('./dataOld/dataPhytoPicture.js');

var Popup = require('../popup.js');

class PhytoPicture extends React.Component {

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
                {dataPhytoPicture.sections.map( (section, index) => <Section data={section} key={index} popup={this.togglePopup} /> ) }

                {/* <SectionOrder data={dataPhytoPicture.sections[0]} />
                <SectionBlock data={dataPhytoPicture.sections[1]} />
                <SectionOxygen data={dataPhytoPicture.sections[2]} />
                <SectionBlock data={dataPhytoPicture.sections[3]} />
                <SectionSimpleCare data={dataPhytoPicture.sections[4]} />
                <SectionDetails data={dataPhytoPicture.sections[5]} />
                <SectionMyself data={dataPhytoPicture.sections[6]} />
                <SectionPortfolio data={dataPhytoPicture.sections[7]} />
                <SectionRequest data={dataPhytoPicture.sections[8]} /> */}
                
                {this.state.showPopup ? <Popup popup={this.togglePopup} /> : null}
            </main>
        );
    }
}
 
module.exports = PhytoPicture;