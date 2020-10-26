import React, { Fragment } from 'react';
//Material-UI
import { AppBar, Toolbar, useScrollTrigger, makeStyles } from '@material-ui/core'
//Components
import logo from '../../assets/logo.svg';

//TYPES
interface HeaderProps {
  children: React.ReactElement;
}

//SCROLL BEHAVIOR
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
  }
}));


//COMPONENT
const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar disableGutters>
            <img className={classes.logo} src={logo} alt="company logo" />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  )
};

export default Header;
