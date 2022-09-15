import 'components/SingleSelect/styles.scss'

const SingleSelect = ({ data, selectedValue, setSelectedValue }) => (
  <div className='single-select-container'>
    <select data-testid='single-select' onChange={(e) => setSelectedValue(e.target.value)} className='select' defaultValue={selectedValue}>
      {data?.map(item => (
        <option key={item.id} value={item.value}>{item.label}</option>
      ))}
    </select>
  </div>
)

export default SingleSelect
