import Button from "./Button";
import emailjs from "@emailjs/browser";
import {useRef,useState} from 'react';
import emailKey from "../constants/emailKey";

function Form() {
    const form = useRef();
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(emailKey.SERVICE_ID, emailKey.TEMPLATE_ID, form.current, emailKey.USER_ID)
        .then((result) => {
            alert("Your message was sent. I will get back to you as soon as possible.");
            setFormData(prevState=>{
                return {...prevState,
                        name:"",
                        email:"",
                        subject:"",
                        message:""
                    }
            })
        }, (error) => {
            console.log(error.text);
        });
    };
    const changeStateData=(key,newData)=>{
        setFormData(prevState=>{
            return {...prevState,[key]:newData}
        });
        console.log(formData);
    }
    return (
        <div className="contact-form">

            <form name="login" className="form" ref={form} onSubmit={sendEmail}>
                {/* <div className="row"> */}
                {/* {console.log(emailKey)} */}
                <div className="input-control">
                    <input type="text" name="name" className="input-field" placeholder="Name" onChange={(el)=>changeStateData("name",el.target.value)} value={formData.name} />
                    <label htmlFor="name" className="input-label">Name</label>
                </div>
                <div className="input-control">
                    <input type="email" name="email" className="input-field" placeholder="Email Address" onChange={(el)=>changeStateData("email",el.target.value)} value={formData.email} />
                    <label htmlFor="email" className="input-label">Email Address</label>
                </div>
                {/* </div> */}
                <div className="input-control">
                    <input type="text" name="subject" className="input-field" placeholder="Subject" onChange={(el)=>changeStateData("subject",el.target.value)} value={formData.subject} />
                    <label htmlFor="Subject" className="input-label">Subject</label>
                </div>
                <div className="input-control">
                    <textarea name="message" id="message" cols="30" rows="5" className="input-field" placeholder="Message" onChange={(el)=>changeStateData("message",el.target.value)} value={formData.message}></textarea>
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
