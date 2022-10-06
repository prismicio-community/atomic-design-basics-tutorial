import { PrismicNextImage } from '@prismicio/next'

export const Image = ({ field, alt, layout, ...props }) => {
  return <PrismicNextImage field={field} alt={alt || ''} layout={layout} {...props} />
}
