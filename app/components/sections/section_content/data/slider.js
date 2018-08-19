var React = require('react');

class Slider extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            slider: this.props.data,
            sliderWidth: (this.props.data.length * 800),
            slideIndex: 0
        };

        console.log(this.state.sliderWidth);
    }

    nextSlide () {
        this.setState({
            slideIndex: ++this.state.slideIndex
        });
    }

    prevSlide() {
        this.setState({
            slideIndex: --this.state.slideIndex
        });
    }

    render() {
        return (
            <div className="slider">
                <a className="slider_arrow slider_arrow-left" onClick={() => this.nextSlide()}></a>
                <a className="slider_arrow slider_arrow-right" onClick={() => this.prevSlide()}></a>

                <div className="slider_wrapper">
                    <div className="slider_container">
                        {this.state.slider.map( (slide, index) => 
                            <div className="slider_item" key={index}>
                                <div className="slider_label" dangerouslySetInnerHTML={{__html: slide.label}}></div>
                                <img src={slide.url} width="100%" />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Slider;