import ReactRetinaImage from 'react-retina-image'

const RetinaImage = ({ src, checkIfRetinaImgExists, ...props }) => {
  if (process.browser) {
    return (
      <ReactRetinaImage
        src={src}
        checkIfRetinaImgExists={checkIfRetinaImgExists}
        {...props}
      />
    )
  } else {
    return <img src={src} {...props} />
  }
}

export default RetinaImage
