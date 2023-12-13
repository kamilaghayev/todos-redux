import styles from './Input.module.css'

const PrimaryInput = (props) => {
  return (
    <input 
        className={styles.primary__inp}
        {...props}
    />
  )
}

export default PrimaryInput