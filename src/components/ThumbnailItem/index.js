// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachThumb, updateThumbnail, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = eachThumb

  const activeBtn = isActive ? '' : 'hide-image'

  const updateImage = () => {
    updateThumbnail(id)
  }

  return (
    <li className="list-card">
      <button type="button" className="btn" onClick={updateImage}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`s-image ${activeBtn}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
