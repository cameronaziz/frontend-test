import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';
import Feed from './components/Feed.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab: 0,
        }
        this.setTab = this.setTab.bind(this);
    }

    setTab(event, tab) {
        this.setState({
            tab,
        })
    }

    render() {
        return (
            <div className="container">
                <Header tab={this.state.tab} setTab={this.setTab} />
                <div className="container-view">
                    <Feed allCalls={this.state.tab} />
                </div>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;