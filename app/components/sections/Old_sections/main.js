var React = require('react');

class SectionMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Вертикальное озеленение",
            subTitle: "от производителя",
            items: [
                "Современный тренд",
                "Уникальный дизайн",
                "Чистый воздух",
                "Простой уход"
            ],
            button: "Получить консультацию"
        };
    }

    render() {
        return (
            <section className="section section_main">
                <div className="wrapper">
                    <ul className="list">
                        {
                            this.state.items.map(function(item, i){
                                return <li className="list_item" key={i}>{item}</li>
                            })
                        }
                    </ul>
                    <h1 className="title">{this.state.title}</h1>
                    <h2 className="sub-title">{this.state.subTitle}</h2>
                    <button className="btn btn-yellow btn-consultation">{this.state.button}</button>
                </div>
            </section>
        );
    }
}

module.exports = SectionMain;