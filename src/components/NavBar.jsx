function NavBar() {
    return (
      <div className="w-full h-28 bg-[#292828] text-white fixed top-0 z-30">
        <div className="upper-part flex justify-around gap-64 mb-3">
          <p className="text-white text-sm">
            Season Sale 20% off discount on laptops
          </p>
          <div className="options flex gap-3">
            <p>Eng</p>
            <p>USD</p>
          </div>
        </div>
        <div className="mid-part flex justify-between relative font-semibold mb-4">
          <input type="text" placeholder="Search-Product" className=""/>
          <h3 className="absolute left-1/2 transform -translate-x-1/2">MShop</h3>
          <div className="flex">
            <img src="" alt="user-Icon" />
            <img src="" alt="Wish-list" />
            <img src="" alt="cart" />
          </div>
        </div>
  
        {/* Asegúrate de que el <hr> sea visible */}
        <div className="low-part flex justify-center">
  
          <div className="flex gap-4 font-semibold">
              <a href=""><p className="text-blue-400">Home</p></a>
              <a href=""><p>Shop</p></a>
              <a href=""><p>Home</p></a>
              <a href=""><p>Pages</p></a>
              <a href=""><p>Contact Us</p></a>
          </div>
        </div>
      </div>
    );
  }
  
  export default NavBar;
  