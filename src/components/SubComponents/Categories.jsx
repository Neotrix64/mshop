import { useNavigate } from "react-router";


function Categories({img, parrafo, estilo}){

    const navigate = useNavigate();

    const navegar = (url) =>{
        navigate(`categories/${url}`)
    }

    return(
        <div className={`grid mx-5 my-5 ${estilo}`} onClick={() => navegar(parrafo)}>
        <div className="bg-gray-300 size-40 rounded-full shadow-xl shadow-gray-200"></div>
        <p className="text-center">{parrafo}</p>
        </div>
    );
}

export default Categories;