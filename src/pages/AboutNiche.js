import React, { Component } from 'react'
import { Page } from '@components/Layout'
import { PageTitle } from '@components/Typography'
import Hero, { HeroTitle, HeroContent } from '@components/Hero'
import { Row, Box } from '@components/Flex'

export class AboutNiche extends Component {
  state = {
    page: {}
  }
  async componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }
  render() {
    if (this.state.isLoaded) {
      return (
        <Page>
          <PageTitle>About</PageTitle>
          <Hero>
            <HeroTitle>The world&apos;s only zero-waste, environmentally conscious snowboards, 11 years and counting.</HeroTitle>
            <HeroContent>
              <p>Niche is, above all else, dedicated to providing the global snowboard community with a quality product whose environmental impact is lessened by thoughtful design, conscious material selection and the desire to craft quality snowboards that are as beautiful to look at as they are to ride. If any of this sounds good to you, you&apos;re in the right place. Here is our story.</p>
            </HeroContent>
          </Hero>
          <Row>
            <Box>
              <h3>SALT LAKE CITY</h3>
              <p>Niche is based out of Salt Lake City, Utah, and crafted in a small town in the Mediterranean where we source all raw materials as locally as possible. Founded by a fusion of skilled craftsmanship and a passion for design, our focus is on high quality and environmentally friendly snowboards. We believe snowboarding and creativity go hand-in-hand, and are passionate about making boards that are lighter, snappier and more durable than most traditionally constructed decks.</p>
            </Box>
            <Box>
              <h3>GOODNESS</h3>
              <p>At Niche Snowboards, we&apos;ve realized our vision of the future by changing the way we think about the relationships between our materials, our environment, and ourselves. Set up by designers, design lovers and passionate snowboarders, we make snowboards that reflect our love affair with nature and good design. We believe anyone can do good if the doing comes from the heart, and that small steps lead to big differences. We hope our success will change our industry and lead to good things for you and the planet we all share.</p>
            </Box>
            <Box>
              <h3>BOTTOM LINE</h3>
              <p>What makes us different is our passion for quality, good design, and making the most environmentally friendly snowboards out there. We are the only company that uses alternative, environmentally friendlier materials to build every product in our lineup. We&apos;re certainly not perfect, but we strive to be better, and continually strive to make better choices for you, us, and Earth.</p>
            </Box>
          </Row>
        </Page>
      )
    }
    return (<></>)
  }
}
export default AboutNiche