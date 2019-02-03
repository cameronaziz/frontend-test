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
            currentCall: undefined,
        }
        this.setTab = this.setTab.bind(this);
        this.viewDetail = this.viewDetail.bind(this);
    }

    setTab(event, tab) {
        this.setState({
            tab,
            currentCall: undefined,
        })
    }

    viewDetail(currentCall) {
        this.setState({
            currentCall,
        })
    }

    render() {
        return (
            <div className="container">
                <Header tab={this.state.tab} setTab={this.setTab} />
                <div className="container-view">
                    <Feed allCalls={this.state.tab} viewDetail={this.viewDetail} currentCall={this.state.currentCall} />
                </div>
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;