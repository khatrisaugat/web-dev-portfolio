import Button from "./Button";

function Form() {
    return (
        <div className="contact-form">
            <h3>Contact Me</h3>
            <form name="login" className="form">
                {/* <div className="row"> */}
                <div className="input-control">
                    <input type="text" name="name" className="input-field" placeholder="Name" />
                    <label htmlFor="name" className="input-label">Name</label>
                </div>
                <div className="input-control">
                    <input type="email" name="email" className="input-field" placeholder="Email Address" />
                    <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                {/* </div> */}
                <div className="input-control">
                    <input type="text" name="subject" className="input-field" placeholder="Subject" />
                    <label htmlFor="Subject" className="input-label">Subject</label>
                </div>
                <div className="input-control">
                    <textarea name="message" id="message" cols="30" rows="5" className="input-field" placeholder="Message"></textarea>
                    <label htmlFor="message" className="input-label">Message</label>
                </div>
                <div className="actions" style={{ marginTop: "5rem" }}>
                    <Button title="Send" />
                </div>
            </form>
        </div>
    )
}

export default Form
