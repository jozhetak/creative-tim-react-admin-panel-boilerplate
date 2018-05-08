import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
// import { List, ListItem, withStyles } from 'material-ui';

import footerStyle from '../../assets/jss/material-dashboard-react/footerStyle';

function Footer({ ...props }) {
  const { classes } = props;
  return (
    <footer className={classes.footer} style={{ textAlign: 'center' }}>
      <div className={classes.container}>
        {/* <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="#home" className={classes.block}>
                Home
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#company" className={classes.block}>
                Company
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#portfolio" className={classes.block}>
                Portfolio
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="#blog" className={classes.block}>
                Blog
              </a>
            </ListItem>
          </List>
        </div> */}
        <p>
          <span>
            &copy; {1900 + new Date().getYear()}{' '}
            <a href="http://www.github.com/debotos" className={classes.a}>
              Debotos Das
            </a>, Made with love.
          </span>
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
