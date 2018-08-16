var React = require('react');

class SectionInfo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            info: {
                title: "Компания <b>Zeleney</b> это -",
                subTitle: "- комплексное решение, от идеи до реализации",
                items: [
                    "Собственное производство и прямые поставки растений из Голландии",
                    "Квалифицированные инженеры и талантливые дизайнеры",
                    "Служба поддержки клиентов и постгарантийное обслуживание"
                ]
            }
        };
    }

    render() {
        return (
            <section className="section info">
                <header className="section_header">
                    <h1 className="section_header-title" dangerouslySetInnerHTML={{__html: this.state.info.title}}></h1>
                </header>
                <div className="info_content">
                    <div className="wrapper">
                    <h2 className="info_title">{this.state.info.subTitle}</h2>
                    <ul className="info_list">
                        {
                            this.state.info.items.map(function(item, i){
                                return <li className="info_item" key={i}>{item}</li>
                            })
                        }
                    </ul>
                    </div>
                </div>
            </section>
        );
    }
}

module.exports = SectionInfo;