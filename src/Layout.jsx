import React from "react";
import Navbar from "./components/navigation/Navbar";
import LeftNav from "./components/navigation/LeftNav";
import BottomNav from "./components/navigation/BottomNav";

function App() {
  return (
    <>
      <header className="sticky top-0">
          <Navbar />
      </header>
      <aside className="">
          {/* visible only in medium devices */}
          <LeftNav />
      </aside>
      {/* visible only in mobile devices  */}
      <BottomNav />
      <main></main>
    </>
  );
}

export default App;
