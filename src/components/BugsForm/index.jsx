import { IoIosAlert } from 'react-icons/io'

import { Button, MultiSelect, TextArea } from 'components'
import colors from 'config/theme'

import 'components/BugsForm/styles.scss'

const BugsForm = ({
  selectProducts, bugsDetails, handleProblemType, handleProduct,
}) => (
  <form data-testid='bugs-form'>
    <div>
      <p className='question-lable product-issue'>
        Which product(s) did you have an issue with? <IoIosAlert color={colors.grey} />
      </p>
      <MultiSelect
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
          border={`0.5px solid ${colors.lightGrey2}`}
          backgroundColor={bugsDetails?.bugType === 'major' ? colors.primaryLight : colors.white}
          color={bugsDetails?.bugType === 'major' ? colors.primary : colors.black}
        />
        <Button
          onSubmit={() => handleProblemType('various')}
          name='Various things'
          borderRadius='0px'
          border={`0.5px solid ${colors.lightGrey2}`}
          backgroundColor={bugsDetails?.bugType === 'various' ? colors.primaryLight : colors.white}
          color={bugsDetails?.bugType === 'various' ? colors.primary : colors.black}
        />
      </span>
    </div>
    <hr className='horizontal-seperator' />
    <div className='problem-details'>
      <p className='question-lable'>
        What problem(s) did you encounter? <IoIosAlert color={colors.grey} />
      </p>
      <TextArea />
    </div>
  </form>
)

export default BugsForm
