import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </div>
  );
};

export default App;