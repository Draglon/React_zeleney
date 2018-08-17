var React = require('react');

class Field extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            field: this.props.data
        }
    }

    render() {
        return (
            <div className="form_field">
                <input type={this.state.field.type} placeholder={this.state.field.placeholder} />
            </div>
        );
    }
}

module.exports = Field;