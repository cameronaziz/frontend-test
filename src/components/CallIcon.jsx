import React from 'react';
import PhoneMissedIcon from '@material-ui/icons/PhoneMissed';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import PhoneIcon from '@material-ui/icons/Phone';

const CallIcon = ({ callType }) => {
    switch(callType) {
        case 'missed':
            return <PhoneMissedIcon />
        case 'voicemail':
            return <VoicemailIcon />
        case 'answered': 
            return <PhoneIcon />
        default:
            return null;
      }
}

export default CallIcon;