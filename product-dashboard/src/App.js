import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Overview } from "./components/Overview";
import { Customer} from "./pages/Customer";
import { Product } from "./pages/Product";
import {  Promote } from "./pages/Promote";
import { History } from "./pages/History";
import { Help } from "./pages/Help";
import Layout from "./components/shared/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index={true} element={<Overview />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/product" element={<Product />} />
          <Route path="/promote" element={<Promote />} />
          <Route path="/history" element={<History />} />
          <Route path="/helps" element={<Help />} />
        </Route>
        <Route path="/login" element={<div>This is the log in page</div>} />
      </Routes>
    </>
  );
}

export default App;
