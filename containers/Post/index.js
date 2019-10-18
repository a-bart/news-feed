import React from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import moment from 'moment';
import PostLoader from '../../components/Loaders/PostLoader';
import { getBaseUrl } from '../../utils/common';
import './styles.styl';

class Post extends React.Component {
  componentDidMount() {
    const { post } = this.props;

    if (!post) {
      Router.replace('/');
    }
  }

  render() {
    const { post } = this.props;

    return (
      <div className="post">
        {post ? (
          <>
            <div className="post-heading">
              <h2>{post.title}</h2>
              <div className="post-heading_image-holder">
                <img alt="a" src={post.urlToImage} />
              </div>
              <div className="post-heading_footer">
                {post.author && (
                  <>
                    <div className="footer-cell">
                      <span>by </span>
                      <span>{post.author}</span>
                    </div>
                    <span>/</span>
                  </>
                )}
                <div className="footer-cell">
                  <span>{moment(post.publishedAt).format('DD MMMM YYYY')}</span>
                </div>
                {post.source && post.source.name && (
                  <>
                    <span>/</span>
                    <div className="footer-cell">
                      <a
                        href={getBaseUrl(post.url)}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>{post.source.name}</span>
                      </a>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="post-content">
              <p>{post.content}</p>
              <p>
                <span>To see full article - </span>
                <a href={post.url} rel="noopener noreferrer" target="_blank">click here</a>
              </p>
            </div>
          </>
        ) : (
          <PostLoader />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  post: state.posts.selectedPost,
});

export default connect(mapStateToProps)(Post);
