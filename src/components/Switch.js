function Switch() {
    const handleClick = (e) => {
        if (e.target.checked) {
            // alert("checked");
            document.body.style.background = "#222831";
            document.querySelectorAll('.nav-list a').forEach(cur => {
                cur.style.color = "#eeeeee";
            })
        } else {
            // alert("Not checked");
            document.body.style.background = "#eeeeee";
            document.querySelectorAll('.nav-list a').forEach(cur => {
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
