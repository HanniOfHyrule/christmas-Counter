import "./ChallengeCalender.scss";
import { Params, useParams } from "react-router-dom";

const ChallengeCalender = () => {
  console.log(useParams());

  return (
    <div className="challenge_calender_wrapper">
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default ChallengeCalender;
