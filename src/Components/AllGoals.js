import { IconContext } from "react-icons";
import GoalList from "./GoalList";

const AllGoals = ({goals, handleCheckedCompleted, handleDeleteGoal}) => {

    return (
        <IconContext.Provider value={{ color: 'red', fontSize: '22px' }}>
            <div>
                {goals.length ? (
                    <GoalList
                        goals={goals}
                        handleCheckedCompleted={handleCheckedCompleted}
                        handleDeleteGoal={handleDeleteGoal}
                    />
                ) : (
                    <p style={{ fontSize: '26px', marginTop: '1rem', color: '#20212c', padding:'0 0.5rem'}}>
                        You do not have any goals set. Add some above.        
                    </p>
                )}
            </div>
        </IconContext.Provider>
    );
}

export default AllGoals;