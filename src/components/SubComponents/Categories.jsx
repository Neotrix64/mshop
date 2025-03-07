function Categories({img, parrafo, estilo}){
    return(
        <div className={`grid mx-5 my-5 ${estilo}`}>
        <div className="bg-gray-300 size-40 rounded-full shadow-xl shadow-gray-200"></div>
        <p className="text-center">{parrafo}</p>
        </div>
    );
}

export default Categories;