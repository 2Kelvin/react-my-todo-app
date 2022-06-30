import { IoTrashOutline } from "react-icons/io5";

const OneGoal = ({ goal, handleCheckedCompleted, handleDeleteGoal }) => {
    return (
        <li className="oneGoal">
            <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => handleCheckedCompleted(goal.id)}
            />
            <label
                style={(goal.completed) ? {color:'#41414E'} : null}
            >{goal.goal}</label>
            <IoTrashOutline
                role={'button'}
                onClick={() => handleDeleteGoal(goal.id)}
                className='trashButton'
                aria-label={`Delete ${goal.goal}`}
            />
        </li>
    );
}

export default OneGoal;