import 'components/Input/styles.scss'

const Input = ({
  title, placeholder, rightTitle, type = 'text', min, subTitle, setValue,
}) => (
  <div className='input-container'>
    <p className='input-heading'>{title} <span className='sub-heading'>{subTitle}</span></p>
    <div className='input-wrapepr'>
      <input onChange={(e) => setValue(e.target.value)} min={min} className='input' type={type} placeholder={placeholder} />
      {rightTitle && <p className='right-heading'>{rightTitle}</p>}
    </div>
  </div>
)

export default Input
