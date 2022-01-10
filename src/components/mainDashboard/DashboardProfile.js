import classes from "./DashboardProfile.module.css";
import profileImage from "../../images/image-jeremy.png";
import { useContext } from "react";
import TimePeriodsContext from "../../store/TimePeriodsContext";

const DashboardProfile = (props) => {
  const timePeriodsCtx = useContext(TimePeriodsContext);

  const onChangePeriodHandler = (e) => {
    timePeriodsCtx.changeTimePeriod(e.target.id);
  };

  return (
    <div className={props.className}>
      <div className={classes.profile}>
        <div className={classes.profileImage}>
          <img src={profileImage} alt="profile" />
        </div>
        <section className={classes.profileText}>
          <span>Raport for</span>
          <span className={classes.profileName}>Jeremy Robson</span>
        </section>
      </div>

      <ul className={classes.timePeriod} onClick={onChangePeriodHandler}>
        <li id="daily">Daily</li>
        <li id="weekly">Weekly</li>
        <li id="monthly">Monthly</li>
      </ul>
    </div>
  );
};

export default DashboardProfile;
