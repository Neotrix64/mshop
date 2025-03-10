import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

function SectionBanner() {
    const slides = [
        "https://gridfiti.com/wp-content/uploads/2021/07/Gridfiti_Blog_IKEAGamingDeskSetups_Desks_Alex.jpg",
        "https://scontent.fhex5-1.fna.fbcdn.net/v/t45.5328-4/459239647_1074027920743500_7989408992992791626_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=104&ccb=1-7&_nc_sid=247b10&_nc_eui2=AeHexsIivkj9N_bPsKXXEjw37wvwgyScqJfvC_CDJJyol4SK9MkZwF_oUJor1pZ7lLrr0Bsc8XF_C7Ugw2eFt6DV&_nc_ohc=nd3RHvgfTNIQ7kNvgHIXhbK&_nc_oc=AdgZdajXgEJfJSKutNPX46hjuR36-uE8YLtOo-ocWb1gHI_cwChPceFIET2W6Tx8hus&_nc_zt=23&_nc_ht=scontent.fhex5-1.fna&_nc_gid=AUTR9z785I_DWmXESqWKqtQ&oh=00_AYHDTVh1JyNPNX_De4SxFtUYUo9h8hxye-uMt_7dlhrX4w&oe=67D46BE4"
    ];

    const [useCurr, setCurr] = useState(0);

    const previous = () => setCurr((hoja) => hoja === 0 ? slides.length - 1 : hoja - 1);
    const next = () => setCurr((hoja) => hoja === slides.length - 1 ? 0 : hoja + 1);

    useEffect(() => {
        const interval = setInterval(next, 3000); // 3000ms = 3 seconds

        return () => clearInterval(interval);
    }, [useCurr]);

    return (
        <div className="flex justify-center">
            <div className="banner h-96 w-[90%] my-10 flex relative bg-black rounded-2xl overflow-hidden">
                {/* Capa oscura sobre la imagen */}
                <div className="absolute inset-0 bg-black opacity-40 rounded-2xl"></div>

                {/* Botones de navegación */}
                <div className="absolute inset-0 flex items-center justify-between p-4 z-10">
                    <button onClick={previous} className="p-1 rounded-full bg-white/80 hover:bg-white ease-in-out duration-300 shadow">
                        <ChevronLeft size={40} />
                    </button>
                    <button onClick={next} className="p-1 rounded-full bg-white/80 hover:bg-white ease-in-out duration-300 shadow">
                        <ChevronRight size={40} />
                    </button>
                </div>

                {/* Contenedor para las imágenes */}
                <div className="flex w-full transition-transform duration-1000" style={{ transform: `translateX(-${useCurr * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={slide}
                                alt={`Slide ${index}`}
                                className="object-cover w-full h-full rounded-2xl blur-[1.5px]"
                            />
                        </div>
                    ))}
                </div>

                {/* Texto sobre la imagen */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center [text-shadow:_0_3px_3px_rgb(0_0_0_/_60%)]">
                    <h3 className="text-2xl font-bold mb-4 drop-shadow-2xl  [text-shadow:_0_3px_3px_rgb(0_0_0_/_60%)]">Recibe tu pedido o tu dinero</h3>
                    <p className="mb-4 [text-shadow:_0_3px_3px_rgb(0_0_0_/_60%)]">Compra con confianza con Devolución de tu dinero</p>
                    <button className="bg-black text-white py-2 px-4 rounded">Más información</button>
                </div>
            </div>
        </div>
    );
}

export default SectionBanner;
