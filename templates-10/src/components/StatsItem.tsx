import styles from './StatsItem.module.css'

type StatsItemProps = {
  id: string
  value: string
  unit: string
  description: string
}

function StatsItem({ value, unit, description }: StatsItemProps) {
  return (
    <div className={styles.item}>
      <span className={styles.value}>{value}</span>
      <span className={styles.unit}>{unit}</span>
      <span className={styles.description}>{description}</span>
    </div>
  )
}

export default StatsItem
