import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Appbar from "./components/AppBar/Appbar";
// import Advertise from "./components/Advertise/Advertise";
import TermsAndConditions from "./components/Trems&cond/TermsAndConditions"
// import Advertiseimage from "./components/Advertise/AdvetriseImage";
import StoreRegister from "./components/Advertise/Store/StoreRegister";
import StoreSpecialization from "./components/Advertise/Store/StoreSpecialzation";
import Storecategory from "./components/Advertise/Store/Storecategory";
import FileUpload from "./components/Advertise/Store/FileUpload";
import { Toaster } from 'react-hot-toast';
import StoreProduct from "./components/Advertise/Store/StoreProduct";
import StoreProductImage from "./components/Advertise/Store/StoreProductImage";
import { Storeprofile } from "./components/Advertise/Store/Storeprofile";
function App() {
  return (
    <>
      <Router>
        <Toaster position="top-center" reverseOrder= {false}/>
          <Appbar/>
            <Routes>
            <Route index path="/" element={<Home />}/>
            {/* <Route  path="/Advertise" element={<Advertise/>}/> */}
            <Route  path="/StoreRegister" element={<StoreRegister/>}/>
            <Route  path="/StoreProduct" element={<StoreProduct/>}/>
            <Route  path="/Storespecialization" element={<StoreSpecialization/>}/>
            <Route path="/Storecategory" element={<Storecategory/>}/> 
            <Route path="/FileUpload" element={<FileUpload/>}/> 
            <Route path="/store-product-image" element={<StoreProductImage/>}/>
            <Route path="/StoreProducts" element={<FileUpload/>}/> 
            <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
            <Route path="/store-profile" element={<Storeprofile/>}/>
            </Routes>
      </Router>
    </>
  );
}

export default App;
