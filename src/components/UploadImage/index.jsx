import { IoAdd } from 'react-icons/io5'
import { useRef, useState } from 'react'

import { Button } from 'components'
import colors from 'config/theme'

import 'components/UploadImage/styles.scss'

const UploadImage = ({
  title, placeholder, image, setImage,
}) => {
  const inputRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const uploadImage = () => {
    inputRef.current.click()
  }

  const handleImage = (files) => {
    setLoading(true)
    const file = files[0]
    if (file?.size > 2000000) {
      alert('size should be less then 2mb')
    } else if (!file?.type.includes('image')) {
      alert('type not valid')
    } else {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setImage([reader.result])
      }
    }
    setLoading(false)
  }

  const imageBox = image ? (
    <img src={image} className='image' alt='product' />
  ) : (
    <IoAdd className='add-icon' />
  )

  return (
    <div data-testid='upload-image' className='upload-container'>
      <p className='heading'>
        {title} <span className='heading-option'>(Optional)</span>
      </p>
      <div className='upload-wrapepr'>
        <input
          ref={inputRef}
          onChange={(e) => handleImage(e.target.files)}
          className='input'
          type='file'
          hidden
          placeholder={placeholder}
        />
        <button onClick={uploadImage} type='button' className='image-box'>
          {loading ? <div className='loader' /> : imageBox}
        </button>
        {image && (
          <>
            <Button
              onSubmit={uploadImage}
              name='Edit'
              color={colors.primary}
              backgroundColor={colors.white}
              fontWeight='500'
            />
            <Button
              onSubmit={() => setImage(null)}
              name='Remove'
              color={colors.error}
              backgroundColor={colors.white}
              fontWeight='500'
            />
          </>
        )}
      </div>
      <span className='upload-img-description'>
        Upload a square image that doesn&apos;t exceed 2MB
      </span>
    </div>
  )
}

export default UploadImage
