import * as prismicH from '@prismicio/helpers'
import { PrismicLink, PrismicRichText } from '@prismicio/react'
import { ConditionalWrap } from '../ConditionalWrap'
import { Image } from '../Image'

export const ImageCard = ({ image, text, buttonLink, buttonText }) => {
  return (
    <li className='grid gap-8'>
      {prismicH.isFilled.image(image) && (
        <div className='bg-gray-100'>
          <ConditionalWrap
            condition={prismicH.isFilled.link(buttonLink)}
            wrap={({ children }) => (
              <PrismicLink field={buttonLink} tabIndex='-1'>
                {children}
              </PrismicLink>
            )}
          >
            <Image field={image} layout='responsive' />
          </ConditionalWrap>
        </div>
      )}
      <div className='leading-relaxed'>
        <PrismicRichText field={text} />
      </div>
      {prismicH.isFilled.link(buttonLink) && (
        <div>
          <PrismicLink field={buttonLink} className='font-semibold'>
            {buttonText || 'More Info'}
          </PrismicLink>
        </div>
      )}
    </li>
  )
}
