import React from 'react'

const FilledButton = ({ btnText, textColor, background, padding, width, height, onClick, rounded, additionalClass = "" }) => {
  const baseClasses = `${textColor} ${background} ${padding} ${width} ${height} ${rounded} ${additionalClass}`

  return (
    <button className={baseClasses} onClick={onClick}>
      {btnText}
    </button>
  )
}

export default FilledButton
