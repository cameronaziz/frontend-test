import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import AirCallIcon from './Icons/AirCallIcon.jsx';
import TuneIcon from './Icons/TuneIcon.jsx';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  tabRoot: {
    minWidth: 'unset',
  },
  labelContainer: {
    padding: 0,
  }
});

const Header = ({ classes, tab, setTab }) => {
  return (
    <header>
      <AirCallIcon />
      <div style={{ flex: 1, maxWidth: '40%', marginRight: '1rem' }}>
        <Tabs
            value={tab}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            onChange={setTab}
          >
            <Tab
              label="Inbox"
              classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
            />
            <Tab
              label="All Calls"
              classes={{ root: classes.tabRoot, labelContainer: classes.labelContainer }}
            />
        </Tabs>
      </div>
      <TuneIcon style={{ transform: 'rotate(90deg)', alignSelf: 'center', cursor: 'pointer' }} />
    </header>
  );
};

export default withStyles(styles)(Header);