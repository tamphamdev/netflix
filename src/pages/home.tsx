import React from "react"

import { OptForm, Feature } from "../components"
import { FaqsContainer } from "../containers/faqs"
import { FooterContainer } from "../containers/footer"
import { JumbotronContainer } from "../containers/jumbotron"
import { HeaderContainer } from "../containers/header"

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.Subtitle>
            Watch anywhere. Cancel at any time.
          </Feature.Subtitle>
        </Feature>
        <OptForm>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
          <OptForm.Break />
          <OptForm.Input placeholder="Email address" />
          <OptForm.Button>Try it now</OptForm.Button>
        </OptForm>
      </HeaderContainer>

      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  )
}
