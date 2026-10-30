import styles from './CtaBanner.module.css'

function CtaBanner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.textBlock}>
          <h2 className={styles.title}>САМЫЕ УМНЫЕ ПРОЕКТЫ</h2>
          <p className={styles.subtitle}>
            РЕАЛИЗУЕМ САМЫЕ СМЕЛЫЕ РЕШЕНИЯ В РОССИИ!
          </p>
        </div>
        <button type="button" className={styles.button}>
          ВАШ ЗАПРОС
        </button>
      </div>
    </section>
  )
}

export default CtaBanner
