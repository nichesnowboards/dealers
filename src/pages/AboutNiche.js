import { Component } from 'react'
import { AboutContent } from '@libs/Wordpress'
export class AboutNiche extends Component {
    state = {
        page: {}
    }
    async componentDidMount() {
        // const about_content = await AboutContent();
        // console.log(about_content.data.title)
        this.setState({
            // page: {
            //     title: about_content.data.title
            // },
            isLoaded: true
        })
    }
    render() {
        if (this.state.isLoaded) {
            // const title = { __html: this.state.page.title.rendered }
            return (
                <div>
                    <h1>About</h1>
                    <div>
                        <h2>The world's only zero-waste, environmentally conscious snowboards, 11 years and counting.</h2>
                        <p>Niche is, above all else, dedicated to providing the global snowboard community with a quality product whose environmental impact is lessened by thoughtful design, conscious material selection and the desire to craft quality snowboards that are as beautiful to look at as they are to ride. If any of this sounds good to you, you're in the right place. Here is our story.</p>
                    </div>
                    <div>
                        <div>
                            <h3>SALT LAKE CITY</h3>
                            <p>Niche is based out of Salt Lake City, Utah, and crafted in a small town in the Mediterranean where we source all raw materials as locally as possible. Founded by a fusion of skilled craftsmanship and a passion for design, our focus is on high quality and environmentally friendly snowboards. We believe snowboarding and creativity go hand-in-hand, and are passionate about making boards that are lighter, snappier and more durable than most traditionally constructed decks.</p>
                        </div>
                        <div>
                            <h3>GOODNESS</h3>
                            <p>At Niche Snowboards, we've realized our vision of the future by changing the way we think about the relationships between our materials, our environment, and ourselves. Set up by designers, design lovers and passionate snowboarders, we make snowboards that reflect our love affair with nature and good design. We believe anyone can do good if the doing comes from the heart, and that small steps lead to big differences. We hope our success will change our industry and lead to good things for you and the planet we all share.</p>
                        </div>
                        <div>
                            <h3>BOTTOM LINE</h3>
                            <p>What makes us different is our passion for quality, good design, and making the most environmentally friendly snowboards out there. We are the only company that uses alternative, environmentally friendlier materials to build every product in our lineup. We're certainly not perfect, but we strive to be better, and continually strive to make better choices for you, us, and Earth.</p>
                        </div>
                    </div>
                </div>
            )
        }
        return (<></>)
    }
}
export default AboutNiche