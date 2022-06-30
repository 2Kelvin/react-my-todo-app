import { SiTarget } from "react-icons/si";

const TallyGoals = ({ noOfGoals }) => {
    return (
        <div className="goalsTally">
            <SiTarget style={{color:'red', fontSize:'22px'}}/>
            <p>
                You have <span style={{color:'#E3FBAF', fontWeight:'600'}}>{noOfGoals}</span> {noOfGoals === 1 ? "goal" : "goals"} to complete
            </p>
        </div>
    );
}

export default TallyGoals;