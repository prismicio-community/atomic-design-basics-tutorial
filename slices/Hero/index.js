import * as prismicH from '@prismicio/helpers'
import { PrismicNextImage } from '@prismicio/next'

import { Bounded } from '../../components/Bounded'
import { ContentArea } from '../../components/ContentArea'

const Hero = ({ slice }) => {
  console.log({ slice })
  const backgroundImage = slice.primary.backgroundImage

  return (
    <section className='relative bg-slate-900 text-white'>
      {/* {prismicH.isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=''
          layout='fill'
          className='pointer-events-none select-none object-cover opacity-40'
        />
      )} */}
      <Bounded yPadding='lg' className='relative'>
        <ContentArea {...slice.primary} />
      </Bounded>
    </section>
  )
}

export default Hero
