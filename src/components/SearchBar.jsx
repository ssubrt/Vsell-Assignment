import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="w-11/12 mx-auto mt-2.5 relative">
        <CiSearch className="absolute top-4 left-3 text-gray-500 w-[18px] h-[18px] " />
           
      <input
        type="text"
        placeholder="Search Store"
        className="w-full h-12 rounded-lg px-4 pl-12 border"
      />


        
     
    </div>
  );
};

export default SearchBar;
