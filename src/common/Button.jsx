import React from 'react';
import MaterialButton from '@material-ui/core/Button';

const Button = ({ type, variant = "contained", children, clickTrigger, color = "default", size = "medium" }) => {
  return (
    <MaterialButton type={type} size={size} onClick={clickTrigger} variant={variant} color={color}>
      { children }
    </MaterialButton>
  );
};

export { Button };
