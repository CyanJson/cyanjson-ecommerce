import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

function App() {

  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route 
              path="/"
              element={ <Shop /> }
            />
            <Route 
              path="/shop"
              element={ <Shop /> }
            />
            <Route 
              path="/cart"
              element={ <Cart /> }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
