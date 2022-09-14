import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import { Button, Input, UploadImage } from 'components'
import colors from 'config/theme'

import 'containers/addProduct/styles.scss'

const AddProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState()
  const [billingType, setBillingType] = useState('recurring')

  return (
    <div className='main-product-container'>
      <div className='product-card'>
        <h2>Create a Product or Service</h2>
        <h3 className='sub-heading'>General Info</h3>
        <div className='product-row'>
          <div className='product-field name-field'>
            <Input title='Product Name' placeholder='E.g. Website Maintainance, SEO, etc.' />
          </div>
          <div className='product-field'>
            <UploadImage image={image} setImage={setImage} title='Product Name' />
          </div>
        </div>
        <hr className='horizontal-seperator' />
        <h3 className='sub-heading'>Pricing Plans</h3>
        <p className='sub-description'>
          Create pricing plans for this product/service. Note that every product/service can have
          multiple plans.
        </p>
        <div className='product-row'>
          <div className='product-field name-field'>
            <Input title='Product Name' placeholder='E.g. Website Maintainance, SEO, etc.' />
          </div>
          <div className='product-field'>
            <p className='heading'>Billing Type</p>
            <div className='billing-toggle'>
              <Button
                onSubmit={() => setBillingType('recurring')}
                name='Recurring'
                borderRadius='0px'
                border={`0.5px solid ${colors.lightGrey2}`}
                backgroundColor={billingType === 'recurring' ? colors.primaryLight : colors.white}
                color={billingType === 'recurring' ? colors.primary : colors.black}
                height='3rem'
              />
              <Button
                height='3rem'
                onSubmit={() => setBillingType('one')}
                name='One time'
                borderRadius='0px'
                border={`0.5px solid ${colors.lightGrey2}`}
                backgroundColor={billingType === 'one' ? colors.primaryLight : colors.white}
                color={billingType === 'one' ? colors.primary : colors.black}
              />
            </div>
          </div>
        </div>
        <div className='product-row bill-details'>
          <div className='product-field name-field'>
            <Input title='Price' placeholder='0.00' rightTitle='USD' type='number' />
          </div>
          <div className='product-field'>
            <Input title='Bill Every' placeholder='1' type='number' />
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
