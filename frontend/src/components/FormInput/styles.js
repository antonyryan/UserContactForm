import tinycolor from 'tinycolor2'
import { makeStyles } from '@mui/styles'

const color = '#536DFE'
const lightenRate = 7.5

const useStyles = makeStyles(theme => ({
  textFieldUnderline: {
    '&:before': {
      borderBottomColor: tinycolor(color).lighten(lightenRate).toHexString(),
    },
    '&:after': {
      borderBottomColor: color,
    },
    '&:hover:before': {
      borderBottomColor: `${tinycolor(color).lighten(lightenRate).toHexString()} !important`,
    },
  },
  wrapper: {
    marginBottom: '16px',
  },
  noMb: {
    marginBottom: `0 !important`,
  },
}))

export default useStyles
