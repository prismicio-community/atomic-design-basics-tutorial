import * as prismicH from '@prismicio/helpers'
import { PrismicText } from '@prismicio/react'

import { Bounded } from '../../components/Bounded'
import { Heading } from '../../components/Heading'
import { ImageCard } from '../../components/ImageCard'

const ImageCards = ({ slice }) => {
  return (
    <Bounded as='section' className='bg-white'>
      <div className='grid gap-12'>
        {prismicH.isFilled.richText(slice.primary.heading) && (
          <Heading className='text-center'>
            <PrismicText field={slice.primary.heading} />
          </Heading>
        )}
        <ul className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          {slice.items.map(item => (
            <ImageCard key={item.image.url} {...item} />
          ))}
        </ul>
      </div>
    </Bounded>
  )
}

export default ImageCards
