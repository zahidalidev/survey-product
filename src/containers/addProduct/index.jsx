import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import {
  Button, Input, UploadImage, SingleSelect,
} from 'components'
import colors from 'config/theme'
import periods from 'utils/constants/addProduct'
import { IoAdd } from 'react-icons/io5'

import 'containers/addProduct/styles.scss'

const AddProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState()
  const [billingType, setBillingType] = useState('recurring')
  const [selectedPeriod, setSelectedPeriod] = useState('months')

  const billPeriod = (
    <>
      <div className='fields'>
        <Input title='Bill Every' min={1} placeholder='1' type='number' />
      </div>
      <div className='fields-select'>
        <SingleSelect
          data={periods}
          selectedValue={selectedPeriod}
          setSelectedValue={setSelectedPeriod}
        />
      </div>
    </>
  )

  const billCycles = (
    <div className='product-row bill-details'>
      <div className='product-field name-field'>
        <Input title='No. of Billing Cycles' placeholder='E.g. 6, 12, etc.' subTitle='(Optional)' />
        <p className='billing-cycle-description'>
          Leave this empty to auto-renew this plan until canceled.
        </p>
      </div>
      <div className='product-field bill-duration' />
    </div>
  )

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
            <Input title='Price' min={1} placeholder='0.00' rightTitle='USD' type='number' />
          </div>
          <div className='product-field bill-duration'>
            {billingType === 'recurring' && billPeriod}
          </div>
        </div>
        {billingType === 'recurring' && billCycles}
        <div className='product-row bill-details'>
          <div className='product-field name-field'>
            <Button
              onSubmit={() => navigate('/cancel-membership')}
              name='Add Another Plan'
              height='2.5rem'
              color={colors.black}
              backgroundColor={colors.white}
              border={`1px solid ${colors.lightGrey2}`}
              icon={<IoAdd className='add-icon' />}
            />
          </div>
          <div className='product-field bill-duration' />
        </div>
        <hr className='horizontal-seperator' />
        <div className='product-actions'>
          <div className='cancel-btn'>
            <Button
              onSubmit={() => navigate('/cancel-membership')}
              name='Cancel'
              height='2.5rem'
              color={colors.black}
              backgroundColor={colors.white}
              border={`1px solid ${colors.lightGrey2}`}
            />
          </div>
          <Button
            name='Create'
            color={colors.black}
            backgroundColor={colors.white}
            height='2.5rem'
            border={`1px solid ${colors.lightGrey2}`}
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default AddProduct
