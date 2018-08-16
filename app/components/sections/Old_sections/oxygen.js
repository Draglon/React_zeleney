var React = require('react');

class SectionOxygen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            text: this.props.data.text
        };
    }

    render() {
        return (
            <section className="section oxygen">
                <div className="wrapper">
                    <h2 className="oxygen_title">{this.state.title}</h2>
                    <p className="oxygen_text">{this.state.text}</p>
                </div>
            </section>
        );
    }
}

module.exports = SectionOxygen;