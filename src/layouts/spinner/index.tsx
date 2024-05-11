import React from 'react';

import useStyles from './style';

const Spinner: React.FC = () => {
  const classes = useStyles();

  return <div className={classes.spinner}></div>;
};

export default Spinner;
