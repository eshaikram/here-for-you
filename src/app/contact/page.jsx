import React from "react";

import "./contact.css";
import Main from "@/components/globals/my-main/main";
export default function Contact() {
  return (
    <div className="our-help">
       <div className="container">
           
            <Main
              title="Contact Us" 
              description="If you have any questions about the service please let us know.." 
            />
            
           
          </div>
      <div className="faq-heading">
        <i className="fa-solid fa-envelope-open"></i>

        <p>
          If you need help using always-here or you would like more info about
          our Memorial website service?
        </p>
      </div>
      <hr className="contact-divider" />

      <div className="contact-us-section">
        <div className="row">
          <div className="contact-detail">
            <h2>Do you have a question about<br/> Always Here</h2>
            <h3>General Enquiries</h3>
            <p>0123456789</p>
            <p>info@alwayshere.co.uk</p>
            <h3>Media Enquiry</h3>
            <p>Tel. 0123456789 / 12</p>
            <p>info@alwayshere.co.uk</p>
          </div>
        </div>

        <div className="contact-card">
          <form>
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-lg-12">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="col-lg-12">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  rows="6"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="col-lg-12">
                <button className="btn btn-primary" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
