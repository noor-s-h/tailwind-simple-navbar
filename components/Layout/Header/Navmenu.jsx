import { useRouter } from 'next/router';

import NavData from '../../../data/NavData';
import Navlink from './Navlink';

export default function Navmenu({ active, onClick }) {
  const router = useRouter();
  
  return (
    <div
      className={`${
        active ? 'flex' : 'hidden'
      } md:flex md:flex-row items-center flex-col absolute top-[51px] inset-x-0 bg-white border-b md:border-b-0 md:static p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-8`}
    >
      {NavData.map((navdata, index) => {
        navdata.current = navdata.href === router.route
        return <Navlink key={index} {...navdata} onClick={onClick} />;
      })}
    </div>
  );
}
