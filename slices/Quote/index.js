import * as prismicH from '@prismicio/helpers'

import { Bounded } from '../../components/Bounded'
import { Testimonial } from '../../components/Testimonial'

const Quote = ({ slice }) => {
  return (
    <Bounded as='section' className='bg-white'>
      {prismicH.isFilled.richText(slice.primary.quote) && (
        <Testimonial quote={slice.primary.quote} source={slice.primary.source} />
      )}
    </Bounded>
  )
}

export default Quote
