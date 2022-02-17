import React, { FC, forwardRef } from 'react'
import CN from 'classnames'

export interface LogoProps {
  [x: string]: any
  isInverted?: boolean
}

export const Logo: FC<LogoProps> = forwardRef(
  ({ className, isInverted, width = 180, height = 45, ...restProps }: LogoProps, ref: any) => {
    const LogoClasses = CN(`logo`, className, {})

    return (
      <div className={LogoClasses} ref={ref} {...restProps}>
        <svg
          width={width}
          height={height}
          viewBox='0 0 229 45'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_4_74)'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M14.8184 40.3846C29.6297 40.3846 41.6366 28.1929 41.6366 13.1538C41.6366 9.80296 41.0405 6.59346 39.9502 3.62869C44.8798 7.94519 48.0003 14.3333 48.0003 21.4615C48.0003 34.4614 37.6214 45 24.8185 45C19.4568 45 14.5203 43.1517 10.5932 40.0485C11.9696 40.2697 13.3808 40.3846 14.8184 40.3846Z'
              fill={!isInverted ? '#0085FF' : '#ffffff'}
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M15.4413 35.1731C25.3415 29.1003 28.5189 16.0283 22.5382 5.97576C21.2056 3.73604 19.5309 1.83519 17.6232 0.300537C22.6347 1.16468 27.2608 4.15521 30.0955 8.91978C35.2653 17.6092 32.5187 28.9088 23.9609 34.1581C20.377 36.3564 16.3423 37.145 12.4832 36.6809C13.4912 36.2644 14.4803 35.7625 15.4413 35.1731Z'
              fill={!isInverted ? '#0085FF' : '#ffffff'}
            />
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M17.8508 26.5841C18.6633 18.811 13.1161 11.8409 5.46081 11.0159C3.75523 10.832 2.08891 10.9688 0.52002 11.3783C2.98765 9.02814 6.41047 7.74101 10.0388 8.13204C16.6561 8.84521 21.4511 14.8703 20.7487 21.5894C20.4546 24.4033 19.243 26.8926 17.4478 28.7834C17.636 28.0731 17.7719 27.3387 17.8508 26.5841Z'
              fill={!isInverted ? '#0085FF' : '#ffffff'}
            />
          </g>
          <path
            d='M63.9219 10.9688V33.7188H60V10.9688H63.9219ZM77.5938 10.9688L68.375 21.9219L63.125 27.4844L62.4375 23.5938L66.1875 18.9688L72.8125 10.9688H77.5938ZM73.375 33.7188L65.8906 22.9375L68.5938 20.2656L78.0312 33.7188H73.375Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M89.375 30.3281V22.2656C89.375 21.6615 89.2656 21.1406 89.0469 20.7031C88.8281 20.2656 88.4948 19.9271 88.0469 19.6875C87.6094 19.4479 87.0573 19.3281 86.3906 19.3281C85.776 19.3281 85.2448 19.4323 84.7969 19.6406C84.349 19.849 84 20.1302 83.75 20.4844C83.5 20.8385 83.375 21.2396 83.375 21.6875H79.625C79.625 21.0208 79.7865 20.375 80.1094 19.75C80.4323 19.125 80.901 18.5677 81.5156 18.0781C82.1302 17.5885 82.8646 17.2031 83.7188 16.9219C84.5729 16.6406 85.5312 16.5 86.5938 16.5C87.8646 16.5 88.9896 16.7135 89.9688 17.1406C90.9583 17.5677 91.7344 18.2135 92.2969 19.0781C92.8698 19.9323 93.1562 21.0052 93.1562 22.2969V29.8125C93.1562 30.5833 93.2083 31.276 93.3125 31.8906C93.4271 32.4948 93.5885 33.0208 93.7969 33.4688V33.7188H89.9375C89.7604 33.3125 89.6198 32.7969 89.5156 32.1719C89.4219 31.5365 89.375 30.9219 89.375 30.3281ZM89.9219 23.4375L89.9531 25.7656H87.25C86.5521 25.7656 85.9375 25.8333 85.4062 25.9688C84.875 26.0938 84.4323 26.2812 84.0781 26.5312C83.724 26.7812 83.4583 27.0833 83.2812 27.4375C83.1042 27.7917 83.0156 28.1927 83.0156 28.6406C83.0156 29.0885 83.1198 29.5 83.3281 29.875C83.5365 30.2396 83.8385 30.526 84.2344 30.7344C84.6406 30.9427 85.1302 31.0469 85.7031 31.0469C86.474 31.0469 87.1458 30.8906 87.7188 30.5781C88.3021 30.2552 88.7604 29.8646 89.0938 29.4062C89.4271 28.9375 89.6042 28.4948 89.625 28.0781L90.8438 29.75C90.7188 30.1771 90.5052 30.6354 90.2031 31.125C89.901 31.6146 89.5052 32.0833 89.0156 32.5312C88.5365 32.9688 87.9583 33.3281 87.2812 33.6094C86.6146 33.8906 85.8438 34.0312 84.9688 34.0312C83.8646 34.0312 82.8802 33.8125 82.0156 33.375C81.151 32.9271 80.474 32.3281 79.9844 31.5781C79.4948 30.8177 79.25 29.9583 79.25 29C79.25 28.1042 79.4167 27.3125 79.75 26.625C80.0938 25.9271 80.5938 25.3438 81.25 24.875C81.9167 24.4062 82.7292 24.0521 83.6875 23.8125C84.6458 23.5625 85.7396 23.4375 86.9688 23.4375H89.9219Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M100.875 20.0312V33.7188H97.1094V16.8125H100.703L100.875 20.0312ZM106.047 16.7031L106.016 20.2031C105.786 20.1615 105.536 20.1302 105.266 20.1094C105.005 20.0885 104.745 20.0781 104.484 20.0781C103.839 20.0781 103.271 20.1719 102.781 20.3594C102.292 20.5365 101.88 20.7969 101.547 21.1406C101.224 21.474 100.974 21.8802 100.797 22.3594C100.62 22.8385 100.516 23.375 100.484 23.9688L99.625 24.0312C99.625 22.9688 99.7292 21.9844 99.9375 21.0781C100.146 20.1719 100.458 19.375 100.875 18.6875C101.302 18 101.833 17.4635 102.469 17.0781C103.115 16.6927 103.859 16.5 104.703 16.5C104.932 16.5 105.177 16.5208 105.438 16.5625C105.708 16.6042 105.911 16.651 106.047 16.7031Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M112.172 20.25V33.7188H108.406V16.8125H111.953L112.172 20.25ZM111.562 24.6406L110.281 24.625C110.281 23.4583 110.427 22.3802 110.719 21.3906C111.01 20.401 111.438 19.5417 112 18.8125C112.562 18.0729 113.26 17.5052 114.094 17.1094C114.938 16.7031 115.911 16.5 117.016 16.5C117.786 16.5 118.49 16.6146 119.125 16.8438C119.771 17.0625 120.328 17.4115 120.797 17.8906C121.276 18.3698 121.641 18.9844 121.891 19.7344C122.151 20.4844 122.281 21.3906 122.281 22.4531V33.7188H118.516V22.7812C118.516 21.9583 118.391 21.3125 118.141 20.8438C117.901 20.375 117.552 20.0417 117.094 19.8438C116.646 19.6354 116.109 19.5312 115.484 19.5312C114.776 19.5312 114.172 19.6667 113.672 19.9375C113.182 20.2083 112.781 20.5781 112.469 21.0469C112.156 21.5156 111.927 22.0573 111.781 22.6719C111.635 23.2865 111.562 23.9427 111.562 24.6406ZM122.047 23.6406L120.281 24.0312C120.281 23.0104 120.422 22.0469 120.703 21.1406C120.995 20.224 121.417 19.4219 121.969 18.7344C122.531 18.0365 123.224 17.4896 124.047 17.0938C124.87 16.6979 125.812 16.5 126.875 16.5C127.74 16.5 128.51 16.6198 129.188 16.8594C129.875 17.0885 130.458 17.4531 130.938 17.9531C131.417 18.4531 131.781 19.1042 132.031 19.9062C132.281 20.6979 132.406 21.6562 132.406 22.7812V33.7188H128.625V22.7656C128.625 21.9115 128.5 21.25 128.25 20.7812C128.01 20.3125 127.667 19.9896 127.219 19.8125C126.771 19.625 126.234 19.5312 125.609 19.5312C125.026 19.5312 124.51 19.6406 124.062 19.8594C123.625 20.0677 123.255 20.3646 122.953 20.75C122.651 21.125 122.422 21.5573 122.266 22.0469C122.12 22.5365 122.047 23.0677 122.047 23.6406Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M145.812 30.3281V22.2656C145.812 21.6615 145.703 21.1406 145.484 20.7031C145.266 20.2656 144.932 19.9271 144.484 19.6875C144.047 19.4479 143.495 19.3281 142.828 19.3281C142.214 19.3281 141.682 19.4323 141.234 19.6406C140.786 19.849 140.438 20.1302 140.188 20.4844C139.938 20.8385 139.812 21.2396 139.812 21.6875H136.062C136.062 21.0208 136.224 20.375 136.547 19.75C136.87 19.125 137.339 18.5677 137.953 18.0781C138.568 17.5885 139.302 17.2031 140.156 16.9219C141.01 16.6406 141.969 16.5 143.031 16.5C144.302 16.5 145.427 16.7135 146.406 17.1406C147.396 17.5677 148.172 18.2135 148.734 19.0781C149.307 19.9323 149.594 21.0052 149.594 22.2969V29.8125C149.594 30.5833 149.646 31.276 149.75 31.8906C149.865 32.4948 150.026 33.0208 150.234 33.4688V33.7188H146.375C146.198 33.3125 146.057 32.7969 145.953 32.1719C145.859 31.5365 145.812 30.9219 145.812 30.3281ZM146.359 23.4375L146.391 25.7656H143.688C142.99 25.7656 142.375 25.8333 141.844 25.9688C141.312 26.0938 140.87 26.2812 140.516 26.5312C140.161 26.7812 139.896 27.0833 139.719 27.4375C139.542 27.7917 139.453 28.1927 139.453 28.6406C139.453 29.0885 139.557 29.5 139.766 29.875C139.974 30.2396 140.276 30.526 140.672 30.7344C141.078 30.9427 141.568 31.0469 142.141 31.0469C142.911 31.0469 143.583 30.8906 144.156 30.5781C144.74 30.2552 145.198 29.8646 145.531 29.4062C145.865 28.9375 146.042 28.4948 146.062 28.0781L147.281 29.75C147.156 30.1771 146.943 30.6354 146.641 31.125C146.339 31.6146 145.943 32.0833 145.453 32.5312C144.974 32.9688 144.396 33.3281 143.719 33.6094C143.052 33.8906 142.281 34.0312 141.406 34.0312C140.302 34.0312 139.318 33.8125 138.453 33.375C137.589 32.9271 136.911 32.3281 136.422 31.5781C135.932 30.8177 135.688 29.9583 135.688 29C135.688 28.1042 135.854 27.3125 136.188 26.625C136.531 25.9271 137.031 25.3438 137.688 24.875C138.354 24.4062 139.167 24.0521 140.125 23.8125C141.083 23.5625 142.177 23.4375 143.406 23.4375H146.359Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M158.781 30.7344L162.922 16.8125H166.828L160.953 33.7188H158.516L158.781 30.7344ZM155.609 16.8125L159.828 30.7969L160.031 33.7188H157.594L151.688 16.8125H155.609Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M176.391 34.0312C175.141 34.0312 174.01 33.8281 173 33.4219C172 33.0052 171.146 32.4271 170.438 31.6875C169.74 30.9479 169.203 30.0781 168.828 29.0781C168.453 28.0781 168.266 27 168.266 25.8438V25.2188C168.266 23.8958 168.458 22.6979 168.844 21.625C169.229 20.5521 169.766 19.6354 170.453 18.875C171.141 18.1042 171.953 17.5156 172.891 17.1094C173.828 16.7031 174.844 16.5 175.938 16.5C177.146 16.5 178.203 16.7031 179.109 17.1094C180.016 17.5156 180.766 18.0885 181.359 18.8281C181.964 19.5573 182.411 20.4271 182.703 21.4375C183.005 22.4479 183.156 23.5625 183.156 24.7812V26.3906H170.094V23.6875H179.438V23.3906C179.417 22.7135 179.281 22.0781 179.031 21.4844C178.792 20.8906 178.422 20.4115 177.922 20.0469C177.422 19.6823 176.755 19.5 175.922 19.5C175.297 19.5 174.74 19.6354 174.25 19.9062C173.771 20.1667 173.37 20.5469 173.047 21.0469C172.724 21.5469 172.474 22.151 172.297 22.8594C172.13 23.5573 172.047 24.3438 172.047 25.2188V25.8438C172.047 26.5833 172.146 27.2708 172.344 27.9062C172.552 28.5312 172.854 29.0781 173.25 29.5469C173.646 30.0156 174.125 30.3854 174.688 30.6562C175.25 30.9167 175.891 31.0469 176.609 31.0469C177.516 31.0469 178.323 30.8646 179.031 30.5C179.74 30.1354 180.354 29.6198 180.875 28.9531L182.859 30.875C182.495 31.4062 182.021 31.9167 181.438 32.4062C180.854 32.8854 180.141 33.276 179.297 33.5781C178.464 33.8802 177.495 34.0312 176.391 34.0312Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M189.875 20.0312V33.7188H186.109V16.8125H189.703L189.875 20.0312ZM195.047 16.7031L195.016 20.2031C194.786 20.1615 194.536 20.1302 194.266 20.1094C194.005 20.0885 193.745 20.0781 193.484 20.0781C192.839 20.0781 192.271 20.1719 191.781 20.3594C191.292 20.5365 190.88 20.7969 190.547 21.1406C190.224 21.474 189.974 21.8802 189.797 22.3594C189.62 22.8385 189.516 23.375 189.484 23.9688L188.625 24.0312C188.625 22.9688 188.729 21.9844 188.938 21.0781C189.146 20.1719 189.458 19.375 189.875 18.6875C190.302 18 190.833 17.4635 191.469 17.0781C192.115 16.6927 192.859 16.5 193.703 16.5C193.932 16.5 194.177 16.5208 194.438 16.5625C194.708 16.6042 194.911 16.651 195.047 16.7031Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M206.891 29.1406C206.891 28.7656 206.797 28.4271 206.609 28.125C206.422 27.8125 206.062 27.5312 205.531 27.2812C205.01 27.0312 204.24 26.8021 203.219 26.5938C202.323 26.3958 201.5 26.1615 200.75 25.8906C200.01 25.6094 199.375 25.2708 198.844 24.875C198.312 24.4792 197.901 24.0104 197.609 23.4688C197.318 22.9271 197.172 22.3021 197.172 21.5938C197.172 20.9062 197.323 20.2552 197.625 19.6406C197.927 19.026 198.359 18.4844 198.922 18.0156C199.484 17.5469 200.167 17.1771 200.969 16.9062C201.781 16.6354 202.688 16.5 203.688 16.5C205.104 16.5 206.318 16.7396 207.328 17.2188C208.349 17.6875 209.13 18.3281 209.672 19.1406C210.214 19.9427 210.484 20.849 210.484 21.8594H206.719C206.719 21.4115 206.604 20.9948 206.375 20.6094C206.156 20.2135 205.823 19.8958 205.375 19.6562C204.927 19.4062 204.365 19.2812 203.688 19.2812C203.042 19.2812 202.505 19.3854 202.078 19.5938C201.661 19.7917 201.349 20.0521 201.141 20.375C200.943 20.6979 200.844 21.0521 200.844 21.4375C200.844 21.7188 200.896 21.974 201 22.2031C201.115 22.4219 201.302 22.625 201.562 22.8125C201.823 22.9896 202.177 23.1562 202.625 23.3125C203.083 23.4688 203.656 23.6198 204.344 23.7656C205.635 24.0365 206.745 24.3854 207.672 24.8125C208.609 25.2292 209.328 25.7708 209.828 26.4375C210.328 27.0938 210.578 27.9271 210.578 28.9375C210.578 29.6875 210.417 30.375 210.094 31C209.781 31.6146 209.323 32.151 208.719 32.6094C208.115 33.0573 207.391 33.4062 206.547 33.6562C205.714 33.9062 204.776 34.0312 203.734 34.0312C202.203 34.0312 200.906 33.7604 199.844 33.2188C198.781 32.6667 197.974 31.9635 197.422 31.1094C196.88 30.2448 196.609 29.349 196.609 28.4219H200.25C200.292 29.1198 200.484 29.6771 200.828 30.0938C201.182 30.5 201.62 30.7969 202.141 30.9844C202.672 31.1615 203.219 31.25 203.781 31.25C204.458 31.25 205.026 31.1615 205.484 30.9844C205.943 30.7969 206.292 30.5469 206.531 30.2344C206.771 29.9115 206.891 29.5469 206.891 29.1406Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <path
            d='M221.328 34.0312C220.078 34.0312 218.948 33.8281 217.938 33.4219C216.938 33.0052 216.083 32.4271 215.375 31.6875C214.677 30.9479 214.141 30.0781 213.766 29.0781C213.391 28.0781 213.203 27 213.203 25.8438V25.2188C213.203 23.8958 213.396 22.6979 213.781 21.625C214.167 20.5521 214.703 19.6354 215.391 18.875C216.078 18.1042 216.891 17.5156 217.828 17.1094C218.766 16.7031 219.781 16.5 220.875 16.5C222.083 16.5 223.141 16.7031 224.047 17.1094C224.953 17.5156 225.703 18.0885 226.297 18.8281C226.901 19.5573 227.349 20.4271 227.641 21.4375C227.943 22.4479 228.094 23.5625 228.094 24.7812V26.3906H215.031V23.6875H224.375V23.3906C224.354 22.7135 224.219 22.0781 223.969 21.4844C223.729 20.8906 223.359 20.4115 222.859 20.0469C222.359 19.6823 221.693 19.5 220.859 19.5C220.234 19.5 219.677 19.6354 219.188 19.9062C218.708 20.1667 218.307 20.5469 217.984 21.0469C217.661 21.5469 217.411 22.151 217.234 22.8594C217.068 23.5573 216.984 24.3438 216.984 25.2188V25.8438C216.984 26.5833 217.083 27.2708 217.281 27.9062C217.49 28.5312 217.792 29.0781 218.188 29.5469C218.583 30.0156 219.062 30.3854 219.625 30.6562C220.188 30.9167 220.828 31.0469 221.547 31.0469C222.453 31.0469 223.26 30.8646 223.969 30.5C224.677 30.1354 225.292 29.6198 225.812 28.9531L227.797 30.875C227.432 31.4062 226.958 31.9167 226.375 32.4062C225.792 32.8854 225.078 33.276 224.234 33.5781C223.401 33.8802 222.432 34.0312 221.328 34.0312Z'
            fill={!isInverted ? '#0D0D0D' : '#ffffff'}
          />
          <defs>
            <clipPath id='clip0_4_74'>
              <rect width='48.0002' height='45' fill='white' />
            </clipPath>
          </defs>
        </svg>
      </div>
    )
  }
)

Logo.defaultProps = {}

export default Logo
