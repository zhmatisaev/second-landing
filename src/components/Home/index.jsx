import React from "react";
import "./index.css";
import img1 from "../../images/Phoenix.png";
import img2 from "../../images/Jett.png";
import img3 from "../../images/Sova.png";
import img4 from "../../images/Sage.png";
import agents from "../../images/AGENTS.png";
import akali from "../../images/akali.png";

import basic from "../../images/Basic.png";
import signature from "../../images/Signature.png";
import ultimate from "../../images/Ultimate.png";
import next from "../../images/Next.png";
import footer from "../../images/footer.png";

import riot from "../../images/riot.png";
import logo from "../../images/logo.png";

export const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <img className="logo" src={riot} />
          <img className="logo" src={logo} />
          <div className="text">
            <div className="content">
              <ul>
                <li>GAME</li>
                <li>CHAMPIONS</li>
                <li>NEWS</li>
                <li>PATCH NOTES</li>
                <li>DISCOVER</li>
                <li>ESPORTS</li>
                <li>UNIVERSE</li>
                <li>SHOP</li>
                <li>SUPPORT</li>
              </ul>
              <div>
                <img className="header_img" src={akali} />
              </div>
              <p className="h_text">UNEPICKID</p>
            </div>
          </div>
        </div>
        <div className="bg_img"></div>

        <img className="agents" src={agents} />
        <img className="all_img" src={img1} />
        <img className="all_img" src={img2} />
        <img className="all_img" src={img3} />
        <img className="all_img" src={img4} />

        <div>
          <img className="img3" src={basic} />
          <img className="img3" src={signature} />
          <img className="img3" src={ultimate} />
          <img className="img4" src={next} />
        </div>
        <div>
          <img className="footer" src={footer} />
        </div>
      </div>
    </div>
  );
};
