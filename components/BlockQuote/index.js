import * as prismicH from '@prismicio/helpers'
import { PrismicText } from '@prismicio/react'
import clsx from 'clsx'

export const BlockQuote = ({ quote, source }) => {
  return (
    <blockquote>
      <p
        className={clsx(
          'text-4xl font-medium leading-tight md:text-5xl md:leading-tight',
          !prismicH.isFilled.keyText(source) && 'text-center'
        )}
      >
        <span className='-ml-3.5 select-none text-slate-400 md:-ml-5'>&ldquo;</span>
        <PrismicText field={quote} />
        <span className='select-none text-slate-400'>&rdquo;</span>
      </p>
    </blockquote>
  )
}
