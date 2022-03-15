
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductDeatils from "./containers/ProductDeatils";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          {/* <Route path="" element={<ProductComponent />} /> */}
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDeatils />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
