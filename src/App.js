import { Outlet } from "react-router-dom";
import NavbarComponenet from "./components/NavbarComponenet";
import IndexPage from "./pages/IndexPage";



function App() {
  return (
 <div>
      <NavbarComponenet/>
      
      <Outlet/>
  </div>
  );
}

export default App;
