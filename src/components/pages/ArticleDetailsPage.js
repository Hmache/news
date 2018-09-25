import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

import DateHelper from '../../helpers/DateHelper';

class ArticleDetailsPage extends React.Component {

  constructor (props) {
    super();
    this.state = {
      data : props.location.data,
    }
  }

  render () {
    const { data } = this.state;

    if (!data) {
      return <Redirect to="/" push={true} />
    }

    const date =  new Date(data.webPublicationDate);

    return(
      <div className="page-wrapper">
        <div className="inner-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <article className='post post-details'>
                  <div className="post-thumbnail">
                    <img className="img-fluid w-100" src={ data.fields.thumbnail} alt={ data.webTitle }/>
                  </div>
                  <div className="post-meta">
                    <div className="post-categories">
                      <a href="/" rel="category tag">{ data.sectionName }</a>
                    </div>
                    <span className="separator">/</span>
                    <time className="post-date" dateTime={ data.webPublicationDate }>{ DateHelper.getDate(date) }</time>
                  </div>
                  <h2 className="post-title">{ data.webTitle }</h2>

                  <div className="post-summary" dangerouslySetInnerHTML={{ __html: data.fields.body }}></div>
                </article>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ArticleDetailsPage;
