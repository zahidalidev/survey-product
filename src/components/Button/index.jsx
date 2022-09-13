import 'components/Button/styles.scss'

const Button = ({
  name, backgroundColor = '#1782e6', color = '#fff', onSubmit,
}) => (
  <button type='submit' onClick={onSubmit} className='btn-wrapper' style={{ backgroundColor, color }}>
    {name}
  </button>
)

export default Button
