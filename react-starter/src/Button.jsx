function Button({color,name,handlerFunction}){
    return(
        <>
        <button
        onClick={handlerFunction}
        style={{backgroundColor: color}}
        >
            {name}
        </button>
        </>
    )
}

export default Button