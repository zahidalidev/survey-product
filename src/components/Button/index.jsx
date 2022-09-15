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
  icon,
  borderRadius = '5px',
  fontWeight = '700',
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
      fontWeight,
    }}
  >
    { icon }
    { name }
  </button>
)

export default Button
