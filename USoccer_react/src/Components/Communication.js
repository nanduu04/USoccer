import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (  
      <div>
        Click me! - <Link to="/Join"> Click to Join</Link>
        Click me! - <Link to="/Chat"> Click to Chat</Link>
    </div>
  );
}
  
export default Profile;