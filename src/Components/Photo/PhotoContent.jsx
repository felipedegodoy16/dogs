import styles from './PhotoContent.module.css'

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;

  return (
    <div className={styles.photo}>
      <div className={styles.img}>
        <img src={photo.src} alt={photo.title} />
        <div className={styles.details}>
          <div>
            <p><Link to={`/photo/${photo.id}`}>{photo.title}</Link></p>
            <p>{photo.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoContent