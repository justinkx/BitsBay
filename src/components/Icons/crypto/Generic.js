import * as React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'
import { memo } from 'react'

const SvgGeneric = ({ props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Svg height={32} viewBox='0 0 32 32' width={props?.width || 25} {...props}>
    <G fill='none' fillRule='evenodd'>
      <Circle cx={16} cy={16} fill='#efb914' fillRule='nonzero' r={16} />
      <Path
        d='M21.002 9.855A7.947 7.947 0 0124 15.278l-2.847-.708a5.357 5.357 0 00-3.86-3.667c-2.866-.713-5.76.991-6.465 3.806s1.05 5.675 3.917 6.388a5.373 5.373 0 005.134-1.43l2.847.707a7.974 7.974 0 01-5.2 3.385L16.716 27l-2.596-.645.644-2.575a8.28 8.28 0 01-1.298-.323l-.643 2.575-2.596-.646.81-3.241c-2.378-1.875-3.575-4.996-2.804-8.081s3.297-5.281 6.28-5.823L15.323 5l2.596.645-.644 2.575a8.28 8.28 0 011.298.323l.643-2.575 2.596.646z'
        fill='#fff'
      />
    </G>
  </Svg>
)

const Memo = memo(SvgGeneric)
export default Memo
