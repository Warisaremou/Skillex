import NavBar from "./NavBar/NavBar";
import { useState } from "react";

function App() {

  const [openMenu, setIsOpen] = useState(false);

  return (
    <div className="container font-poppins">
      <NavBar openMenu={openMenu} setIsOpen={setIsOpen} />
    </div>
  );
}

export default App;
