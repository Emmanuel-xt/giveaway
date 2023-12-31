import React from "react";
import { BsDiscord, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-wrap justify-between p-10 text-sm text-slate-300 gap-6">
      <div className="flex flex-col gap-4 ">
        <h6 className="">INFO</h6>
        <div className="flex justify-between gap-3">
          <ul className="">
            <li>Documentation</li>
            <li>Whitepaper</li>
            <li>Licences</li>
            <li>Careers</li>
          </ul>
          <ul className="">
            <li>Terms of Use</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Press</li>
          </ul>
          <ul className="">
            <li>Market Place</li>
            <li>Help Center</li>
            <li>Service Status</li>
            <li>Changing</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <h6 className="">FOLLOW US</h6>
        <div className="flex justify-between">
            <BsDiscord />
            <BsTelegram />
            <BsTwitter />
            <BsInstagram />
            <FaFacebook />
            <BsYoutube />

        </div>
        <p className="">Copyright © 2023-2024 SplitorSpin. All Rights Reserved</p>
      </div>
      <div className=""></div>
    </section>
  );
};

export default Footer;
