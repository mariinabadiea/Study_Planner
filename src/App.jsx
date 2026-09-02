import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Contact from "./components/contact";
import NotFound from "./components/NotFound";
import TaskList from "./components/TaskList";

function Home() {
  useEffect(() => {
    document.title = "Study Planner";
  }, []);

  return (
    <div
      className="home"
      style={{
        textAlign: "center",
        padding: "50px",
      }}
    >
      <h1>Study Planner</h1>

      <p>Welcome to my Study Planner application.</p>
    </div>
  );
}

function About() {
  return (
    <div className="container py-5">
      <h1>About</h1>

      <p>
        This project is a React Study Planner application.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/tasks" element={<TaskList />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;