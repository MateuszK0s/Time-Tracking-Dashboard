import DashboardProfile from "./DashboardProfile";
import Tracker from "./Tracker";
import classes from "./MainDashboard.module.css";
import { useContext } from "react";
import TimePeriodsContext from "../../store/TimePeriodsContext";

const MainDashboard = () => {
  const timePeriodsCtx = useContext(TimePeriodsContext);
  const dashboardData = timePeriodsCtx.timeData.map((tracker, id) => {
    return (
      <Tracker
        key={id}
        title={tracker.title}
        timeframes={tracker.timeframes}
        timePeriod={timePeriodsCtx.timePeriod}
        image={tracker.image}
      ></Tracker>
    );
  });

  return (
    <div className={classes.wrapper}>
      <DashboardProfile className={classes.profileSection} />
      {dashboardData}
    </div>
  );
};

export default MainDashboard;
