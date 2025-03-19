import { useParams } from "react-router";
import NavBar from "../components/NavBar";
import { useState } from "react";

function PcID(){

    const {id} = useParams();
    const [seeImage, setImage] = useState(0);

    const handleChangeImage = (image) =>{
        setImage(image);
    }

    const getImage = () =>{
        seeImage;
    }

    const pcs = [
        {
            id: "0",
            grade: "Grade A+",
            discount: "50% off",
            name: "Asus Laptop",
            description: "High Performance Gaming Computer",
            Price: "29.00$",
            rate: "Non rated yet",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/",
            imageCollage: ["https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/", "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png", "https://www.aliescooper.com/wp-content/uploads/2023/05/ALIES-COOPER-LAPTOP-GAMER-ASUS-ROG-STRIX.png"]
        },
        {
            id: "1",
            grade: "Grade A",
            discount: "30% off",
            name: "MSI Katana",
            description: "Premium Gaming Laptop",
            Price: "999.00$",
            rate: "Rated 4.5/5",
            imageUrl: "https://korsaka.com/wp-content/uploads/2024/05/Msi-GF66.jpg",
            imageCollage: ["https://korsaka.com/wp-content/uploads/2024/05/Msi-GF66.jpg", "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png", "https://korsaka.com/wp-content/uploads/2024/05/Msi-GF66.jpg"]
        },
        {
            id: "2",
            grade: "Grade B",
            discount: "20% off",
            name: "Dell XPS 13",
            description: "Compact and Powerful Laptop",
            Price: "799.00$",
            rate: "Rated 4.2/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/",
            imageCollage: ["https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/", "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png", "https://www.aliescooper.com/wp-content/uploads/2023/05/ALIES-COOPER-LAPTOP-GAMER-ASUS-ROG-STRIX.png"]
        },
        {
            id: "3",
            grade: "Grade A",
            discount: "40% off",
            name: "Lenovo ThinkPad X1",
            description: "Business Laptop with High Security",
            Price: "1200.00$",
            rate: "Rated 4.8/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/",
            imageCollage: ["https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/", "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png", "https://www.aliescooper.com/wp-content/uploads/2023/05/ALIES-COOPER-LAPTOP-GAMER-ASUS-ROG-STRIX.png"]
        },
        {
            id: "4",
            grade: "Grade A+",
            discount: "60% off",
            name: "Apple MacBook Pro",
            description: "The Ultimate Laptop for Creators",
            Price: "2500.00$",
            rate: "Rated 5/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/",
            imageCollage: ["https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/", "https://imggraficos.gruporeforma.com/2022/05/Laptops-gamer-asus-hot-sale-2022-2.png", "https://www.aliescooper.com/wp-content/uploads/2023/05/ALIES-COOPER-LAPTOP-GAMER-ASUS-ROG-STRIX.png"]
        }
    ];


    const pc = pcs.find((pc) => pc.id === id);
    if(!pc){
        return(
            <p>No existe una computadora con estas especificaciones</p>
        );
    }

    return(
        <div className="div">
            <NavBar estilo={""}/>
            <div className="top url w-full mt-37">
                <p className="text-xl ml-5 text-[#2a2a2a] font-semibold mb-5"><a href="" className="border-b-3 border-transparent hover:border-[#1447e6] hover:text-blue-700 ease-in-out duration-700">Categorias</a> / <a href="Pcs" className="border-b-3 border-transparent hover:border-[#2a2a2a] ease-in-out duration-700">PC</a> / <a href="Gaming" className="border-b-3 border-transparent hover:border-[#2a2a2a] ease-in-out duration-700"> Gaming </a></p>
            </div>
           <div className="flex ml-3">
           <div className="pictures flex flex-col flex-wrap ">
            {pc.imageCollage.map((image, index) => {
                return (
                <div className="h-20 w-20 rounded-md flex items-center justify-center overflow-hidden p-2"> {/* Añadimos padding dentro del contenedor */}
                    <img
                    src={image}
                    alt=""
                    className="h-full w-full object-contain hover:scale-110 ease-in-out duration-500 cursor-pointer" // Usa object-contain para evitar recorte
                    onClick={() => handleChangeImage(index)}
                    />
                </div>
                );
            })}
            </div>

            <div className="parent-Image w-xl aspect-[1/1] overflow-hidden">
                <img
                    src={pc.imageCollage[seeImage]}
                    className="w-full h-2/3 object-contain"
                    alt=""
                />
            </div>
           </div>
        </div>
    );
}

export default PcID;