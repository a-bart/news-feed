import React from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { fetchTopPosts, selectPost } from '../../actions/posts.action';
import Card from '../../components/Card';
import BlockLoader from '../../components/Loaders/BlockLoader';
import './styles.styl';

class NewsFeed extends React.Component {
  componentDidMount() {
    const { fetchPostsAction, category } = this.props;
    fetchPostsAction(category);
  }

  shouldComponentUpdate(nextProps) {
    const { topPosts, category, loadingBlocks } = this.props;
    return nextProps.category !== category
      || nextProps.topPosts[category] !== topPosts[category]
      || nextProps.loadingBlocks[category] !== loadingBlocks[category];
  }

  componentDidUpdate(prevProps) {
    const { fetchPostsAction, category } = this.props;
    if (prevProps.category !== category) {
      fetchPostsAction(category);
    }
  }

  handlePostSelected = (article) => {
    const { selectPostAction } = this.props;

    selectPostAction(article);
    Router.push(`/post?title=${article.title}`);
  };

  render() {
    const {
      category, topPosts, loadingBlocks, count,
    } = this.props;

    return loadingBlocks[category]
      ? <BlockLoader />
      : (
        <div className="feed">
          {topPosts[category]
          && Array.isArray(topPosts[category].articles)
          && topPosts[category].articles
            .filter((a, i) => i < count)
            .map((article) => (
              <Card key={article.url} article={article} handlePostSelected={this.handlePostSelected} />
            ))}
        </div>
      );
  }
}

const mapStateToProps = (state) => ({
  ...state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostsAction: (category) => dispatch(fetchTopPosts({ category })),
  selectPostAction: (article) => dispatch(selectPost(article)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);
