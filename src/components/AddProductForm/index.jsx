import { IoAdd } from 'react-icons/io5'

import { Button, Input, SingleSelect } from 'components'
import colors from 'config/theme'
import periods from 'utils/constants/addProduct'

import 'components/AddProductForm/styles.scss'

const AddProductForm = ({
  plans,
  handlePlan,
  setPlanName,
  billingType,
  setBillingType,
  setPlanPrice,
  setBillRepeat,
  selectedPeriod,
  setSelectedPeriod,
  setBillingCycles,
}) => {
  const billPeriod = (
    <>
      <div className='fields'>
        <Input setValue={setBillRepeat} title='Bill Every' min={1} placeholder='1' type='number' />
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
        <Input
          setValue={setBillingCycles}
          title='No. of Billing Cycles'
          placeholder='E.g. 6, 12, etc.'
          subTitle='(Optional)'
        />
        <p className='billing-cycle-description'>
          Leave this empty to auto-renew this plan until canceled.
        </p>
      </div>
      <div className='product-field bill-duration' />
    </div>
  )

  return (
    <form data-testid='product-form' className={`product-form ${plans?.length !== 0 ? 'plan-form' : ''}`} onSubmit={handlePlan}>
      <div className='product-row'>
        <div className='product-field name-field'>
          <Input
            title='Plan Name'
            setValue={setPlanName}
            placeholder='E.g. Monthly, Lifetime, etc.'
          />
        </div>
        <div className='product-field'>
          <p className='heading billing-heading'>Billing Type</p>
          <div className='billing-toggle'>
            <Button
              onSubmit={() => setBillingType('recurring')}
              name='Recurring'
              border={`0.5px solid ${colors.lightGrey2}`}
              backgroundColor={billingType === 'recurring' ? colors.primaryLight : colors.white}
              color={billingType === 'recurring' ? colors.primary : colors.black}
              height='3rem'
              fontSize='0.93rem'
            />
            <Button
              height='3rem'
              onSubmit={() => setBillingType('one')}
              name='One time'
              border={`0.5px solid ${colors.lightGrey2}`}
              backgroundColor={billingType === 'one' ? colors.primaryLight : colors.white}
              color={billingType === 'one' ? colors.primary : colors.black}
              fontSize='0.93rem'
            />
          </div>
        </div>
      </div>
      <div className='product-row bill-details'>
        <div className='product-field name-field'>
          <Input
            title='Price'
            setValue={setPlanPrice}
            min={1}
            placeholder='0.00'
            rightTitle='USD'
            type='number'
          />
        </div>
        <div className='product-field bill-duration'>
          {billingType === 'recurring' && billPeriod}
        </div>
      </div>
      {billingType === 'recurring' && billCycles}
      <div className='product-row bill-details'>
        <div className='product-field name-field'>
          <Button
            type='submit'
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
    </form>
  )
}
export default AddProductForm
