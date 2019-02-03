import React, { Component } from 'react';
import moment from 'moment';
import ArchiveIcon from '@material-ui/icons/Archive';
import CallIcon from './CallIcon.jsx';
import '../css/callPreview.css'

class CallPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
        this.toggleHover = this.toggleHover.bind(this);
    }

    toggleHover() {
        this.setState({
            isHovered: !this.state.isHovered,
        })
    }

    render() {
        const { call, archiveActivity, viewDetail } = this.props;
        return (
            <div className="call-preview" onClick={() => viewDetail(call.id)}>
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
                    <ArchiveIcon
                        className="archive-button"
                        onClick={() => archiveActivity(call.id)}
                    />
                }
            </div>
        )
    }
}

export default CallPreview;