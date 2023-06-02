import React from "react";
import { Section, Caption, Wrapper, Description } from "../Hero/Hero.styled";

export const Hero = () => {
  return (
    <Section>
      <Caption>
        <span>Delivery</span>App
      </Caption>
      <Wrapper>
        <Description>
          Food ordering app that allow you to conveniently order foods from your
          favorite restaurants.
        </Description>
      </Wrapper>
    </Section>
  );
};
