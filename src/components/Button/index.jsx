import { IoArrowBack } from 'react-icons/io5'

import 'components/Button/styles.scss'

const Button = ({
  name,
  backgroundColor = '#1782e6',
  color = '#fff',
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
      backgroundColor: disabled ? '#F5F5F5' : backgroundColor,
      color: disabled ? '#969696' : color,
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
