var React = require('react');

class SectionBlockByBlock extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.data.title,
            items: this.props.data.items
        };
    }

    render() {
        return (
            <section className="section block-by-block">
                <header className="section_header">
                    <h1 className="section_header-title">{this.state.title}</h1>
                </header>

                <div className="wrapper">
                    {
                        this.state.items.map(function(item, i) {
                            return (
                                <div className="block-by-block_item" key={i}>
                                    <div className="block-by-block_item-side" style={{backgroundColor: item.bgColor}}>
                                        <div className="block-by-block_item-count" style={{color: item.color}}>{item.number}</div>
                                        <label className="block-by-block_item-label" dangerouslySetInnerHTML={{__html: item.label}}></label>
                                    </div>
                                    <div className="block-by-block_item-side" style={{backgroundImage: 'url(' + item.url + ')'}}>
                                        <h2 className="block-by-block_item-title" dangerouslySetInnerHTML={{__html: item.title}}></h2>
                                        <p className="block-by-block_item-text">{item.text}</p>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

module.exports = SectionBlockByBlock;