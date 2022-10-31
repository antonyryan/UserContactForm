import React from 'react'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import OutlinedInput from '@mui/material/OutlinedInput'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import Select from '@mui/material/Select'
import useStyles from './style'
import cn from 'classnames'
import * as R from 'ramda'

const FormSelect = ({ field, form, field: { name }, htmlId, label, options, noMb }) => {
  const classes = useStyles()
  const error = R.path(R.split('.', name), form.touched) && R.path(R.split('.', name), form.errors)

  return (
    <FormControl
      variant="outlined"
      className={cn(classes.formControl, {
        [classes.noMb]: noMb,
      })}>
      {label && <FormLabel htmlFor={htmlId}>{label}</FormLabel>}
      <Select
        input={<OutlinedInput id={htmlId} name={field.name} />}
        onBlur={field.onBlur}
        onChange={field.onChange}
        value={field.value || ''}>
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText error={Boolean(error)}>{error}</FormHelperText>
    </FormControl>
  )
}

export default FormSelect
