import React from 'react';
import { Link } from 'react-router-dom';

import TextHelper from '../../helpers/TextHelper';
import DateHelper from '../../helpers/DateHelper';

class Article extends React.Component
{
    constructor (props)
    {
        super();
        this.state = {
          data : props.data,
          classes: 'post' + (props.className ? ' ' + props.className : ''),
        };
    }

    render ()
    {
      const { data } = this.state;
      const date =  new Date(data.webPublicationDate);
        return (
          <article className={ this.state.classes }>
            <div className="post-thumbnail">
              <Link to={{ pathname: '/article/' + data.id, data: data }}>
                <img className="img-fluid" src={ data.fields.thumbnail} alt={ data.webTitle }/>
              </Link>
            </div>
            <h2 className="post-title">{ data.webTitle }</h2>
            <div className="post-meta">
              <div className="post-categories">
                <a href="/" rel="category tag">{ data.sectionName }</a>
              </div>
              <span className="separator">/</span>
              <time className="post-date" dateTime={ data.webPublicationDate }>{ DateHelper.getDate(date) }</time>
            </div>
            <div className="post-summary">
              <p>{ TextHelper.truncate(data.fields.headline, 70) }</p>
            </div>
            <footer className="link-more">
              <Link to={{ pathname: '/article/' + data.id, data: data }}>
                Continue reading
                <span className="sr-only">{ data.webTitle }</span>
              </Link>
            </footer>
          </article>
        );
    }
}

export default Article;
