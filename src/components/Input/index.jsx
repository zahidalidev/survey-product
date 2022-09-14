import 'components/Input/styles.scss'

const Input = ({ title, placeholder }) => (
  <div className='input-container'>
    <p className='heading'>{title}</p>
    <div className='input-wrapepr'>
      <input className='input' placeholder={placeholder} />
    </div>
  </div>
)

export default Input
