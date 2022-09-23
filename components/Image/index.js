// import { PrismicNextImage } from '@prismicio/next'

export const Image = ({ field, alt, layout, ...props }) => {
  return (
    // This is commented out because it breaks Storybook - need to figure out why that is
    // <PrismicNextImage
    //   field={backgroundImage}
    //   alt=''
    //   layout='fill'
    //   className='pointer-events-none select-none object-cover opacity-40'
    // />

    <img
      src={field.url}
      alt={field.alt}
      width={props.width ?? field.dimensions.width}
      height={props.height ?? field.dimensions.height}
      {...props}
    />
  )
}
