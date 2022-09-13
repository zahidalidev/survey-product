import 'components/Button/styles.scss'

const Button = ({ name, backgroundColor = '#1782e6', color = '#fff' }) => (
  <div className='btn-wrapper' style={{ backgroundColor }}>
    <p className='name' style={{ color }}>
      {name}
    </p>
  </div>
)

export default Button
