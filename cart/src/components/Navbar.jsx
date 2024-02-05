import { FaCartPlus } from "react-icons/fa";
const Navbar = () => {

    return (
      <nav className="bg-[#645cff] h-[5rem] flex justify-center items-center">
        <div className="w-[90vw] max-w-[800px] flex justify-between items-center">
          <h4 className="text-white">useReducer</h4>
          <div className="block relative">
            <FaCartPlus className="text-white text-[2.25rem]" />
            <div className="amount-container">
              <p className="text-white text-[1.25rem]">2</p>
            </div>
          </div>
        </div>
      </nav>
    )
  };
  
  export default Navbar;
  