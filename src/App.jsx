import { Outlet } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='font-raleway'>
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
