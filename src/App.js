import { useState, useEffect } from "react";
import AddaGoal from "./Components/AddaGoal";
import AllGoals from "./Components/AllGoals";
import TallyGoals from "./Components/TallyGoals";

function App() {
  const [goals, setGoals] = useState(JSON.parse(localStorage.getItem("goalsList")) || []);
  const [newGoal, setNewGoal] = useState("");
  const [dadJoke, setDadJoke] = useState("");

  // useEffect here runs one on startup & only when 'goals' change; adding/ deleting/ completed
  useEffect(() => {
    localStorage.setItem("goalsList", JSON.stringify(goals));
  }, [goals])
  
  useEffect(() => {
    const fetchDadJoke = async () => {
      const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });
      const dataDadJokes = await response.json();
      setDadJoke(dataDadJokes.joke);
    };
    fetchDadJoke();
  },[])

  const handleAddGoal = (goal) => {
    // grabbing the index of the last goal in the list, then taking its id & adding 1 to it to be the id of the new added goal
    const id = goals.length ? goals[goals.length - 1].id + 1 : 1;
    // returning a reusable goal object
    const theAddedGoal = { id, completed: false, goal };
    const theNewGoalList = [...goals, theAddedGoal];
    setGoals(theNewGoalList);
  };

  const handleSubmitAddedGoal = e => {
    e.preventDefault();
    if (!newGoal) return;
    handleAddGoal(newGoal);
    setNewGoal("");
  };

  const handleCheckedCompleted = id => {
    const myMappedGoals = goals.map(goal => goal.id === id ? { ...goal, completed: !goal.completed } : goal);
    setGoals(myMappedGoals);
  };
  const handleDeleteGoal = id => {
    const myFilteredGoals = goals.filter(goal => goal.id !== id);
    setGoals(myFilteredGoals);
  };
  
  return (
    <div className="appGridContainer">
      <div className="allGoals gridItem">
        <TallyGoals noOfGoals={goals.length} />
        
        <AddaGoal
          newGoal={newGoal}
          setNewGoal={setNewGoal}
          handleSubmitAddedGoal={handleSubmitAddedGoal}
        />
        
        <AllGoals
          goals={goals}
          handleCheckedCompleted={handleCheckedCompleted}
          handleDeleteGoal={handleDeleteGoal}
        />
      </div>

      <div className="rightTileContainer">
        <div className="rightTop gridItem">
          <h3>DAD JOKE OF THE DAY</h3>
          <p>{dadJoke}</p>
        </div>

        <div className="rightBottom gridItem">Feature 2</div>
     </div>
    </div>
  );
}

export default App;
