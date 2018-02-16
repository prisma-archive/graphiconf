import isRetina from 'is-retina'

const RetinaImage = ({ src = [], retina = true, ...props }) =>
  retina && typeof src !== 'string' ? (
    isRetina() ? (
      <img src={src[1]} {...props} />
    ) : (
      <img src={src[0]} {...props} />
    )
  ) : (
    <img src={src} {...props} />
  )

export default RetinaImage
