import { useNavigate } from 'react-router-dom'

import { Button } from 'components'
import colors from 'config/theme'

import 'containers/home/styles.scss'

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className='home-container'>
      <div className='home-card'>
        <Button onSubmit={() => navigate('/add-product')} name='Add Product' />
        <Button
          onSubmit={() => navigate('/cancel-membership')}
          name='Cancel Membership'
          backgroundColor={colors.white}
          color={colors.primary}
        />
      </div>
    </div>
  )
}

export default Home
