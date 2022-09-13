import { BiChevronLeft } from 'react-icons/bi'

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
        <div className='cancel-modal'>asd</div>
      </div>
    </div>
  )
}

export default CancellationSurvey
