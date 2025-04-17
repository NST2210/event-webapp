import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

const Header = () => {
  const location = useLocation();

  useEffect(() => {}, []);
  return (
    <div className="header d-flex justify-content-space-between align-items-center h-100px">
      <div className="d-flex justify-content-center w-100 position-relative">
        <Logo className="h-65px w-134px"></Logo>
      </div>
      <button className="bg-color-FF0000 w-276px h-56px text-white right-1 rounded-3 position-absolute">CREATE NEW EVENT</button>
    </div>
  );
};
export default Header;
