import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'

const Select = ({ bugsDetails, selectProducts, handleProduct }) => {
  const [toggleSelect, setToggleSelect] = useState(false)

  return (
    <>
      <button
        type='button'
        onClick={() => setToggleSelect(!toggleSelect)}
        className={`answer-wrapper drop-down-select ${toggleSelect && 'active'}`}
      >
        <p className='heading'>
          {selectProducts > 0 ? `${selectProducts} products selected` : 'Select product(s)'}
        </p>
        <BiChevronDown />
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
    </>
  )
}
export default Select
