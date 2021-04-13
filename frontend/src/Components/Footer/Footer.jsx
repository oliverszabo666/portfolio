import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <h3>
        <div>
          <AiOutlineMail />
        </div>
        oliverszbo@gmail.com
      </h3>
      <p>Copyright: 2021 Szabó Olivér</p>
    </div>
  );
};

export default Footer;
