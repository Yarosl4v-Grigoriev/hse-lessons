import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          РЕАЛИЗУЕМ КРУПНЕЙШИЕ<br />ПРОЕКТЫ В МИРЕ
        </h1>
        <p className={styles.subtitle}>
          СТАДИОНЫ, ГАЗОПРОВОДЫ, МОСТЫ, ДАМБЫ
        </p>
      </div>
    </header>
  )
}

export default Header
