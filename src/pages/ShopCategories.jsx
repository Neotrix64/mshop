import { useParams } from "react-router";

function ShopCategories(){
    const {categoria} = useParams();
    return(
        <p>{categoria}</p>
    );
}

export default ShopCategories