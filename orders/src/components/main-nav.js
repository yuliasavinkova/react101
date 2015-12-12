import React from 'react';

class MainNav extends React.Component {
  render() {
    return (
      <div className='main-nav'>
        <a>Dashboard</a>
        <a className='active'>Orders</a>
        <a>Catalog</a>
      </div>
    );
  }
}

export default MainNav;
