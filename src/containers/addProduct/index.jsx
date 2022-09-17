import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

import {
  Button, Input, UploadImage, AddProductForm,
} from 'components'
import colors from 'config/theme'
import { IoChevronDown, IoChevronUp, IoEllipsisHorizontal } from 'react-icons/io5'

import 'containers/addProduct/styles.scss'

const AddProduct = () => {
  const navigate = useNavigate()
  const [image, setImage] = useState()
  const [billingType, setBillingType] = useState('recurring')
  const [selectedPeriod, setSelectedPeriod] = useState('months')
  const [billRepeat, setBillRepeat] = useState(1)
  const [billingCycles, setBillingCycles] = useState('')
  const [planName, setPlanName] = useState('')
  const [planPrice, setPlanPrice] = useState('')
  const [plans, setPlans] = useState([])

  const resetRecurringDetails = () => {
    setBillRepeat(1)
    setBillingCycles('')
  }

  const handlePlan = (e) => {
    e.preventDefault()
    const allPlans = [...plans]
    if (planName && planPrice) {
      allPlans.push({
        id: plans.length,
        name: planName,
        status: 'active',
        price: planPrice,
        type: billingType,
        recurringDetails: {
          name: selectedPeriod,
          repeat: billRepeat,
          billingCycles,
        },
        action: false,
      })
      setPlans(allPlans)
      resetRecurringDetails()
    }
  }

  const handleDuplicatePlan = (index) => {
    const allPlans = [...plans]
    allPlans[index].action = false
    const newPlan = { ...allPlans[index] }
    allPlans.push(newPlan)
    setPlans(allPlans)
  }

  const handleArchivePlan = (index) => {
    let allPlans = [...plans]
    allPlans = allPlans.filter((item, planIndex) => planIndex !== index)
    setPlans(allPlans)
  }

  const handlePlanAction = (index) => {
    const allPlans = [...plans]
    allPlans[index].action = !allPlans[index].action
    setPlans(allPlans)
  }

  const planFormActions = (
    <div className='plan-row plan-form-row'>
      <div className='plan-actions'>
        <IoEllipsisHorizontal className='ellipsis-icon' />
        <IoChevronUp className='chevron' size='1.2rem' />
      </div>
    </div>
  )

  return (
    <div className='main-product-container'>
      <div data-testid='plan-card' className='product-card'>
        <h2 className='product-heading'>Create a Product or Service</h2>
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
        <h3 className='sub-heading pricing-heading'>Pricing Plans</h3>
        <p className='sub-description'>
          Create pricing plans for this product/service. Note that every product/service can have
          multiple plans.
        </p>
        {plans.map((plan, index) => (
          <div key={plan.id} className='plan-row'>
            <div className='plane-title'>
              <p className='heading name'>{plan.name}</p>
            </div>
            <div className='plan-details'>
              <p className='heading status'>{plan.status}</p>
              <p className='heading price'>${plan.price}</p>
            </div>
            <div className='plan-actions'>
              <div className={`edit-action-card ${plan.action && 'edit-action-card-active'}`}>
                <Button
                  onSubmit={() => handleDuplicatePlan(index)}
                  height='1rem'
                  name='Duplicate Plan'
                  color={colors.black}
                  backgroundColor={colors.white}
                />
                <Button
                  onSubmit={() => handleArchivePlan(index)}
                  height='1rem'
                  name='Archive Plan'
                  color={colors.error}
                  backgroundColor={colors.white}
                />
              </div>
              <IoEllipsisHorizontal
                onClick={() => handlePlanAction(index)}
                className={`ellipsis-icon ${plan.action && 'ellipsis-icon-active'}`}
              />
              <IoChevronDown className='chevron' size='1.2rem' />
            </div>
          </div>
        ))}
        {plans.length !== 0 && planFormActions}
        <AddProductForm
          plans={plans}
          handlePlan={handlePlan}
          setPlanName={setPlanName}
          billingType={billingType}
          setBillingType={setBillingType}
          setPlanPrice={setPlanPrice}
          setBillRepeat={setBillRepeat}
          selectedPeriod={selectedPeriod}
          setSelectedPeriod={setSelectedPeriod}
          setBillingCycles={setBillingCycles}
        />
        <hr className='horizontal-seperator footer-border' />
        <div className='product-actions'>
          <div className='cancel-btn'>
            <Button
              onSubmit={() => navigate('/cancel-membership')}
              name='Cancel'
              height='2.5rem'
              color={colors.black}
              backgroundColor={colors.white}
              border={`1px solid ${colors.lightGrey2}`}
              borderRadius='4px'
            />
          </div>
          <Button
            name='Create'
            color={colors.black}
            backgroundColor={colors.white}
            height='2.5rem'
            border={`1px solid ${colors.lightGrey2}`}
            borderRadius='4px'
            disabled
          />
        </div>
      </div>
    </div>
  )
}

export default AddProduct
