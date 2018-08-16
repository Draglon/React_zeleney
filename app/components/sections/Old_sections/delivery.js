var React = require('react');
var Delivery = require('./data/delivery-item');

class SectionDelivery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            delivery: this.props.data.delivery
        };
    }

    render() {
        return (
            <section className="section delivery">
                <div className="wrapper">
                    <Delivery data={this.state.delivery} />
                </div>
            </section>
        );
    }
}

module.exports = SectionDelivery;