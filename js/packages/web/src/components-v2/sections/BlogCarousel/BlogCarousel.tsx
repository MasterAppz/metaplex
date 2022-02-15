import React, { FC } from 'react'
import CN from 'classnames'
import { blog } from '../../../../dummy-data/blog'
import { BlockCarousel } from '../../molecules/BlockCarousel'
import { BlogCard, BlogCardProps } from '../../molecules/BlogCard'

import { useViewport } from '../../../utils/useViewport'

export interface BlogCarouselProps {
  [x: string]: any
  products?: BlogCardProps[]
}

export const BlogCarousel: FC<BlogCarouselProps> = ({
  className,
  ...restProps
}: BlogCarouselProps) => {
  const { isMobile } = useViewport()
  const BlogCarouselClasses = CN(`blog-carousel`, className)

  const slidesList = (blog || []).map(({ id, ...restProps }, index) => ({
    id: index,
    Component: () => <BlogCard key={id || index} {...restProps} />,
  }))

  return (
    <div className={BlogCarouselClasses} {...restProps}>
      <div className='container flex flex-col gap-[40px]'>
        <h2 className='text-center text-h4 text-gray-800 md:text-h3 lg:text-left'>From the blog</h2>

        <div className='flex w-full items-center px-[40px] lg:px-0'>
          <div className='relative left-[-20px] lg:left-[-40px]'>
            <button className='blog-carousel--prev cursor-pointer appearance-none text-gray-300 hover:text-gray-700 lg:ml-[-25px]'>
              <svg
                width={isMobile ? '16' : '25'}
                height={isMobile ? '28' : '44'}
                viewBox='0 0 25 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M23 42L3 22L23 2'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>

          <BlockCarousel
            id='blog-carousel'
            options={{
              slidesPerView: 3,
              autoPlay: { delay: 3000 },
              loop: false,
              breakpoints: {
                // when window width is >= 320px
                320: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                // when window width is >= 1264px
                1170: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              },
            }}
            prevButton={'.blog-carousel--prev'}
            nextButton={'.blog-carousel--next'}
            slides={slidesList}
          />

          <div className='relative right-[-20px] lg:right-[-40px]'>
            <button className='blog-carousel--next cursor-pointer appearance-none text-gray-300 hover:text-gray-700 lg:mr-[-25px]'>
              <svg
                width={isMobile ? '16' : '25'}
                height={isMobile ? '28' : '44'}
                viewBox='0 0 25 44'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2 2L22 22L2 42'
                  stroke='currentColor'
                  strokeWidth='4'
                  strokeLinecap='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCarousel
