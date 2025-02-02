import React from 'react';
import Profile from './Profile';

function Gallery({ team }) {
  return (
    <div className="gallery">
      {team.map(member => (
        <Profile key={member.id} member={member} />
      ))}
    </div>
  );
}

export function Header({ title }) {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}

export default Gallery;
