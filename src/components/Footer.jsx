


import { useNavigate } from 'react-router-dom';
import footerImg from '../assets/bottom bar.png'

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="w-full h-24 bg-white fixed bottom-0 flex justify-center items-center">
      <div className="relative w-[414px] h-[92px]">
        <img
          src={footerImg}
          alt="Footer Navigation"
          className="w-full h-full"
        />
        <button
          className="absolute top-0 left-[30px] w-[29px] h-[92px] opacity-0"
          onClick={() => navigate('/shop')}
        >
          Shop
        </button>
        <button
          className="absolute top-0 left-[99px] w-[41px] h-[92px] opacity-0"
          onClick={() => navigate('/explore')}
        >
          Explore
        </button>
        <button
          className="absolute top-0 left-[179px] w-[26px] h-[92px] opacity-0"
          onClick={() => navigate('/cart')}
        >
          Cart
        </button>
        <button
          className="absolute top-0 left-[245px] w-[53px] h-[92px] opacity-0"
          onClick={() => navigate('/favourite')}
        >
          Favourite
        </button>
        <button
          className="absolute top-0 left-[337px] w-[46px] h-[92px] opacity-0"
          onClick={() => navigate('/account')}
        >
          Account
        </button>
      </div>
    </footer>
  );
};

export default Footer;




















// import { NavLink } from 'react-router-dom';
// import { BsShop } from "react-icons/bs";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { IoCartOutline } from "react-icons/io5";
// import { FaRegHeart } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";


// import footerImg from '../assets/bottom bar.png'






// const Footer = () => {
//   return (
//     <footer className="w-full h-24 bg-white fixed bottom-0 flex justify-between items-center px-10">
//       <NavLink to="/shop" activeClassName="text-blue-500" className="flex flex-col items-center">
//         <div className="w-[24px] h-[20px] mb-1"><BsShop /></div>
//         <span className="w-[29px] h-[15px] text-xs text-center">Shop</span>
//       </NavLink>
//       <NavLink to="/explore" activeClassName="text-blue-500" className="flex flex-col items-center">
//         <div className="w-[28px] h-[18px] mb-1 rounded-lg"><MdOutlineTravelExplore /></div>
//         <span className="text-xs w-[41px] h-[15px]">Explore</span>
//       </NavLink>
//       <NavLink to="/cart" activeClassName="text-blue-500" className="flex flex-col items-center">
//         <div className="w-[21px] h-[19px] mb-1"><IoCartOutline /></div>
//         <span className="text-xs w-[26px] h-[15px]">Cart</span>
//       </NavLink>
//       <NavLink to="/favourite" activeClassName="text-blue-500" className="flex flex-col items-center">
//         <div className="w-[22px] h-[19px] mb-1"><FaRegHeart /></div>
//         <span className="text-xs w-[53px] h-[15px]">Favourite</span>
//       </NavLink>
//       <NavLink to="/account" activeClassName="text-blue-500" className="flex flex-col items-center">
//         <div className="w-[43px] h-[17px] pl-3 mb-1"><FiUsers /></div>
//         <span className="text-xs w-[46px] h-[15px]">Account</span>
//       </NavLink>

//       <img
//       src={footerImg}
//       alt="Try Again"
//       className="w-[414px] h-[92px]" 
//       />

    
//     </footer>
//   );
// };

// export default Footer;


