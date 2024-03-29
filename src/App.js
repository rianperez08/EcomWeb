import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarBS } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { Confirmation } from "./pages/cart/confirmation";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { LandingPage } from "./pages/landingpage/landingpage";
import { ShopContextProvider } from "./context/shop-context";
import { Footer } from "./components/footer";
import { DbTest } from "./pages/login/dbTest";
import { EditUsers } from "./pages/editusers/editusers";
import { EditProfile } from "./pages/editprofile/editProfile"
import { PurchaseHist } from "./pages/purchasehist/purchasehist";

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
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dbTest" element={<DbTest />} />
            <Route path="/editusers" element={<EditUsers />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/purchasehist" element={<PurchaseHist />} />
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </ShopContextProvider>
      <Footer />
    </div>
  );
}

export default App;
