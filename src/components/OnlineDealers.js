import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class OnlineDealers extends Component {
  state = {
    dealers: [
      {
        title: 'Backcountry',
        url: 'https://www.backcountry.com/',
        logo: 'Backcountry-150x94.jpg'
      },
      {
        title: 'Curated',
        url: 'https://www.curated.com/'
      },
      {
        title: 'REI',
        url: 'https://www.rei.com/',
        logo: 'REI-150x94.jpg'
      },
      {
        title: 'EVO',
        url: 'https://www.evo.com/',
        logo: 'Evo-150x94.jpg'
      },
      {
        title: 'Next Adventure',
        url: 'https://www.nextadventure.net/',
        logo: 'NextAdventure-150x94.jpg'
      },
      {
        title: 'The Source',
        url: 'https://www.sourceboards.com/',
        logo: 'TheSource-150x94.jpg'
      },
      {
        title: 'The Boardroom',
        url: 'https://boardroomshop.com/store/',
        logo: 'TheBoardroom-150x94.jpg'
      },
      {
        title: 'Sanction',
        url: 'https://sanctionsnow.com/',
        logo: 'Sanction-150x94.jpg'
      },
      {
        title: 'Nomads',
        url: 'https://shopnomads.com/',
        logo: 'Nomads-150x94.jpg'
      },
      {
        title: 'Milosport',
        url: 'https://www.milosport.com/',
        logo: 'Milosport-150x94.jpg'
      },
      {
        title: 'Baker Street',
        url: 'https://bakerstsnow.com',
        logo: 'BakerStreet-150x94.jpg'
      },
      {
        title: 'Zumiez',
        url: 'https://www.zumiez.com'
      }
    ]
  }
  render() {
    return (
      <div className="online-dealers">
        <Link to="/dealers" className="button">Local Dealers</Link>
        <div className="content">
          <h1>Online Dealers</h1>
          <p>Where can you buy a Niche snowboard?  Through your local shop, from one of websites below, or directly from our website.</p>
          <div className="grid">
          {this.state.dealers.map((dealer, i) =>
            <div key={i} className="dealer">
              <a href={dealer.url} target="niche_ext"><img src={`/dealers/dealer-logos/${dealer.logo}`} alt={dealer.title} /></a>
            </div>
           )}
         </div>
        </div>
      </div>
    )
  }
}

export default OnlineDealers
