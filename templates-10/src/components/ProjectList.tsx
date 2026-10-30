import type { Project } from '../types'
import ProjectItem from './ProjectItem'
import styles from './ProjectList.module.css'

type ProjectListProps = {
  projects: Project[]
}

function ProjectList({ projects }: ProjectListProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>НАШИ САМЫЕ БОЛЬШИЕ ПРОЕКТЫ</h2>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectItem
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectList
