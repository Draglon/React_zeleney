var React = require('react');

class SectionPortfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slider: {
                title: this.props.data.title
            }
        };
    }

    render() {
        return (
            <section className="section portfolio">
                <header className="section_header">
                    <h1 className="section_header-title">{this.state.slider.title}</h1>
                </header>
                <div className="portfolio_content">
                    <div className="slider">
                        <div className="slider-wrapper">
                            <div className="slider_container">
                                <div className="slider_item"></div>
                                <div className="slider_item"></div>
                                <div className="slider_item"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = SectionPortfolio;