import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Header from "../layout/header";
import Footer from "../layout/footer";

const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Router;
