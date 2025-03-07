import { useState } from "react";

const categories = [
    {
        name: "Brand",
        options: ["Hp", "Dell", "Mac", "Alienware"]
    },
    {
        name: "Color",
        options: ["Blue", "Red", "Silver", "Black"]
    },
    {
        name: "Prices",
        options: ["100-150", "500-1000", "1000-1500", "1500+"]
    }
];

function SideBar() {
    // Estado para manejar qué categorías están abiertas
    const [openCategories, setOpenCategories] = useState(categories.map(category => category.name));

    // Función para alternar la apertura/cierre de categorías
    const toggleCategory = (categoryName) => {
        setOpenCategories((prev) => {
            if (prev.includes(categoryName)) {
                return prev.filter((name) => name !== categoryName);
            } else {
                return [...prev, categoryName];
            }
        });
    };

    // Estado de selección para cada opción
    const [selectedOptions, setSelectedOptions] = useState(
        categories.reduce((acc, category) => {
            acc[category.name] = category.options.reduce((optAcc, option) => {
                optAcc[option] = false;
                return optAcc;
            }, {});
            return acc;
        }, {})
    );

    // Función para manejar la selección de una opción
    const toggleOption = (categoryName, option) => {
        setSelectedOptions((prev) => ({
            ...prev,
            [categoryName]: {
                ...prev[categoryName],
                [option]: !prev[categoryName][option]
            }
        }));
    };

    return (
        <div className="flex justify-center w-full text-md">
            <div className="content flex-col">
                <h3 className="font-semibold tracking-wider">Category</h3>

                {categories.map((categoria, index) => (
                    <div className="my-3" key={index}>
                        <h4
                            className="text-md border-b-2 font-semibold cursor-pointer"
                            onClick={() => toggleCategory(categoria.name)}
                        >
                            {categoria.name}
                        </h4>

                        {/* Animación para mostrar/ocultar las opciones */}
                        <div
                            className={`mx-10 overflow-hidden transition-all duration-300 ease-in-out ${
                                openCategories.includes(categoria.name) ? 'max-h-screen' : 'max-h-0'
                            }`}
                        >
                            {/* Mostrar las opciones si la categoría está abierta */}
                            {openCategories.includes(categoria.name) && (
                                <div>
                                    {categoria.options.map((opcion, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center my-2 cursor-pointer"
                                            onClick={() => toggleOption(categoria.name, opcion)}
                                        >
                                            {/* Checkmark (círculo) */}
                                            <div
                                                className={`w-4 h-4 border-2 mr-1 items-center rounded-full border-gray-300 ${
                                                    selectedOptions[categoria.name][opcion] ? 'bg-black' : 'bg-gray-200'
                                                }`}
                                            ></div>
                                            {opcion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                <button className="bg-blue-500 w-full h-10 rounded-xs px-5 text-white">Reset Selection</button>
            </div>
        </div>
    );
}

export default SideBar;

