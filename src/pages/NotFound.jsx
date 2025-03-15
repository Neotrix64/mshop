import CustomizedNavBar from "../components/NotFound/CustomizedNavBar";

const redireccionamientos = [
    {
        nombre: "Privacy",
        hRef: ""
    },
    {
        nombre: "Terms of Condition",
        hRef: ""
    },
    {
        nombre: "Manage",
        hRef: ""
    },
    {
        nombre: "Cart",
        hRef: ""
    },
    {
        nombre: "Wishlist",
        hRef: ""
    }
]

function NotFound() {
  return (
    <div className="page relative">
      <div className="black h-screen bg-black z-10 text-white">
        <CustomizedNavBar />
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-8xl font-bold">404</h1>
          <h2 className="text-6xl">OOPS!</h2>
          <h4 className="text-3xl">Seems like you're lost!</h4>
          <h5 className="text-xl">(This page is not finished yet)</h5>
          <button className="p-3 px-8 bg-white text-black font-bold mt-5 cursor-pointer">
            Go to Home
          </button>
        </div>
      </div>
      <div className="white bg-white h-[350px] shadow-md z-0">
        <div className="flex justify-between m-10">
          <div className="left">
            <h3 className="text-4xl font-semibold mb-5">Join our NewsLetter</h3>
            <input
              type="text"
              className="outline-none p-3 border-b-2 font-semibold"
              placeholder="Email Address"
            />
          </div>
          <div className="middle">
            <h3 className="text-4xl font-semibold mb-5">Account</h3>
            <div className="flex flex-col gap-3 text-xl font-semibold">
              {redireccionamientos.map((item, index) => (
                <a href={item.hRef} key={index} className="relative inline-block group">
                  {item.nombre}
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-black transition-all duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                </a>
              ))}
            </div>
          </div>
          <div className="right">
            <h3 className="text-4xl font-semibold mb-5">Contact Us</h3>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-10 flex items-center justify-center">
            <a className="text-xl font-bold tracking-widest border-b-[3px] cursor-pointer" href="/">Go to home</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
