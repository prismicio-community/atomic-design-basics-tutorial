import * as prismicH from '@prismicio/helpers'
import clsx from 'clsx'

import { Image } from '../../components/Image'
import { Bounded } from '../../components/Bounded'

const ImageSlice = ({ slice, index }) => {
  const image = slice.primary.image

  return (
    <Bounded as='section' className={clsx('bg-white', index === 0 && 'pt-0 md:pt-0')}>
      {prismicH.isFilled.image(image) && (
        <div className='bg-gray-100'>
          <Image field={image} alt='' layout='responsive' />
        </div>
      )}
    </Bounded>
  )
}

export default ImageSlice
