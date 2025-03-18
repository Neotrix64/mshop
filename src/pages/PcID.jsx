import { useParams } from "react-router";

function PcID(){

    const {id} = useParams();

    const pcs = [
        {
            id: "0",
            grade: "Grade A+",
            discount: "50% off",
            name: "Asus Laptop",
            description: "High Performance Gaming Computer",
            Price: "29.00$",
            rate: "Non rated yet",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            id: "1",
            grade: "Grade A",
            discount: "30% off",
            name: "HP Spectre x360",
            description: "Premium Convertible Laptop",
            Price: "999.00$",
            rate: "Rated 4.5/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            id: "2",
            grade: "Grade B",
            discount: "20% off",
            name: "Dell XPS 13",
            description: "Compact and Powerful Laptop",
            Price: "799.00$",
            rate: "Rated 4.2/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            id: "3",
            grade: "Grade A",
            discount: "40% off",
            name: "Lenovo ThinkPad X1",
            description: "Business Laptop with High Security",
            Price: "1200.00$",
            rate: "Rated 4.8/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        },
        {
            id: "4",
            grade: "Grade A+",
            discount: "60% off",
            name: "Apple MacBook Pro",
            description: "The Ultimate Laptop for Creators",
            Price: "2500.00$",
            rate: "Rated 5/5",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/ac5773ae-2d6b-4d72-bc07-62cbdfacd375/"
        }
    ];


    const pc = pcs.find((pc) => pc.id === id);

    return(
        <p>{pc.name}</p>
    );
}

export default PcID;