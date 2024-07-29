// import { IoMdMenu } from "react-icons/io";
import headerImage from '../assets/Status Bar@2x.png'


const Header = () => {
  return (
    <header className="w-full h-11 px-6 py-2.5 flex items-center justify-between">
      {/* <div className="text-lg font-bold">VSell</div>
      <button className="text-lg w-[14px] h-[15px]"><IoMdMenu /></button> */}
      <img src={headerImage}
      alt="Try Again"
      className="w-[414px] h-[44px]  " />

    </header>
  );
};

export default Header;
