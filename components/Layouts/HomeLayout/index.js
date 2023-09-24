import { useEffect } from "react";
import AOS from "aos";
import TopNavigation from "../../NewMockupComponents/TopNavigation";
import TopHeader from "../../NewMockupComponents/TopHeader";
import Footer from "../../NewMockupComponents/Footer";

const HomeLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <>
      <div className="relative lg:fixed w-full top-0 bg-white z-20">
        <TopNavigation></TopNavigation>
        <TopHeader></TopHeader>
      </div>
      <div className="lg:mb-[270px]"></div>
      {children}
      <Footer></Footer>
    </>
  );
};
export default HomeLayout;
