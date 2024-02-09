import React from "react";
import { Sidebar } from "../sidebar/Sidebar";
import "./contact.css";

export function Contact() {
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
      console.log("Success", res);
    }
    
  };

  return (
    <section className="contact container section">
      <Sidebar />
      <h2 className="section__title flex-container">Contact</h2>
      <div className="contact_form">
        <p></p>
        <form className="" onSubmit={onSubmit}>
          <p className="topic_request">Name</p>
          <input className="input_request" type="text" name="name" />
          <p className="topic_request">Email</p>
          <input className="input_request" type="email" name="email" />
          <p className="topic_request">More details as you wish</p>
          <textarea
            className="input_request_textarea"
            name="message"
          ></textarea>
          <br />
          <div className="box_btn">
            <button className="btn" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
