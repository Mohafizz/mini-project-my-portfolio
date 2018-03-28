import React from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";
import { Link } from "react-router-dom";

const MyFooter = () => {
  return (
    <div>
      <Footer size="mini">
        <FooterSection logo="Hello">
          <FooterLinkList>
            <Link to="/">Home</Link>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </div>
  );
};

export default MyFooter;
