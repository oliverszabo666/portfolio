import Landing from "./Components/Landing/Landing";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import { useEffect, useState } from "react";

const App = () => {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTime(true);
    }, 6000);
  }, []);
  return (
    <>
      {time ? (
        <>
          <div className="app">
            <Landing />
            <Footer />
          </div>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
};

export default App;
