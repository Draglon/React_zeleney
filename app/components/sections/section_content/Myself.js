var React = require('react');
var Delivery = require('./data/delivery-item');

class SectionMyself extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: this.props.data.url,
            items: this.props.data.items,
            delivery: this.props.data.delivery
        };
    }

    render() {
        return (
            <div className="wrapper">
                <div className="myself_items">
                    {
                        this.state.items.map(function(item, i) {
                            return (
                                <div className="myself_item" key={i}>
                                    <h2 className="myself_item-title">{item.title}</h2>
                                    <p className="myself_item-text">{item.text}</p>
                                </div>
                            );
                        })
                    }
                </div>
                <figure className="myself_figure">
                    <img src={this.state.url} />
                </figure>
                <Delivery data={this.state.delivery} />
            </div>
        );
    }
}

module.exports = SectionMyself;