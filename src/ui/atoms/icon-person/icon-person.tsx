import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const IconPerson = () => {
  return (
    <Svg width={14} height={14} viewBox="0 0 14 14" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 0a3.499 3.499 0 00-3.5 3.5C3.5 5.434 5.066 7 7 7s3.5-1.566 3.5-3.5S8.934 0 7 0zm1.838 3.5a1.837 1.837 0 10-3.675 0 1.837 1.837 0 003.675 0zm3.5 7.875c0-.56-2.74-1.838-5.338-1.838-2.599 0-5.337 1.278-5.337 1.838v.963h10.675v-.963zM0 11.375c0-2.328 4.664-3.5 7-3.5 2.336 0 7 1.172 7 3.5V14H0v-2.625z"
        fill="#7A7A7A"
      />
    </Svg>
  )
}
