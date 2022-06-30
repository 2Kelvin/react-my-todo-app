import OneGoal from "./OneGoal";

const GoalList = ({ goals, handleCheckedCompleted, handleDeleteGoal }) => {
    return (
        <ul>
            {goals.map(goal => (
                <OneGoal
                    key={goal.id}
                    goal={goal}
                    handleCheckedCompleted={handleCheckedCompleted}
                    handleDeleteGoal={handleDeleteGoal}
                />
            ))}
        </ul>
    );
}

export default GoalList;