import React from "react";
import { Footer, FooterLinkList, IconButton } from "react-mdl";

const MyFooter = () => {
  return (
    <div>
      <Footer size="mini">
        <FooterLinkList>
          <IconButton name="home" href="/" />
          <IconButton
            name="accessibility"
            href="https://www.linkedin.com/in/mohamed-hafiz-796251142/"
            target="blank"
          />
          <IconButton
            name="mail"
            href="mailto:mohafizz@gmail.com"
            target="blank"
          />
          Travis CI:
          <img
            src="https://travis-ci.org/Mohafizz/mini-project-my-portfolio.svg?branch=master"
            alt="travis-ci"
          />
        </FooterLinkList>
      </Footer>
    </div>
  );
};

export default MyFooter;
