import { BiChevronLeft } from 'react-icons/bi'
import { IoIosAlert } from 'react-icons/io'

import answers from 'utils/constants/cancellationSurvey'

import 'containers/cancellationSurvey/styles.scss'

const CancellationSurvey = () => {
  console.log('asdh')
  return (
    <div className='main-survey-container'>
      <div className='survey-container'>
        <div className='breadcrumb'>
          <div className='back-icon-wraperr'>
            <BiChevronLeft />
          </div>
          <p className='title'>Cancellation Survey</p>
        </div>
        <div className='cancel-survey'>
          <h3>We&apos;re are sad to see you go...</h3>
          <p className='questions'>Can you tell us why you want to cancel your membership?</p>
          <form onChange={(e) => console.log(e.target.value)}>
            {answers.map((answer) => (
              <div key={answer.id} className='answer-wrapper'>
                <input
                  type='radio'
                  id={answer.title}
                  className='radio-btn'
                  name='fav_language'
                  value={answer.title}
                  size='10px'
                />
                <label className='label' htmlFor={answer.title}>
                  {answer.title}
                </label>
              </div>
            ))}
          </form>
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
        </div>
      </div>
    </div>
  )
}

export default CancellationSurvey
