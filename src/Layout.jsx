import React from "react";
import Navbar from "./components/header/Navbar";
import LeftNav from "./components/aside/LeftNav";

function App() {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>
      <aside className="">
        <LeftNav />
      </aside>
      <main></main>
    </>
  );
}

export default App;
