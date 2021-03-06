import * as React from 'react'

function WalletIcon (props) {
  return (
    <svg
      width='2em'
      height='2em'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21.639 14.396h-4.048a2.692 2.692 0 010-5.383h4.048M18.049 11.643h-.312'
        stroke='#718596'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        clipRule='evenodd'
        d='M7.748 3h8.643a5.248 5.248 0 015.248 5.248v7.177a5.248 5.248 0 01-5.248 5.247H7.748A5.248 5.248 0 012.5 15.425V8.248A5.248 5.248 0 017.748 3z'
        stroke='#718596'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M7.036 7.538h5.399'
        stroke='#718596'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  )
}

export default WalletIcon
