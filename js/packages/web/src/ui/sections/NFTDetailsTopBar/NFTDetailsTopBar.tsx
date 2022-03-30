import React, { FC } from 'react'
import CN from 'classnames'
import { Dropdown, DropDownBody, DropDownToggle, DropDownMenuItem, Button } from '@oyster/common'

export interface NFTDetailsTopBarProps {
  [x: string]: any
}

export const NFTDetailsTopBar: FC<NFTDetailsTopBarProps> = ({
  className,
  ...restProps
}: NFTDetailsTopBarProps) => {
  const NFTDetailsTopBarClasses = CN(`nft-details-top-bar w-full`, className)

  return (
    <div className={NFTDetailsTopBarClasses} {...restProps}>
      <div className='container flex justify-between'>
        <div className='flex'>
          <Button
            appearance='ghost'
            view='outline'
            isRounded={false}
            iconBefore={<i className='ri-arrow-left-s-line text-[20px] font-400' />}>
            Back to collection
          </Button>
        </div>

        <div className='flex gap-[8px]'>
          <Button
            appearance='ghost'
            view='outline'
            isRounded={false}
            iconBefore={<i className='ri-arrow-left-s-line text-[20px] font-400' />}>
            Previous NFT
          </Button>
          <Button
            appearance='ghost'
            view='outline'
            isRounded={false}
            iconAfter={<i className='ri-arrow-right-s-line text-[20px] font-400' />}>
            Next NFT
          </Button>
          <Button
            appearance='ghost'
            view='outline'
            isRounded={false}
            iconAfter={<i className='ri-arrow-right-up-line text-[20px] font-400' />}>
            Explore on Solana
          </Button>

          <Dropdown>
            {({ isOpen, setIsOpen, setInnerValue }: any) => {
              const onSelectOption = (value: string) => {
                setInnerValue(value)
                setIsOpen(false)
              }

              const options = [
                { label: 'Telegram', value: 'Telegram' },
                { label: 'Twitter', value: 'Twitter' },
                { label: 'Email', value: 'Email' },
                { label: 'Copy link', value: 'Copy link' },
              ]

              return (
                <>
                  <DropDownToggle onClick={() => setIsOpen(!isOpen)}>
                    <Button
                      appearance='ghost'
                      view='outline'
                      isRounded={false}
                      iconAfter={<i className='ri-share-forward-fill text-[20px] font-400' />}
                    />
                  </DropDownToggle>

                  {isOpen && (
                    <DropDownBody align='right' className='w-[200px]'>
                      {options.map((option: any, index: number) => {
                        const { label, value } = option

                        return (
                          <DropDownMenuItem
                            key={index}
                            onClick={() => onSelectOption(value)}
                            {...option}>
                            {label}
                          </DropDownMenuItem>
                        )
                      })}
                    </DropDownBody>
                  )}
                </>
              )
            }}
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

NFTDetailsTopBar.defaultProps = {}

export default NFTDetailsTopBar
