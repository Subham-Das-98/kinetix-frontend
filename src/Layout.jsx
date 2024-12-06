import React from "react";
import Navbar from "./components/navigation/Navbar";
import LeftNav from "./components/navigation/LeftNav";

function App() {
  return (
    <>
      <header className="sticky top-0">
        <nav>
          <Navbar />
        </nav>
      </header>
      <aside className="">
        <nav>
          <LeftNav />
        </nav>
      </aside>
      <main></main>
    </>
  );
}

export default App;
