import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = (props) => {
  const isLogin = true;

  return (
    <div className='header-container'>
      <div className='menu-container'>
        <span className='logo'>
          <img
            class='image'
            src={require('images/logo.png').default}
            alt='logo'
          />
        </span>
        <span className='menu-left'>
          <span>
            <Link to='/mycat' className='menu'>
              내 고양이
            </Link>
          </span>
        </span>
        <span className='menu-right'>
          <span>
            <Link to='/login' className='menu'>
              로그인
            </Link>
          </span>
          <span>
            <Link to='/mypage' className='menu'>
              마이페이지
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Header;
