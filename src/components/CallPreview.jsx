import React, { Component } from 'react';
import moment from 'moment';
import ArchiveIcon from '@material-ui/icons/Archive';
import { archiveActivity } from '../util/activities';
import CallIcon from './CallIcon.jsx';
import '../css/callPreview.css'

class CallPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
        this.toggleHover = this.toggleHover.bind(this);
        this.archiveActivity = this.archiveActivity.bind(this);
    }

    toggleHover() {
        this.setState({
            isHovered: !this.state.isHovered,
        })
    }

    archiveActivity() {
        const { id } = this.props.call;
        archiveActivity(id);
        this.props.archiveActivity(id);
    }

    render() {
        const { call } = this.props;
        return (
            <div className="call-preview">
                <div style={{ marginRight: '5px' }}>
                    <CallIcon callType={call.call_type} />
                </div>
                <div style={{ flex: 1 }}>
                    <div>
                        {call.from}
                    </div>
                    <div style={{ color: '#A0A0A0'}}>
                        {call.to && `tried to call ${call.to}`}
                    </div>
                </div>
                <div>
                    {moment(call.created_at).format('hh:mm A')}
                </div>
                {!call.is_archived &&
                    <ArchiveIcon className="archive-button" onClick={this.archiveActivity} />
                }
            </div>
        )
    }
}

export default CallPreview;