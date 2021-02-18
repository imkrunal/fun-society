import * as React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const Input = ({ name, label, ...props }) => {
  const [input, meta] = useField(name)

  return (
    <TextField
      {...input}
      fullWidth
      variant="outlined"
      size="medium"
      label={label}
      error={(meta.touched && meta.error) || false}
      helperText={meta.error}
      {...props}
    />
  )
}

export default Input
