import React, { useContext } from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import useGetCategories from "../hooks/useGetCategories";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { categories, error } = useGetCategories();
  const { user } = useAuthContext();
  const [cart] = useContext(CartContext);
  const navigate = useNavigate();

  if (error) {
    return <div>{error}</div>;
  }
  const totalQuantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleCategoryClick = (category) => {
    navigate(`/products/category/${category}`);
  };

  const handleCartClick = () => {
    navigate("/shopcart");
  };

  const handleUserClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="shadow-md fixed w-full z-10">
      {/* header */}
      <div className="bg-blue-800  py-5">
        <div className="container flex justify-between items-center min-h-[60px]">
          <div className="hidden xl:block">
            <Link to={"/"} className="text-white text-2xl">
              E-SHOP
            </Link>
          </div>
          {/* dropdown movil */}
          <div className="xl:hidden">
            {error ? (
              <p>{error}</p>
            ) : (
              <ul className="flex flex-wrap gap-4 my-2 text-white">
                <li className="group relative cursor-pointer">
                  <p className="flex items-center gap-2 text-white text-xl">
                    E-SHOP
                    <span>
                      <IoIosArrowDown
                        className="transition-all
                                    duration-200 group-hover:rotate-180"
                      />
                    </span>
                  </p>

                  <div
                    className="absolute hidden group-hover:block
                                w-[150px] z-[9999] rounded-md bg-white text-black p-2 shadow"
                  >
                    <ul>
                      <li>
                        <Link
                          to={"/"}
                          className="inline-block w-full rounded-md p-2 hover:bg-amber-500/20 duration-300 cursor-pointer"
                        >
                          Home
                        </Link>
                      </li>

                      {categories.map((category) => (
                        <li key={category}>
                          <a
                            className="inline-block w-full rounded-md p-2 hover:bg-amber-500/20 duration-300 cursor-pointer"
                            onClick={() => handleCategoryClick(category)}
                          >
                            {category}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            )}
          </div>

          <div className="flex gap-3 ">
            {/* categories */}
            <div className="">
              {error ? (
                <p>{error}</p>
              ) : (
                <ul className="hidden xl:flex flex-wrap gap-4 my-2 text-white">
                  {categories.map((category) => (
                    <li key={category}>
                      <a
                        className="px-4 inline-block hover:text-yellow-400 duration-200 cursor-pointer"
                        onClick={() => handleCategoryClick(category)}
                      >
                        {category}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* search */}
            {/* <div className='group relative hidden sm:block'>
                        <input type="text" placeholder='search'
                        className='w-[200px] sm:w-[200px] 
                        group-hover:w-[250px] transition-all
                        duration-300 rounded-full border
                        border-gray-300 px-2 py-1
                        focus:outline-none focus:border-1
                        group-hover:border-pink-800'/>
                        <IoMdSearch className='text-gray-500
                        group-hover:text-pink-800 absolute top-1/2
                        -translate-y-1/2 right-3'
                        />
                    </div> */}

            {/* show user name if logged in */}
            {user && (
              <div className="hidden sm:flex text-white items-center">
                <span className="ml-2 text-yellow-400 ">Hello! {user.email.split("@")[0]}</span>
              </div>
            )}
            {/* order button */}
            <div className="relative">
              <button
                className="text-white py-2 px-6 rounded-full h-full
                    group bg-gradient-to-r from-amber-500 to-yellow-400  
                    w-[70px]  hover:w-[110px] transition-all duration-300
                    flex items-center gap-3 overflow-hidden"
                onClick={handleCartClick}
              >
                <span
                  className="cart-counter hidden
                    group-hover:block transition-all duration-200
                    drop-shadow cursor-pointer"
                >
                  Cart
                </span>
                <FaCartShopping />
              </button>
              {totalQuantity > 0 && (
                <span className="cart-counter absolute bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full -top-2 right-0 ">
                  {totalQuantity}
                </span>
              )}
            </div>

            {/* user button */}
            <button
              className="text-white py-2 px-6 rounded-full
                     group bg-gradient-to-r from-amber-500 to-yellow-400  
                     w-[70px]  hover:w-[120px] transition-all duration-300
                     flex items-center gap-3 overflow-hidden"
              onClick={handleUserClick}
            >
              <span
                className="hidden
                      group-hover:block transition-all duration-200
                      drop-shadow cursor-pointer"
              >
                {user ? "Profile" : "Login"}
              </span>
              <FaUser />
            </button>
            {/* <CurrencyButton/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
