import * as prismicH from '@prismicio/helpers'

import { BlockQuote } from '../BlockQuote'

export const Testimonial = ({ quote, source }) => {
  return (
    <figure className='grid gap-6'>
      <BlockQuote quote={quote} source={source} />
      {prismicH.isFilled.keyText(source) && <figcaption className='text-right'>&mdash; {source}</figcaption>}
    </figure>
  )
}
