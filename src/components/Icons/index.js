import React from 'react'
import * as CryptoIcons from './crypto'

function CryptoIcon({ name = 'GENERIC', size, ...props }) {
  const CryptoIconElement = CryptoIcons[name] || CryptoIcons.GENERIC
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <CryptoIconElement width={size} height={size} {...props} />
}

export default React.memo(CryptoIcon)
