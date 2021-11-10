import React, { Component } from 'react'
import axios from 'axios'
import PostItem from './PostItem'
import './Posts.css'

export class Posts extends Component {
   state = {
       posts: []
   }
 componentDidMount () {
   const restPrefix = 'https://nichesnowboards.com/wp-json'
   // const restPrefix = 'http://localhost:8000/?rest_route='
   axios.get(`${restPrefix}/wp/v2/posts/`)
       .then(res => this.setState({
           posts: res.data,
           isLoaded: true
       }))
       .catch(err => console.log(err))
   }
   render() {
      const {posts} = this.state;
       return (
           <div className="posts">
             {posts.map(post =>
               <PostItem key={post.id} post={post}/>
              )}
           </div>
       )
   }
}

export default Posts
