import React, { useState, useRef, useLayoutEffect } from 'react';
import LazyLoad from 'react-lazyload';
import './styles.styl';

const Card = ({ article, handlePostSelected }) => {
  const ref = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);
  const calcHeight = () => Math.ceil(cardWidth - cardWidth / 7);

  useLayoutEffect(() => {
    function updateSize() {
      const width = ref.current ? ref.current.offsetWidth : 0;
      setCardWidth(width);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [ref.current]);

  return (
    <div ref={ref} className="card">
      <div className="card_image-holder">
        <a onClick={() => handlePostSelected(article)} style={{ width: cardWidth, height: calcHeight() }}>
          <LazyLoad height={calcHeight()} once>
            <img
              alt=" click here to open the post"
              src={article.urlToImage || '/images/no-image.png'}
              style={{ width: cardWidth, height: calcHeight() }}
            />
          </LazyLoad>
        </a>
      </div>
      <div className="card_content">
        <a onClick={() => handlePostSelected(article)} className="card_content_title"><h3>{article.title}</h3></a>
        <p className="card_content_text">{article.description}</p>
      </div>
    </div>
  );
};

export default Card;
