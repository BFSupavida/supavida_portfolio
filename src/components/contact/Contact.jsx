import React, { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./contact.css";
import { Shapes } from "../home/Shapes";
import light from "../../../public/assets/light/price-1.png"

export function Contact() {
  //set emty of input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b8cd2a47-ca44-47bf-8acd-d37a5cd5b249");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Thank you for your contact");
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }
  };

  return (
    <div>
      <Sidebar />
      <section className="contact container section">
        <h2 className="section__title flex-container">Contact</h2>
        <div className="before_contact_form">
          <div className="light-blub">
            <img className="light_bulb" src={light} alt="light_bulb" />
          </div>
          
          <div>
            <h3>If you want to know more about me ?</h3>
            <h3>Let's get in on</h3>
          </div>
          
        </div>
        
        <div className="contact_form">
          
          <form className="" onSubmit={onSubmit}>
            <p className="topic_request">Name</p>
            <input className="input_request" type="text" name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            <p className="topic_request">Email</p>
            <input className="input_request" type="email" name="email"  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            <p className="topic_request">More details as you wish</p>
            <textarea
              className="input_request_textarea"
              name="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
            <br />
            <div className="box_btn">
              <button className="btn" type="submit" >
                Submit Form
              </button>
            </div>
          </form>
        </div>
        <Shapes />
      </section>
    </div>
  );
}
