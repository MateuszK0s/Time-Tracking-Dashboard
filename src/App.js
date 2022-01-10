import MainDashboard from "./components/mainDashboard/MainDashboard";
import TimePeriodsProvider from "./store/TimePeriodsProvider";

const App = () => {
  return (
    <TimePeriodsProvider>
      <MainDashboard />
    </TimePeriodsProvider>
  );
};

export default App;
