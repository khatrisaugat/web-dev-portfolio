function Switch() {
    const handleClick = (e) => {
        if (!e.target.checked) {
            // alert("checked");
            //bg color change
            document.body.style.background = "#222831";
            //nav-items color change
            document.querySelectorAll('.nav-list a').forEach(cur => {
                cur.style.color = "#eeeeee";
            })
            //social icons color change
            document.querySelectorAll('.social-icons').forEach(cur => {
                cur.style.color = "#eeeeee";
            })
        } else {
            // alert("Not checked");
            //bg color change
            document.body.style.background = "#eeeeee";
            //nav-items color change
            document.querySelectorAll('.nav-list a').forEach(cur => {
                cur.style.color = "#222831";
            })
            //social icons color change
            document.querySelectorAll('.social-icons').forEach(cur => {
                cur.style.color = "#222831";
            })
        }

    }

    return (
        <>
            <label className="switch">
                <input className="themeSwitch" type="checkbox" onClick={handleClick} />
                <span className="slider round"></span>
            </label>
        </>

    )

}

export default Switch
