import Courses from "./components/Courses";
import Navbar from "./components/Navbar";
import Udemy from "./components/Udemy";
import Companies from "./components/companies";

function App() {
  return (
    <>
      <Navbar />
      <Udemy />
      <Companies />
      <Courses />
    </>
  );
}

export default App;
