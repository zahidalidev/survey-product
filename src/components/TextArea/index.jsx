const TextArea = ({ placeholder }) => (
  <>
    <textarea
      placeholder={placeholder}
      type='text'
      className='answer-wrapper text-area'
    />
    <hr className='horizontal-seperator' />
  </>
)

export default TextArea
