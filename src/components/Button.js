const Button = (props) => {
    return (
        <button className="btn" onClick={()=>props.url? window.open(props.url,"_blank"):''}>
            {/* <span className="btn"> */}
                {props.title}
            {/* </span> */}
        </button>

    )
}

export default Button
