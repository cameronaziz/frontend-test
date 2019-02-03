import React, { Component } from 'react';
import { getActivities, groupByDate, archiveActivity } from '../util/activities'
import CallPreview from './CallPreview.jsx';
import CallDetail from './CallDetail.jsx';
import DeleteIcon from '@material-ui/icons/Delete';

class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activities: [],
            currentCall: undefined,
        }
        this.archiveActivity = this.archiveActivity.bind(this);
        this.archiveAll = this.archiveAll.bind(this);
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
            archiveActivity(id);
            const index = prevState.activities.findIndex((call) => call.id === id);
            prevState.activities[index].is_archived = true;
            return prevState
        })
    }

    archiveAll() {
        for (let activity of this.state.activities) {
            if (!activity.is_archived) {
                this.archiveActivity(activity.id);
            }
        }
    }

    render() {
        let calls = this.state.activities;
        if (!this.props.allCalls) {
            calls = calls.filter(call => !call.is_archived);
        }
        if (this.props.currentCall) {
            const call = this.state.activities.find((call) => call.id = this.props.currentCall)
            return <CallDetail call={call} archiveActivity={this.archiveActivity} clearDetail={this.props.viewDetail} />
        }
        if (calls.length === 0) {
            return (
                <div className="all-done">
                    <div>All Done!</div>
                </div>
            )
        }
        return (
            <div>
                {!this.props.allCalls &&
                    <div className="archive-all" onClick={this.archiveAll}>
                        <DeleteIcon />
                        <div>Archive All Calls</div>
                    </div>
                }
                {groupByDate(calls).map((date) => (
                    <div key={date.key} style={{ marginBottom: '15px'}}>
                        <div style={{ color: '#A0A0A0', textAlign: 'center'}}>{date.key}</div>
                        {date.values.map((call) => <CallPreview
                                                        key={call.id}
                                                        call={call}
                                                        archiveActivity={this.archiveActivity}
                                                        viewDetail={this.props.viewDetail}
                                                    />)}
                    </div>
                ))}
            </div>
        )
    }
}

export default Feed;