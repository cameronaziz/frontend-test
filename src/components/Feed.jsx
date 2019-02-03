import React, { Component } from 'react';
import { getActivities, groupByDate } from '../util/activities'
import CallPreview from './CallPreview.jsx';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
        }
        this.archiveActivity = this.archiveActivity.bind(this);
    }

    componentWillMount() {
        getActivities().then((activities) => {
            this.setState({
                activities,
            })
        })
    }

    archiveActivity(id) {
        this.setState((prevState) => {
            const index = prevState.activities.findIndex((call) => call.id === id)
            prevState.activities[index].is_archived = true;
            return prevState
        })

    }

    render() {
        let calls = this.state.activities;
        if (!this.props.allCalls) {
            calls = calls.filter(call => !call.is_archived);
        }
        return (
            <div>
                {groupByDate(calls).map((date) => (
                    <div key={date.key} style={{ marginBottom: '15px'}}>
                        <div style={{ color: '#A0A0A0', textAlign: 'center'}}>{date.key}</div>
                        {date.values.map((call) => <CallPreview key={call.id} call={call} archiveActivity={this.archiveActivity} />)}
                    </div>
                ))}
            </div>
        )
    }
}

export default Feed;