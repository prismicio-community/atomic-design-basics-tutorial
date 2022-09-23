import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'

import { Heading } from '../../components/Heading'
import { Button } from '../../components/Button'

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
  heading1: ({ children }) => (
    <Heading as='h1' size='xl' className='mb-4 mt-12 first:mt-0 last:mb-0'>
      {children}
    </Heading>
  ),
}

export const ContentArea = ({ text, buttonLink, buttonText }) => {
  return (
    <div className='grid justify-items-center gap-8'>
      <div className='max-w-2xl text-center'>
        <PrismicRichText field={text} components={components} />
      </div>
      {prismicH.isFilled.link(buttonLink) && <Button buttonLink={buttonLink} buttonText={buttonText} />}
    </div>
  )
}
