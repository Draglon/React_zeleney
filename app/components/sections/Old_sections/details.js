var React = require('react');
var Colors = require('./data/colors');

class SectionDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            url: this.props.data.url,
            items: this.props.data.items
        };
    }

    render() {
        return (
            <section className="section details">
                <div className="wrapper">
                    <div className="details_info">
                        {
                            this.state.items.map(function(item, i) {
                                return (
                                    <div className="details_item" key={i}>
                                        <p className="details_item-title" dangerouslySetInnerHTML={{__html: item.number}}></p>
                                        <p className="details_item-text" dangerouslySetInnerHTML={{__html: item.label}}></p>
                                        {item.colors ? <Colors dataColors={item.colors} /> : null}
                                    </div>
                                );
                            })
                        }
                    </div>
                    <figure className="details_figure">
                        <img src={this.state.url} />
                    </figure>
                </div>
            </section>
        );
    }
}

module.exports = SectionDetails;