// Write your JS code here
import './index.css'
import {Component} from 'react'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {title, imageUrl, authorName, avatarUrl} = eachBlogData

    return (
      <div>
        <div>
          <img src={imageUrl} alt="blog" className="blog-img" />
        </div>
      </div>
    )
  }
}
export default BlogItem
