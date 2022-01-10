import classes from "./Tracker.module.css";

const Tracker = (props) => {
  const { timePeriod, timeframes, title, image } = props;

  const choosenTimePeriod = timePeriod;
  let currentTimeFrame = timeframes.weekly.current;
  let previousTimeFrame = timeframes.weekly.previous;

  if (choosenTimePeriod === "monthly") {
    currentTimeFrame = timeframes.monthly.current;
    previousTimeFrame = timeframes.monthly.previous;
  }
  if (choosenTimePeriod === "daily") {
    currentTimeFrame = timeframes.daily.current;
    previousTimeFrame = timeframes.daily.previous;
  }
  if (choosenTimePeriod === "weekly") {
    currentTimeFrame = timeframes.weekly.current;
    previousTimeFrame = timeframes.weekly.previous;
  }

  console.log(image.icon.props.children.props);
  return (
    <div className={classes.trackerItem}>
      <section
        className={classes.trackerOverlay}
        style={{
          backgroundColor: image.color,
          background: image.icon.props.children.props,
        }}
      ></section>
      <section className={classes.trackerInfo}>
        <div className={classes.titleInfo}>
          <span>{title}</span>
          <span className={classes.menu}>...</span>
        </div>
        <div className={classes.hoursDetails}>
          <span className={classes.mainHours}>{currentTimeFrame}hrs</span>
          <span className={classes.lastHours}>
            Last week - {previousTimeFrame}hrs
          </span>
        </div>
      </section>
    </div>
  );
};

export default Tracker;
