import React from 'react'
import 'antd/dist/antd.css';
import Dashboard from './chat/Dashboard'
import Store from './chat/Store';

function Profile() {
    return (
      <div className="App">
        <Store>
          <Dashboard />
        </Store>
      </div>
    );
  }
  
  export default Profile;