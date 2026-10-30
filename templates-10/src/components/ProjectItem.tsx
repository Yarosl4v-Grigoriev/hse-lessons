import styles from './ProjectItem.module.css'

type ProjectItemProps = {
  id: string
  title: string
  description: string
  imageUrl: string
}

function ProjectItem({ title, description, imageUrl }: ProjectItemProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <div className={styles.accentLine} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  )
}

export default ProjectItem
