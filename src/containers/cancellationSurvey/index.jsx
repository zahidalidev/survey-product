import { BiChevronLeft, BiChevronDown } from 'react-icons/bi'
import { IoIosAlert } from 'react-icons/io'
import { Fragment, useState } from 'react'

import answers from 'utils/constants/cancellationSurvey'

import 'containers/cancellationSurvey/styles.scss'
import Button from 'components/Button'

const CancellationSurvey = () => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [toggleSelect, setToggleSelect] = useState(false)
  const [selectProducts, setselectProducts] = useState(0)
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
    bugDescription: '',
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
    setselectProducts(tempBugsDetails.bugProducts.filter(item => item.selected).length)
  }

  const betterSolutionQuestion = (
    <>
      <textarea
        placeholder='What is the better solution? If you dont mind sharing. Your feedback is much appreaciated!'
        type='text'
        className='answer-wrapper text-area'
      />
      <hr className='horizontal-seperator' />
    </>
  )

  const bugsThingsForm = (
    <>
      <div>
        <p className='question-lable product-issue'>
          Which product(s) did you have an issue with? <IoIosAlert color='#666565' />
        </p>
        <button
          type='button'
          onClick={() => setToggleSelect(!toggleSelect)}
          className={`answer-wrapper drop-down-select ${toggleSelect && 'active'}`}
        >
          <p className='heading'>{ selectProducts > 0 ? `${selectProducts} products selected` : 'Select product(s)' }</p>
          <BiChevronDown className='chevron-down' />
        </button>
        {toggleSelect && (
          <div className={`answer-wrapper drop-down-options ${toggleSelect && 'active'}`}>
            {bugsDetails.bugProducts.map((product, index) => (
              <div className='option-wrapper'>
                <input
                  type='checkbox'
                  id={product.label}
                  checked={product.selected}
                  onChange={() => handleProduct(index)}
                  value={product.label}
                />
                <label className='label' htmlFor={product.label}>
                  {product.label}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <hr className='horizontal-seperator' />
      <div className='bugs-problem-btns'>
        <p className='question-lable'>What was it?</p>
        <span>
          <Button
            onSubmit={() => handleProblemType('major')}
            name='One Major Problem'
            borderRadius='0px'
            border='0.5px solid #eeeeee'
            backgroundColor={bugsDetails.bugType === 'major' ? '#1170dd3b' : '#fff'}
            color={bugsDetails.bugType === 'major' ? '#1782e6' : '#000'}
          />
          <Button
            onSubmit={() => handleProblemType('various')}
            name='Various things'
            borderRadius='0px'
            border='0.5px solid #eeeeee'
            backgroundColor={bugsDetails.bugType === 'various' ? '#1170dd3b' : '#fff'}
            color={bugsDetails.bugType === 'various' ? '#1782e6' : '#000'}
          />
        </span>
      </div>
      <hr className='horizontal-seperator' />
      <div className='problem-details'>
        <p className='question-lable'>
          What problem(s) did you encounter? <IoIosAlert color='#666565' />
        </p>
        <textarea
          placeholder='What is the better solution? If you dont mind sharing. Your feedback is much appreaciated!'
          type='text'
          className='answer-wrapper text-area'
        />
      </div>
      <hr className='horizontal-seperator' />
    </>
  )

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
          <form>
            {answers.map((answer) => (
              <Fragment key={answer.id}>
                <div
                  className={`answer-wrapper ${
                    selectedAnswer === answer.title && 'active-answer-wrapper'
                  }`}
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
                {selectedAnswer === answer.title && answer.id === 2 ? betterSolutionQuestion : null}
                {selectedAnswer === answer.title && answer.id === 4 ? bugsThingsForm : null}
              </Fragment>
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
          <div className={`survey-actions survey-${!selectedAnswer ? 'end' : 'between'}`}>
            <div className='back-btn'>
              <Button
                name='Back'
                height='2rem'
                color='#000'
                backgroundColor='#fff'
                border='1px solid #eeeeee'
                backIcon
              />
            </div>
            <Button
              name='Cancel Membership'
              disabled={!selectedAnswer}
              backgroundColor='#FF3333'
              height='2rem'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CancellationSurvey
