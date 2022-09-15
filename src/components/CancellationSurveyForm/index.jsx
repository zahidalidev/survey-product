import { BugsForm, TextArea } from 'components'
import { Fragment } from 'react'

const CancellationSurveyForm = ({
  answers,
  selectedAnswer,
  setSelectedAnswer,
  bugsDetails,
  selectProducts,
  handleProblemType,
  handleProduct,
}) => (
  <form>
    {answers?.map((answer) => (
      <Fragment key={answer.id}>
        <div
          className={`answer-wrapper ${selectedAnswer === answer.title && 'active-answer-wrapper'}`}
        >
          <input
            onChange={(e) => setSelectedAnswer(e.target.value)}
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
        {selectedAnswer === answer.title && answer.id === 2 ? (
          <TextArea placeholder='What is the better solution? If you dont mind sharing. Your feedback is much appreaciated!' />
        ) : null}
        {selectedAnswer === answer.title && answer.id === 4 ? (
          <BugsForm
            bugsDetails={bugsDetails}
            selectProducts={selectProducts}
            handleProblemType={handleProblemType}
            handleProduct={handleProduct}
          />
        ) : null}
      </Fragment>
    ))}
  </form>
)

export default CancellationSurveyForm
