function TrendingProducts() {

    const pcs = [
        {
            grade: "Grade A+",
            discount: "50% off",
            name: "Asus Laptop",
            description: "High Performance Gaming Computer",
            Price: "29.00$",
            rate: "Non rated yet",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            grade: "Grade A",
            discount: "30% off",
            name: "HP Spectre x360",
            description: "Premium Convertible Laptop",
            Price: "999.00$",
            rate: "Rated 4.5/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            grade: "Grade B",
            discount: "20% off",
            name: "Dell XPS 13",
            description: "Compact and Powerful Laptop",
            Price: "799.00$",
            rate: "Rated 4.2/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            grade: "Grade A",
            discount: "40% off",
            name: "Lenovo ThinkPad X1",
            description: "Business Laptop with High Security",
            Price: "1200.00$",
            rate: "Rated 4.8/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            grade: "Grade A+",
            discount: "60% off",
            name: "Apple MacBook Pro",
            description: "The Ultimate Laptop for Creators",
            Price: "2500.00$",
            rate: "Rated 5/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        }
    ];

    // Limitar la cantidad de productos a mostrar
    const limit = 4; // Limite de productos a mostrar
    const limitedPcs = pcs.slice(0, limit); // Se limita el array a los primeros 'limit' productos

    return (
        <div className="flex justify-center">
            <div className="pc flex flex-wrap justify-center gap-4">
                {limitedPcs.map((pc, index) => (
                    <div
                        key={index}
                        className="caja w-64 h-[400px] flex flex-col bg-white shadow-lg hover:cursor-pointer p-4"
                    >
                        <div className="flex justify-between etiquetas z-10 mt-3 w-full">
                            <div className="bg-black text-white p-0.5 px-3 font-semibold">
                                <p>{pc.grade}</p>
                            </div>
                            <div className="bg-blue-500 text-white p-0.5 px-3 font-semibold">
                                <p>{pc.discount}</p>
                            </div>
                        </div>

                        <div className="imagen flex justify-center mb-4">
                            <img
                                src={pc.imageUrl}
                                alt={pc.name}
                                className="w-32 h-32 object-cover"
                            />
                        </div>

                        {/* Ajustar el contenido dentro de la tarjeta */}
                        <div className="information flex flex-col flex-grow justify-between">
                            <div className="flex items-center gap-2 name-and-colors mb-2">
                                <h1 className="text-xl font-bold tracking-widest mr-2">
                                    {pc.name}
                                </h1>
                                <div className="size-3 rounded-full mt-2 bg-blue-500"></div>
                                <div className="size-3 rounded-full mt-2 bg-black"></div>
                                <div className="size-3 rounded-full mt-2 bg-red-500"></div>
                            </div>

                            <p className="text-sm mb-2">{pc.description}</p>

                            <div className="flex justify-between rate-and-prices mb-1">
                                <p>{pc.rate}</p>
                                <p className="text-2xl font-semibold">{pc.Price}</p>
                            </div>

                            {/* Botones */}
                            <div className="flex justify-between w-full mt-auto">
                                <button className="text-md font-bold tracking-wider">Add to Chart</button>
                                <button className="bg-black text-white p-1 px-6 rounded-full">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingProducts;
