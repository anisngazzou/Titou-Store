
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = ({ placeholder, className = '', ...props }: any) => {
  return (
    <div className="relative w-8/12  ">
      <input
        type="text"
        placeholder={placeholder}
        className={`pl-16 pr-8 py-2 rounded-full focus:outline-none ${className}`}
        {...props}
      />
      <IoSearchSharp className='w-16 absolute top-0 px-5 rounded-full h-full  hover:bg-[#b2ac9c7d] hover:top-0 ' />
    </div>
  );
};

export default SearchInput;
