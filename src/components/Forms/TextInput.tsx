import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextInput = (props: {
  label: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
  multiline: boolean;
  rows: string | number;
  value: string;
  type: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
}) => {
  return (
    <TextField
      fullWidth={true}
      label={props.label}
      margin={'dense'}
      multiline={props.multiline}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
