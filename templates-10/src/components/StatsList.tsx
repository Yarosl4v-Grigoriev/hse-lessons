import type { Stat } from '../types'
import StatsItem from './StatsItem'
import styles from './StatsList.module.css'

type StatsListProps = {
  stats: Stat[]
}

function StatsList({ stats }: StatsListProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.list}>
        {stats.map((stat) => (
          <StatsItem
            key={stat.id}
            id={stat.id}
            value={stat.value}
            unit={stat.unit}
            description={stat.description}
          />
        ))}
      </div>
    </div>
  )
}

export default StatsList
