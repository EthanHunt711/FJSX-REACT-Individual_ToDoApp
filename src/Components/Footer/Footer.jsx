import styles from './footer.module.css'

const Footer = () => {
  const today = new Date();

  return (
    <footer className={styles.footer}>
      <p className={styles.copyRight}>
        Copyright &copy; {today.getFullYear()}            
      </p>
    </footer>
  )
}

export default Footer