import { IoArrowBack } from 'react-icons/io5'

import colors from 'config/theme'

import 'components/Button/styles.scss'

const Button = ({
  name,
  backgroundColor = colors.primary,
  color = colors.white,
  onSubmit,
  disabled = false,
  height = '2.7rem',
  border,
  backIcon,
  borderRadius = '5px',
}) => (
  <button
    disabled={disabled}
    type='button'
    onClick={onSubmit}
    className='btn-wrapper'
    style={{
      backgroundColor: disabled ? colors.lightGrey3 : backgroundColor,
      color: disabled ? colors.darkGrey : color,
      cursor: disabled && 'default',
      height,
      border,
      borderRadius,
    }}
  >
    { backIcon && <IoArrowBack className='backIcon' /> }
    { name }
  </button>
)

export default Button
