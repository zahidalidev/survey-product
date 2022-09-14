import { IoIosAlert } from 'react-icons/io'

import { Button, Select, TextArea } from 'components'

import 'components/BugsForm/styles.scss'

const BugsForm = ({
  selectProducts, bugsDetails, handleProblemType, handleProduct,
}) => (
  <>
    <div>
      <p className='question-lable product-issue'>
        Which product(s) did you have an issue with? <IoIosAlert color='#666565' />
      </p>
      <Select
        bugsDetails={bugsDetails}
        selectProducts={selectProducts}
        handleProduct={handleProduct}
      />
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
      <TextArea />
    </div>
  </>
)

export default BugsForm
