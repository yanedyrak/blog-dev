import { Navbar } from "../widgets/Navbar";
import { Routers } from "./Routers";

function App() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <Navbar />
        <div className="flex ml-64">
          <Routers />
        </div>
      </div>
    </>
  );
}

export default App;
