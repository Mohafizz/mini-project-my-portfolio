import React from "react";
import { Footer, FooterSection, FooterLinkList } from "react-mdl";

const MyFooter = () => {
  return (
    <div>
      <Footer size="mini">
        <FooterSection type="middle" logo="Hello">
          <FooterLinkList>
            <a href="/">Help</a>
            <a href="/">Privacy & Terms</a>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </div>
  );
};

export default MyFooter;
