import styles from './Buttons.module.css'

const PrimaryBtn = ({children, ...props}) => {
    return (
        <button
            className={styles.primary__btn}
            {...props}
        >
            {children}
        </button>
    )
}

export default PrimaryBtn