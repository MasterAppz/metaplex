import React from 'react'

export const Telegram = ({ size = 28, color = 'currentColor', ...restProps }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      width={size}
      height={size}
      {...restProps}>
      <path fill='none' d='M0 0h24v24H0z' />
      <path
        d='M16.0001 29.3334C8.63608 29.3334 2.66675 23.3641 2.66675 16.0001C2.66675 8.63608 8.63608 2.66675 16.0001 2.66675C23.3641 2.66675 29.3334 8.63608 29.3334 16.0001C29.3334 23.3641 23.3641 29.3334 16.0001 29.3334ZM11.8534 17.5601L11.8707 17.5507L13.0307 21.3774C13.1801 21.7921 13.3854 21.8667 13.6347 21.8321C13.8854 21.7987 14.0174 21.6641 14.1814 21.5067L15.7654 19.9761L19.1654 22.4934C19.7867 22.8361 20.2334 22.6587 20.3881 21.9174L22.5974 11.4881C22.8414 10.5174 22.4147 10.1281 21.6614 10.4374L8.68408 15.4507C7.79875 15.8054 7.80408 16.3014 8.52408 16.5214L11.8534 17.5614V17.5601Z'
        fill={color}
      />
    </svg>
  )
}

export default Telegram