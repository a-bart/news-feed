import React from 'react';
import Link from '../Link';
import './styles.styl';

const Index = () => (
  <div className="menu-area">
    <nav className="main-menu">
      <ul>
        <li>
          <Link path="/" title="Home" />
        </li>
        <li>
          <Link path="/news?category=business" primaryQuery="category" title="Business" />
        </li>
        <li>
          <Link path="/news?category=entertainment" primaryQuery="category" title="Entertainment" />
        </li>
        <li>
          <Link path="/news?category=health" primaryQuery="category" title="Health" />
        </li>
      </ul>
    </nav>
  </div>
);

export default Index;
