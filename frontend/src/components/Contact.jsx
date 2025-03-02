import React from "react";
import ContactSection from "./ContactSection";
import { Navbar } from "./Navbar";

const Contact = () => {

  return (
    <div className="h-full bg-gray-900">
        <Navbar />
        <ContactSection />
    </div>
  );
};

export default Contact;
