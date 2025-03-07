function Tittles({ Titulo, Descripcion, clasePersonalizada}){
    return(
        <div className={`flex flex-col ${clasePersonalizada}`}>
        <div className="grid justify-center text-center">
        <h1 className="text-xl font-bold">{Titulo}</h1>
        <h4>{Descripcion}</h4>
        </div>
        </div>
    );
}

export default Tittles