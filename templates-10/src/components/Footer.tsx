import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <span>© 2019 Строительная компания</span>
        <span>Разработано лучшей студией</span>
      </div>
    </footer>
  )
}

export default Footer
