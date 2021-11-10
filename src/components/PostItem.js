import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export class PostItem extends Component {
  state = {
    imgUrl: '',
    author: '',
    created: {}
  }
  static propTypes = {
    post: PropTypes.object.isRequired
  }
  componentDidMount () {
    const {featured_media, author, date} = this.props.post;
    const getImageUrl = axios.get(`https://nichesnowboards.com/wp-json/wp/v2/media/${featured_media}`);
    const getAuthor = axios.get(`https://nichesnowboards.com/wp-json/wp/v2/users/${author}`);
    const created = new Date(date);

    Promise.all([getImageUrl, getAuthor]).then(res => {
      console.log(created);
      this.setState({
        imgUrl: res[0].data.media_details.sizes.full.source_url,
        author: res[1].data.name,
        isLoaded: true,
        created: {
          day: created.getDate(),
          month: MONTH_NAMES[created.getMonth()]
        }
      });
    });
  }
  render() {
    const { title, excerpt } = this.props.post;
    const {author, imgUrl, created} = this.state;
    return (
      <div className="post">
        <div className="created">
          <span className="day">{created.day}</span>
          <span className="month">{created.month}</span>
        </div>
        <img src={imgUrl} alt={title.rendered}/>
        <div className="content">
          <h2 dangerouslySetInnerHTML={{__html: title.rendered}}></h2>
          <div className="meta">
            <p>by {author}</p>
          </div>
          <div dangerouslySetInnerHTML={{__html: excerpt.rendered}}></div>
        </div>
      </div>
    )
  }
}

export default PostItem
