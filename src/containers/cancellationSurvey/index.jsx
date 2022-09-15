import { BiChevronLeft } from 'react-icons/bi'
import { useState } from 'react'
import { IoIosAlert } from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

import answers from 'utils/constants/cancellationSurvey'
import { Button, CancellationSurveyForm } from 'components'
import colors from 'config/theme'
import { IoArrowBack } from 'react-icons/io5'

import 'containers/cancellationSurvey/styles.scss'

const CancellationSurvey = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [selectProducts, setselectProducts] = useState(0)
  const navigate = useNavigate()
  const [bugsDetails, setBugsDetails] = useState({
    bugProducts: [
      {
        id: 0,
        label: 'Product #1',
        selected: false,
      },
      {
        id: 1,
        label: 'Product #2',
        selected: false,
      },
      {
        id: 2,
        label: 'Product #3',
        selected: false,
      },
      {
        id: 3,
        label: 'Product #4',
        selected: false,
      },
      {
        id: 4,
        label: 'Product #5',
        selected: false,
      },
    ],
    bugType: 'major',
  })

  const handleProblemType = (type) => {
    const tempBugsDetails = { ...bugsDetails }
    tempBugsDetails.bugType = type
    setBugsDetails(tempBugsDetails)
  }

  const handleProduct = (index) => {
    const tempBugsDetails = { ...bugsDetails }
    tempBugsDetails.bugProducts[index].selected = !tempBugsDetails.bugProducts[index].selected
    setBugsDetails(tempBugsDetails)
    setselectProducts(tempBugsDetails.bugProducts.filter((item) => item.selected).length)
  }

  return (
    <div className='main-survey-container'>
      <div className='survey-container'>
        <div className='breadcrumb'>
          <button onClick={() => navigate('/cancel-membership')} type='button' className='back-icon-wraperr'>
            <BiChevronLeft size='2rem' />
          </button>
          <p className='title'>Cancellation Survey</p>
        </div>
        <div className='cancel-survey'>
          <h3>We&apos;re are sad to see you go...</h3>
          <p className='questions'>Can you tell us why you want to cancel your membership?</p>
          <CancellationSurveyForm
            answers={answers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            bugsDetails={bugsDetails}
            selectProducts={selectProducts}
            handleProblemType={handleProblemType}
            handleProduct={handleProduct}
          />
          <div className='alert-box'>
            <div className='content'>
              <IoIosAlert className='icon' />
              <p className='description'>
                Are you absolutely sure you want to cancel? If you do you&apos;ll lose access to so
                many cool things. And you&apos;ll lose the chance to stay on this plan at the same
                cost ongoing (regardless of future price increases)
              </p>
            </div>
          </div>
          <div className={`survey-actions survey-${!selectedAnswer ? 'end' : 'between'}`}>
            <div className='back-btn'>
              <Button
                onSubmit={() => navigate('/cancel-membership')}
                name='Back'
                height='2rem'
                color={colors.black}
                backgroundColor={colors.white}
                border={`1px solid ${colors.lightGrey2}`}
                icon={<IoArrowBack className='backIcon' />}
              />
            </div>
            <Button
              name='Cancel Membership'
              disabled={!selectedAnswer}
              backgroundColor={colors.error}
              height='2rem'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancellationSurvey
