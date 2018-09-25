import React from 'react';
import NewsService from '../../services/NewsService';
import Article from '../articleComponent/Article';
import DateHelper from '../../helpers/DateHelper';


import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/src/owl.carousel.css'; //Allows for server-side rendering.

class HomePage extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      posts : null,
      promotedPosts : null,
    };
  }

  componentDidMount()
  {
      fetch(NewsService.getPosts())
      .then(response => response.json())
      .then(data => {
        let posts = data.response.results.map((post, key) => {
          return (
              <Article key={ key } data={ post } className="col-md-4"/>
          );
        });
        this.setState({posts : posts})
      });

      fetch(NewsService.getPosts(true))
      .then(response => response.json())
      .then(data => {
        let promotedPosts = data.response.results.map((post, key) => {
          const date =  new Date(post.webPublicationDate);
          return (
              <div className="slider-post" key={key}>
                <div className="slider-post-thumbnail">
                  <img src={post.fields.thumbnail} alt={post.webTitle}/>
                  <span className="slider-post-category"></span>
                </div>
                <div className="slider-post-meta">
                  <abbr className="published" title={ DateHelper.getDate(date) }>{ DateHelper.getDate(date) }</abbr>
                  <h3>{post.webTitle}</h3>
                </div>
              </div>
          );
        });
        this.setState({promotedPosts : promotedPosts})
      });
  }

  render()
  {
    const options = {
        items: 3,
        nav: false,
        autoplay: true
    };
    return(
      <div className="page-wrapper">
        <div className="inner-wrapper">
        <div className="promoted-posts-carousel">
          <div className="fluid-container">
            { this.state.promotedPosts ? <OwlCarousel options={options}> {this.state.promotedPosts} </OwlCarousel> : '' }
          </div>
        </div>
          <div className="container">
            <div className="row">
              { this.state.posts }
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default HomePage;
