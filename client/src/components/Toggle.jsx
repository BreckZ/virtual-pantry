import React from 'react';
import Switch from 'rc-switch';

import './Toggle.css'



function Toggle(props) {
  return (
    <span>
      <Switch disabled={props.toggled} />
      </span>
  )
}

export default Toggle
