import * as prismicH from '@prismicio/helpers'

import { Bounded } from '../../components/Bounded'
import { ContentArea } from '../../components/ContentArea'
import { Image } from '../../components/Image'

const Hero = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage

  return (
    <section className='relative overflow-hidden bg-slate-900 text-white'>
      {prismicH.isFilled.image(backgroundImage) && (
        <Image field={backgroundImage} alt='' layout='fill' className='pointer-events-none object-cover opacity-40' />
      )}
      <Bounded yPadding='lg' className='relative'>
        <ContentArea {...slice.primary} />
      </Bounded>
    </section>
  )
}

export default Hero
