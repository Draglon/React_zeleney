var React = require('react');

var SectionHeader = require('./SectionHeader.js');
// Home page
var SectionMain = require('./section_content/Main.js');
var SectionInfo = require('./section_content/Info.js');
var SectionCategory = require('./section_content/Category.js');
var SectionPortfolio = require('./section_content/Portfolio.js');
var SectionRequest = require('./section_content/Request.js');
// Other sections
var SectionOrder = require('./section_content/Order.js');
var SectionTile = require('./section_content/Tile.js');
var SectionOxygen = require('./section_content/Oxygen.js');
var SectionSimpleCare = require('./section_content/SimpleCare.js');
var SectionDetails = require('./section_content/Details.js');
var SectionDelivery = require('./section_content/Delivery.js');
var SectionMyself = require('./section_content/Myself.js');
var SectionBlockByBlock = require('./section_content/BlockByBlock.js');

class Section extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: "section " + this.props.data.className,
            title: this.props.data.title,
            section: this.props.data.section,
            content: this.props.data.content,
            popup: this.props.popup
        };
    }

    render() {
        return (
            <section className={this.state.className}>
                {this.state.title ? <SectionHeader data={this.state.title} /> : null }

                {(this.state.section==="main") ? <SectionMain data={this.state.content} popup={this.state.popup} /> : null }
                {(this.state.section==="info") ? <SectionInfo data={this.state.content} /> : null }
                {(this.state.section==="category") ? <SectionCategory data={this.state.content} /> : null }
                {(this.state.section==="portfolio") ? <SectionPortfolio data={this.state.content} /> : null }
                {(this.state.section==="request") ? <SectionRequest data={this.state.content} popup={this.state.popup} /> : null }

                {(this.state.section==="order") ? <SectionOrder data={this.state.content} popup={this.state.popup} /> : null }
                {(this.state.section==="tile") ? <SectionTile data={this.state.content} /> : null }
                {(this.state.section==="oxygen") ? <SectionOxygen data={this.state.content} /> : null }
                {(this.state.section==="simpleCare") ? <SectionSimpleCare data={this.state.content} /> : null }
                {(this.state.section==="details") ? <SectionDetails data={this.state.content} /> : null }
                {(this.state.section==="delivery") ? <SectionDelivery data={this.state.content} /> : null }
                {(this.state.section==="myself") ? <SectionMyself data={this.state.content} /> : null }
                {(this.state.section==="blockByBlock") ? <SectionBlockByBlock data={this.state.content} /> : null }
            </section>
        );
    }
}

module.exports = Section;