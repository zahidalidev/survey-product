import 'components/Input/styles.scss'

const Input = ({
  title, placeholder, rightTitle, type = 'text',
}) => (
  <div className='input-container'>
    <p className='heading'>{title}</p>
    <div className='input-wrapepr'>
      <input className='input' type={type} placeholder={placeholder} />
      {rightTitle && <p className='heading'>{rightTitle}</p>}
    </div>
  </div>
)

export default Input
