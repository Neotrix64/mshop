import SideBar from "./SideBar";
import Tittles from "./SubComponents/Tittles";
import Categories from "./SubComponents/Categories";
import TrendingProducts from "./SubComponents/TrendingProducts";
import Footer from "./Footer";
import SectionBanner from "./SubComponents/SectionBanner";

function MiddleSection() {
  return (
    <div className="w-full min-h-screen bg-white mt-[370px] flex flex-col">
      {/* TOP OVERLAY */}
      <div className="flex justify-center">
        <div className="absolute bg-white z-20 -mt-9 h-15 w-2xl"></div>
      </div>

      <div className="middle w-full flex-grow mt-10">
        <Tittles Titulo={"Categories"} Descripcion={"Not everybody likes to stick just to one category, explore the other ones!"}/>

        <div className="flex gap-3 justify-center">
          <Categories parrafo={"SmartPhones"}/>
          <Categories parrafo={"Laptops"}/>
          <Categories parrafo={"Earpods"}/>
          <Categories parrafo={"HeadPhones"} estilo={"xl:block hidden"}/>
          <Categories parrafo={"Reacondicionado"} estilo={"xl:block hidden"}/>
          <Categories parrafo={"Tablets"} estilo={"xl:block hidden"}/>
        </div>

        <SectionBanner/>

        <Tittles Titulo={"Our Trending Products"} Descripcion={"Take a pick of our most loved products by our costumers"}/>
        <TrendingProducts/>

        <Tittles Titulo={"Our Trending Products"} Descripcion={"Take a pick of our most loved products by our costumers"} clasePersonalizada={""}/>
        <Tittles Titulo={"Our Trending Products"} Descripcion={"Take a pick of our most loved products by our costumers"} clasePersonalizada={""}/>
        <Tittles Titulo={"Our Trending Products"} Descripcion={"Take a pick of our most loved products by our costumers"} clasePersonalizada={""}/>
      </div>

      <Footer/>
    </div>
  );
}

export default MiddleSection;
