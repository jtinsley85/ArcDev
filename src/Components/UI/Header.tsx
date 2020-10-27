import React, { Fragment, useState, ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, useScrollTrigger, makeStyles, Tabs, Tab, Button } from '@material-ui/core'
import logo from '../../assets/logo.svg';
import { routePaths } from '../Routes'

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
    height: '8em'
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: 'transparent',
    }
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

  useEffect(() => {   //set routes

    const currentPath = window.location.pathname;

    switch (currentPath) {
      case "/":
        (tabValue !== 0) && setTabValue(0);
        break;
      case "/services":
        (tabValue !== 1) && setTabValue(1)
        break;
      case "/revolution":
        (tabValue !== 2) && setTabValue(2)
        break;
      case "/about":
        (tabValue !== 3) && setTabValue(3)
        break;
      case "/contact":
        (tabValue !== 4) && setTabValue(4)
        break;
      case "/estimate":
        (tabValue !== 5) && setTabValue(5)
        break;
      default: setTabValue(0) //go to home if navigated weirdly.
    }
  }, [tabValue]);

  const renderTabs = (
    routePaths.map((routePath, idx) => {
      if (routePath.tab === true) {
        return (
          <Tab
            key={routePath.name + 'tab'}
            className={classes.tab}
            label={routePath.name}
            component={Link}
            to={routePath.path} />
        )
      }
      return null;
    })
  )

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <Button className={classes.logoContainer} onClick={() => setTabValue(0)} component={Link} to="/">
              <img className={classes.logo} src={logo} alt="company logo" />
            </Button>
            <Tabs className={classes.tabContainer} value={tabValue}
              onChange={handleTabChange} aria-label="navigation tabs" indicatorColor="primary">
              {renderTabs}
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
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
