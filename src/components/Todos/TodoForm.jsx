import styles from './TodoItems.module.css';
import PrimaryInput from '../../components/UI/inputs/PrimaryInput'
import PrimaryBtn from '../../components/UI/buttons/PrimaryBtn'
const TodoForm = ({ setText , handleSubmit , ...props}) => {

    
    return (
        <div className={styles.form__todos}>
            <PrimaryInput 
                type="text" 
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <PrimaryBtn
                onClick={handleSubmit}
            >
                Add todos
            </PrimaryBtn>
        </div>
    )
}

export default TodoForm