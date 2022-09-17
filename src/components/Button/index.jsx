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
  borderRadius = '4px',
  fontSize = '0.83rem',
  type,
}) => (
  <button
    disabled={disabled}
    type={type ? 'submit' : 'button'}
    onClick={onSubmit}
    className='btn-wrapper'
    style={{
      backgroundColor: disabled ? colors.lightGrey3 : backgroundColor,
      color: disabled ? colors.darkGrey : color,
      cursor: disabled && 'default',
      height,
      border,
      borderRadius,
      fontSize,
    }}
  >
    { icon }
    { name }
  </button>
)

export default Button
