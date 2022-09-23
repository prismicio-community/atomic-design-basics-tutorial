import { PrismicLink } from '@prismicio/react'

export const Button = ({ buttonLink, buttonText }) => {
  return (
    <PrismicLink field={buttonLink} className='rounded bg-white px-5 py-3 font-medium text-slate-800'>
      {buttonText || 'Learn More'}
    </PrismicLink>
  )
}
