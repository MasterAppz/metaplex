import React, { FC, useState } from 'react'
import CN from 'classnames'
import { Parallax } from 'react-parallax'
import { Avatar } from '../../atoms/Avatar'
import VerifiedBadge from '../../icons/VerifiedBadge'
import IdentityIcon from '../../icons/Identity'
import { StatsCard } from '../../molecules/StatsCard'

export interface CollectionHeaderProps {
  [x: string]: any
}

export const CollectionHeader: FC<CollectionHeaderProps> = ({
  className,
  ...restProps
}: CollectionHeaderProps) => {
  const CollectionHeaderClasses = CN(`collection-header bg-white`, className)
  const [isFavorite, setIsFavorite] = useState(true)
  const [isShowFullBio, setIsShowFullBio] = useState(false)

  return (
    <div className={CollectionHeaderClasses} {...restProps}>
      <Parallax
        blur={0}
        bgImage={'/img/collection-banner.png'}
        bgImageAlt='Karmaverse'
        strength={200}
        bgClassName='!object-cover !object-center !h-[200px] lg:!h-[300px] !w-full'>
        <div className='flex h-[180px] w-full lg:h-[280px]' />
      </Parallax>

      <div className='container relative z-10 mt-[-75px]'>
        <div className='flex w-full justify-center lg:justify-start'>
          <Avatar
            image='https://www.arweave.net/wIzXN_oLlTdFkooye9xq383psyOgak2s2Q_43sThVps?ext=png'
            size='lg'
            hasBorder
          />
        </div>

        <div className='flex w-full flex-col pt-[16px] lg:flex-row'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='mb-[4px] text-h2 font-600'>Belugies</h1>

            <div className='flex flex-col lg:flex-row w-full items-center gap-[16px]'>
              <span className='text-B-400'>Created by 0x...2ZUGLUDLEX</span>
              <div className='flex items-center gap-[16px]'>
                <VerifiedBadge width={24} height={24} />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className='inline-flex appearance-none items-center text-[24px]'>
                  {!isFavorite ? (
                    <i className='ri-heart-line' />
                  ) : (
                    <i className='ri-heart-fill text-red-400' />
                  )}
                </button>
                <IdentityIcon />
              </div>
            </div>

            <div className='flex text-center lg:text-left px-[32px] lg:px-0 w-full lg:max-w-[370px] pt-[12px] text-gray-700'>
              {!isShowFullBio ? (
                <p>
                  Belugies is a generative NFT collection artistically illustrated by a 14 year old
                  artist. Since its inception October 16th, 2021 Belugies...
                  <a
                    onClick={() => setIsShowFullBio(!isShowFullBio)}
                    className='cursor-pointer pl-[4px] text-B-400'>
                    Read More
                  </a>
                </p>
              ) : (
                <p>
                  Belugies is a generative NFT collection artistically illustrated by a 14 year old
                  artist. Since its inception October 16th, 2021 Belugies has donated $200,000.00 to
                  multiple nonprofit organizations including Beluga Whale Alliance, Ocean Defenders
                  Alliance, and Sunshine Kids children with cancer foundation. Created by a young
                  artist and her family members Belugies aims to build a global community based
                  around giving back and doing good for the world. #UgieUgie
                  <a
                    onClick={() => setIsShowFullBio(!isShowFullBio)}
                    className='cursor-pointer pl-[4px] text-B-400'>
                    Show Less
                  </a>
                </p>
              )}
            </div>

            <div className='flex items-center gap-[16px] pt-[16px] text-[24px]'>
              <button className='appearance-none text-gray-700 transition-all hover:text-B-400'>
                <i className='ri-discord-fill' />
              </button>

              <button className='appearance-none text-gray-700 transition-all hover:text-B-400'>
                <i className='ri-twitter-fill' />
              </button>

              <button className='appearance-none text-gray-700 transition-all hover:text-B-400'>
                <i className='ri-global-line' />
              </button>
            </div>
          </div>

          <div className='flex w-full pt-[32px] lg:ml-auto lg:w-[unset] lg:pt-[62px]'>
            <div className='block w-full'>
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionHeader
