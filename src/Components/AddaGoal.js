import { FaPlus } from 'react-icons/fa';

const AddaGoal = ({newGoal, setNewGoal, handleSubmitAddedGoal}) => {
    return (
        <form className="addingForm" onSubmit={handleSubmitAddedGoal} >
            <label htmlFor="addGoal">Add Goal</label>
            <input
                value={newGoal}    
                onChange={e => setNewGoal(e.target.value)}
                type="text"
                id="addGoal"
                autoFocus
                required
                placeholder="Add a goal"
            />

            <button
                type='submit'
                aria-label="Add Item"
                
            >
                <FaPlus/>
            </button>
        </form>
    );
}

export default AddaGoal;