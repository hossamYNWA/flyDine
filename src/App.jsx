import "./App.css";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/Nav/Nav.jsx";
import Features from "./components/Features/Features.jsx";
import Meals from "./components/Meals/Meals.jsx";
import Footer from "./components/Footer/Footer.jsx";
// import Footer from "./components/Footer/Footer.jsx"
import Contact from "./components/Contact/Contact.jsx";
export default function App() {
  return (
    <main>
      <NavBar />
      <Header />
      <div className="main-content">
        <Features />
        <Meals />
        <Contact/>
      </div>
      <Footer/>
    </main>
  );
}
