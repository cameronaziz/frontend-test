import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import AlbumIcon from '@material-ui/icons/Album';
import GridIcon from '@material-ui/icons/GridOnRounded';

const styles = {
    root: {
        width: '100%',
    },
};

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event, value) {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
        <BottomNavigation
            value={value}
            onChange={this.handleChange}
            className={classes.root}
        >
            <BottomNavigationAction icon={<PhoneIcon />} />
            <BottomNavigationAction icon={<PersonIcon />} disabled />
            <BottomNavigationAction icon={<GridIcon />} disabled />
            <BottomNavigationAction icon={<SettingsIcon />} disabled />
            <BottomNavigationAction icon={<AlbumIcon />} disabled />
        </BottomNavigation>
        );
    }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);