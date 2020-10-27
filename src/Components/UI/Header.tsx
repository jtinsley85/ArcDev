import React, { Fragment, useState, ChangeEvent } from 'react';
//Material-UI
import { AppBar, Toolbar, useScrollTrigger, makeStyles, Tabs, Tab, Button } from '@material-ui/core'
//Components
import logo from '../../assets/logo.svg';

//TYPES
interface HeaderProps {
  children: React.ReactElement;
}

//SETUP SCROLL BEHAVIOR
const ElevationScroll = (props: HeaderProps) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 5 : 0,
  });
}

//STYLES
const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.headerTab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.headerBtn,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    minWidth: '120px'
  }
}));


//COMPONENT
const Header: React.FC = () => {
  const classes = useStyles();

  //SETUP TABS
  const [tabValue, setTabValue] = useState(0);
  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="company logo" />
            <Tabs
              className={classes.tabContainer}
              value={tabValue}
              onChange={handleTabChange}
              aria-label="navigation tabs"
              indicatorColor="primary"
            >
              <Tab className={classes.tab} label="Home" />
              <Tab className={classes.tab} label="Services" />
              <Tab className={classes.tab} label="The Revolution" />
              <Tab className={classes.tab} label="About Us" />
              <Tab className={classes.tab} label="Contact Us" />
            </Tabs>
            <Button variant='contained' color='secondary' className={classes.button}>
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
};

export default Header;
