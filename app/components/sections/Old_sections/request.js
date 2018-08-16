var React = require('react');

class SectionRequest extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            request: {
                title: "Интересно? Оставьте заявку",
                text: "и получите бесплатную консультацию<br/> по зеленым системам",
                button: "Оставить заявку"
            }
        };
    }

    render() {
        return (
            <section className="section request">
                <div className="wrapper">
                    <h2 className="request_title">{this.state.request.title}</h2>
                    <p className="request_text" dangerouslySetInnerHTML={{__html: this.state.request.text}}></p>
                    <button className="btn btn-purple btn-request">{this.state.request.button}</button>
                </div>
            </section>
        );
    }
}

module.exports = SectionRequest;