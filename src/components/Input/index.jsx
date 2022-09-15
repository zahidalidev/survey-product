import 'components/Input/styles.scss'

const Input = ({
  title, placeholder, rightTitle, type = 'text', min, subTitle,
}) => (
  <div className='input-container'>
    <p className='heading'>{title} <span className='sub-heading'>{subTitle}</span></p>
    <div className='input-wrapepr'>
      <input min={min} className='input' type={type} placeholder={placeholder} />
      {rightTitle && <p className='heading'>{rightTitle}</p>}
    </div>
  </div>
)

export default Input
