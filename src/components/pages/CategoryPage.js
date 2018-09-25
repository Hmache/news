import React from 'react';
import NewsService from '../../services/NewsService';
import Article from '../articleComponent/Article';

class CategoryPage extends React.Component {

  constructor (props)
  {
    super(props);
    this.state = {
      category : props.match.params.category,
    }
  }

  componentDidMount ()
  {
    const { category } = this.state;
    fetch(NewsService.getPostsByCategory(category))
    .then(response => response.json())
    .then(data => {
      let posts = data.response.results.map((post, key) => {
        return (
            <Article key={ key } data={ post } className="col-md-4"/>
        );
      });
      this.setState({posts : posts})
    });
  }

  componentWillReceiveProps (props)
  {
    this.setState({posts : null  });

    const category = props.match.params.category;
    this.setState({category : category});
    fetch(NewsService.getPostsByCategory(category))
    .then(response => response.json())
    .then(data => {
      let posts = data.response.results.map((post, key) => {
        return (
            <Article key={ key } data={ post } className="col-md-4"/>
        );
      });
      this.setState({posts : posts});
      console.log(this.state)
    });
  }

  render ()
  {
     const { category, posts } = this.state;
     return (
       <div className="page-wrapper">
         <header className="page-header">
          <div className="container">
            <h1 className="page-title"><span>{ category }</span></h1>
          </div>
         </header>
         <div className="inner-wrapper">
           <div className="container">
             <div className="row">
               { posts }
             </div>
           </div>
         </div>
       </div>
     );
  }
}

export default CategoryPage;
