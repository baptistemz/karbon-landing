import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common';


const LINKS = [
  // {
  //   name: 'Le score',
  //   url: '/score'
  // },
  // {
  //   name: 'Distributeurs',
  //   url: '/retailers'
  // },
  // {
  //   name: 'Industriels',
  //   url: '/producers'
  // },
  {
    name: 'Jobs',
    url: '/jobs'
  },
];

const NavBar = () => {
  return(
    <div id="navbar" className="space-around">
      <Link to="/" className="margin-20">
        <img src="/karbon-logo.webp" alt="logo"/>
      </Link>
      <div className='space-around'>
        {LINKS.map((link) => (
          <Link to={link.url} className="margin-20">
            <Button size="large" variant="text"  color="secondary">{link.name}</Button>
          </Link>
        ))}
      </div>
    </div>
  )
}

export { NavBar };
