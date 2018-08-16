var React = require('react');

class SectionPortfolio extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    render() {
        return (
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
        );
    }
}

module.exports = SectionPortfolio;