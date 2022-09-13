import { MdClose } from 'react-icons/md'
import { BsFillTagsFill } from 'react-icons/bs'

import Button from 'components/Button'

import 'containers/cancelMembership/styles.scss'

const CancelMembership = () => (
  <div className='main-container'>
    <div className='cancel-modal'>
      <div className='close-icon'>
        <MdClose size='1.5rem' />
      </div>
      <div className='card-container'>
        <div className='tag-wrapper'>
          <BsFillTagsFill className='tag-icon' />
        </div>
        <div className='content-container'>
          <h2 className='heading'> Before You Go... </h2>
          <h2 className='heading'> Would 50% Off For 6 Months Help?</h2>
          <p className='description'>
            We know things REALLY sucks in the world right now - and many businesses and freelancers
            are struggling to stay afloat during this COVID-19 crises.
          </p>
          <p className='discount-description'>
            So if you could use the extra cushion, grab 50% off for 6 months.
          </p>
          <p className='safe-description'>We hope you&apos;r staying safe and healthy!</p>
          <div className='actions'>
            <Button name='50% OFF For 6 Months' />
            <Button name='No, thanks! I&apos;ll cancel' backgroundColor='#fff' color='#1782e6' />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CancelMembership
