var React = require('react');

class Popup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            popup: this.props.popup,

            title: "Оставьте заявку",
            text: "и получите бесплатную консультацию по зеленым системам Zeleney",
            items: ['Тел: (067) 256-82-99', '(095) 555-14-32', 'info@zeleney.com'],

            placeholders: {
                name: "Имя",
                email: "Еmail*",
                phone: "Телефон*",
                comment: "Комментарий"
            },
            button: "Отправить",
            errors: {
                email: "Укажите email",
                phone: "Укажите телефон"
            }
        };
    }

    render() {
        return (
            <div className="popup_wrap">
                <div className="popup">
                    <a className="popup_close" onClick={this.state.popup}></a>
                    <div className="popup_content">
                        <h2 className="popup_title">{this.state.title}</h2>
                        <p className="popup_text">{this.state.text}</p>

                        <ul className="popup_info">
                            {this.state.items.map( (item, i) => <li className="popup_info-item" key={i}>{item}</li> )}
                        </ul>

                        <form className="form">
                            <div className="form_field">
                                <input type="text" className="form_input" placeholder="" />
                            </div>
                            <div className="form_field">
                                <input type="email" className="form_input" placeholder="" />
                            </div>
                            <div className="form_field">
                                <input type="tel" className="form_input" placeholder="" />
                            </div>
                            <div className="form_field">
                                <textarea className="form_textarea" placeholder="" ></textarea>
                            </div>
                            <div className="form_field">
                                <button className="btn" type="submit">{this.state.button}</button>
                            </div>
                            <ul className="field_errors">
                                <li className="">{this.state.errors.email}</li>
                                <li className="">{this.state.errors.phone}</li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Popup;