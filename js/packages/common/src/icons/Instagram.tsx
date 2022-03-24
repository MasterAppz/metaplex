import React from 'react'

export const Instagram = ({ size = 28, color = 'currentColor', ...restProps }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 32'
      width={size}
      height={size}
      {...restProps}>
      <path
        d='M16.0001 2.66675C19.6227 2.66675 20.0747 2.68008 21.4961 2.74675C22.9161 2.81341 23.8827 3.03608 24.7334 3.36675C25.6134 3.70541 26.3547 4.16408 27.0961 4.90408C27.7741 5.57061 28.2987 6.37687 28.6334 7.26675C28.9627 8.11608 29.1868 9.08408 29.2534 10.5041C29.3161 11.9254 29.3334 12.3774 29.3334 16.0001C29.3334 19.6227 29.3201 20.0747 29.2534 21.4961C29.1868 22.9161 28.9627 23.8827 28.6334 24.7334C28.2997 25.6238 27.7749 26.4302 27.0961 27.0961C26.4294 27.7738 25.6232 28.2984 24.7334 28.6334C23.8841 28.9627 22.9161 29.1868 21.4961 29.2534C20.0747 29.3161 19.6227 29.3334 16.0001 29.3334C12.3774 29.3334 11.9254 29.3201 10.5041 29.2534C9.08408 29.1868 8.11741 28.9627 7.26675 28.6334C6.37652 28.2994 5.57012 27.7747 4.90408 27.0961C4.22596 26.4297 3.70132 25.6234 3.36675 24.7334C3.03608 23.8841 2.81341 22.9161 2.74675 21.4961C2.68408 20.0747 2.66675 19.6227 2.66675 16.0001C2.66675 12.3774 2.68008 11.9254 2.74675 10.5041C2.81341 9.08275 3.03608 8.11741 3.36675 7.26675C3.7004 6.37632 4.22515 5.56984 4.90408 4.90408C5.57031 4.22572 6.37665 3.70105 7.26675 3.36675C8.11741 3.03608 9.08275 2.81341 10.5041 2.74675C11.9254 2.68408 12.3774 2.66675 16.0001 2.66675ZM16.0001 9.33342C14.232 9.33342 12.5363 10.0358 11.286 11.286C10.0358 12.5363 9.33342 14.232 9.33342 16.0001C9.33342 17.7682 10.0358 19.4639 11.286 20.7141C12.5363 21.9644 14.232 22.6667 16.0001 22.6667C17.7682 22.6667 19.4639 21.9644 20.7141 20.7141C21.9644 19.4639 22.6667 17.7682 22.6667 16.0001C22.6667 14.232 21.9644 12.5363 20.7141 11.286C19.4639 10.0358 17.7682 9.33342 16.0001 9.33342ZM24.6667 9.00008C24.6667 8.55805 24.4912 8.13413 24.1786 7.82157C23.866 7.50901 23.4421 7.33342 23.0001 7.33342C22.5581 7.33342 22.1341 7.50901 21.8216 7.82157C21.509 8.13413 21.3334 8.55805 21.3334 9.00008C21.3334 9.44211 21.509 9.86603 21.8216 10.1786C22.1341 10.4912 22.5581 10.6667 23.0001 10.6667C23.4421 10.6667 23.866 10.4912 24.1786 10.1786C24.4912 9.86603 24.6667 9.44211 24.6667 9.00008ZM16.0001 12.0001C17.0609 12.0001 18.0784 12.4215 18.8285 13.1717C19.5787 13.9218 20.0001 14.9392 20.0001 16.0001C20.0001 17.0609 19.5787 18.0784 18.8285 18.8285C18.0784 19.5787 17.0609 20.0001 16.0001 20.0001C14.9392 20.0001 13.9218 19.5787 13.1717 18.8285C12.4215 18.0784 12.0001 17.0609 12.0001 16.0001C12.0001 14.9392 12.4215 13.9218 13.1717 13.1717C13.9218 12.4215 14.9392 12.0001 16.0001 12.0001Z'
        fill={color}
      />
    </svg>
  )
}

export default Instagram