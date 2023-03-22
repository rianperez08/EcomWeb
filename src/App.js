import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarBS } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { LandingPage } from "./pages/landingpage/landingpage";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";


function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <NavbarBS />
          <Routes>
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
