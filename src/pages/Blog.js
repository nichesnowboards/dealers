import React, { Component } from 'react'
import { PostContent } from '@libs/Wordpress'
import PostItem from '@components/PostItem'
import '@pages/Blog.css'

export class Posts extends Component {
    state = {
        posts: []
    }
    async componentDidMount() {
        const post_content = await PostContent();
        this.setState({
            posts: post_content.data,
            isLoaded: true
        })
    }
    render() {
        const { posts } = this.state;
        return (
            <div className="posts">
                {posts.map(post =>
                    <PostItem key={post.id} post={post} />
                )}
            </div>
        )
    }
}

export default Posts
