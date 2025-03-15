function CustomizedNavBar(){
    return(
        <div className="w-full h-14 border-b-2 border-white text-white">
            <div className="flex justify-evenly">
            <input type="text" placeholder="Look for a product" className="outline-none"/>
            <h3>MShop</h3>
            <div className="flex gap-3">
            <a href="">Acc</a>
            <a href="">Items</a>
            </div>
            </div>
        </div>
    );
}

export default CustomizedNavBar