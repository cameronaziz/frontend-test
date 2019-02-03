import React, { Component, Fragment } from 'react';
import moment from 'moment';
import ArchiveIcon from '@material-ui/icons/Archive';
import CallIcon from './CallIcon.jsx';
import '../css/callPreview.css'

class CallDetail extends Component {
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
        const { call, archiveActivity } = this.props;
        return (
            <div className="call-detail">
                <div style={{ marginRight: '5px' }}>
                    <CallIcon callType={call.call_type} />
                </div>
                <div style={{ flex: 1, height: '100%' }}>
                    <div>
                        {call.from}
                    </div>
                    <div>
                        {call.to &&
                            <Fragment>
                                <span style={{ color: '#A0A0A0'}}>tried to call</span> {call.to}
                            </Fragment>}
                    </div>
                    <div>
                        {call.direction} <span style={{ color: '#A0A0A0'}}>direction</span>
                    </div>
                    <div>
                        <span style={{ color: '#A0A0A0'}}>via</span> {call.via}
                    </div>
                </div>
                <div className="actions">
                    {!call.is_archived &&
                        <ArchiveIcon
                            className="archive-button"
                            onClick={() => archiveActivity(call.id)}
                        />
                    }
                    <div>{moment(call.created_at).format('hh:mm A')}</div>
                </div>
            </div>
        )
    }
}

export default CallDetail;