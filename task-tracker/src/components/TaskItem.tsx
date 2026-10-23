
import styles from './TaskItem.module.css'

type TaskItemProps = {
  id: string
  title: string
  done: boolean
}

function TaskItem({ id, title, done }: TaskItemProps) {
  return (
    <div
     className={done ? `${styles.card} ${styles.done}` : styles.card}>
      <span className={styles.id}>#{id}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.status}>{done ? 'Выполнено' : 'В процессе'}</p>
    </div>
  )
}

export default TaskItem