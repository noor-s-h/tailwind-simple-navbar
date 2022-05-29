import { useState } from 'react';

import Logo from './Logo';
import Burger from './Burger';
import Navmenu from './Navmenu';

export default function Header() {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleClose = () => {
    setActive(false);
  };

  return (
    <header className="bg-white border-b">
      <nav className="container max-w-[60rem] px-4 mx-auto flex items-center justify-between h-[50px] md:h-[60px]">
        <Logo onClick={handleClose} />
        <Burger active={active} onClick={handleToggle} />
        <Navmenu active={active} onClick={handleClose} />
      </nav>
    </header>
  );
};
