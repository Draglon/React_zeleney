var React = require('react');

// var SectionMain = require('../sections/Old_sections/main.js');
// var SectionCategory = require('../sections/Old_sections/category.js');
// var SectionInfo = require('../sections/Old_sections/info.js');
// var SectionPortfolio = require('../sections/Old_sections/portfolio.js');
// var SectionRequest = require('../sections/Old_sections/request.js');

var Section = require('../sections/Section.js');
const dataHome = require('./data/dataHome.js');
// const dataHome = require('./dataOld/dataHome.js');

class Home extends React.Component {
    render() {
        return (
            <main className="main">
                {dataHome.sections.map( (section, index) => <Section data={section} key={index} /> ) }

                {/* <SectionMain data={dataHome.sections[0]} />
                <SectionCategory data={dataHome.sections[1]} />
                <SectionInfo data={dataHome.sections[2]} />
                <SectionPortfolio data={dataHome.sections[3]} />
                <SectionRequest data={dataHome.sections[4]} /> */}
            </main>
        );
    }
}
 
module.exports = Home;