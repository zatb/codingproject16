import React from 'react';

function Profile({ member }) {
  return (
    <div className="profile">
      <img src={member.photo} alt={`${member.name}'s photo`} />
      <h2>{member.name}</h2>
      <p>{member.role}</p>
    </div>
  );
}

export default Profile;
