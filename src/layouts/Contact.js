import Form from "../components/Form";

function Contact() {
    return (
        <div className="section-card" id="Contact">
            <div className="main-glass">
                <div className="part-heading">
                    <h2>Contact Me</h2>
                </div>
                <div className="row">
                    <Form />
                    <div className="Maps">
                        <h3>My Location</h3>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m22!1m12!1m3!1d5263.906768823509!2d85.31461850542867!3d27.651608166895112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m7!3e0!4m0!4m4!2s27.65209441783203%2C%2085.3180894678113!3m2!1d27.6520944!2d85.3180895!5e1!3m2!1sen!2snp!4v1626328620828!5m2!1sen!2snp" width="100%" height="400px" style={{ border: 0 }} allowFullScreen="" loading="lazy" title="Home"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
