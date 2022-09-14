import { useNavigate } from 'react-router-dom'

import { Button, Input } from 'components'
import colors from 'config/theme'

import 'containers/addProduct/styles.scss'

const AddProduct = () => {
  const navigate = useNavigate()

  return (
    <div className='main-product-container'>
      <div className='product-card'>
        <h2>Create a Product or Service</h2>
        <h3 className='sub-heading'>General Info</h3>
        <div className='product-info'>
          <div className='name-field'>
            <Input title='Product Name' placeholder='E.g. Website Maintainance, SEO, etc.' />
          </div>
          <div className='name-field'>
            <h3>ajhsdljsa</h3>
          </div>
        </div>
        <div className='product-actions product-end'>
          <div className='cancel-btn'>
            <Button
              onSubmit={() => navigate('/cancel-membership')}
              name='Cancel'
              height='2rem'
              color={colors.black}
              backgroundColor={colors.white}
              border={`1px solid ${colors.lightGrey2}`}
            />
          </div>
          <Button
            name='Create'
            color={colors.black}
            backgroundColor={colors.white}
            height='2rem'
            border={`1px solid ${colors.lightGrey2}`}
          />
        </div>
      </div>
    </div>
  )
}

export default AddProduct
