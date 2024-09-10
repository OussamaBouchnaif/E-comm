import Image from "next/image";
import React from "react";
import logo from "../../images/logo.png";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import CartIcon from "../../images/cartIcon.png";
import Link from "next/link";

export const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 px-4">
          
          {/* Logo */}
          <Link href={'/'} className="header-item justify-center">
            <Image className="w-28 object-cover mt-1" src={logo} alt="logoImg" />
          </Link>
          
          {/* Location */}
          <div className="header-item hidden xl:inline-flex gap-1">
            <FaLocationDot />
            <div>
              <p>Deliver to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
            <input
              className="search-input"
              type="text"
              placeholder="Search next_amazon_yt products"
            />
            <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
              <HiOutlineSearch />
            </span>
          </div>
          
          {/* Account & Lists */}
          <div className="header-text header-item">
            <p>Hello</p>
            <p className="text-white font-bold flex items-center">
              Account & Lists <BiCaretDown />
            </p>
          </div>
          
          {/* Marked & Favorite */}
          <div className="header-text header-item">
            <p>Marked</p>
            <p>& Favorite</p>
          </div>

          {/* Cart Icon */}
          <Link href={'/cart'} className="header-item relative">
            <Image className="w-auto object-cover h-8" src={CartIcon} alt="CartIcon" />
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="absolute text-amazon_yellow text-xs top-2 left-[29px] font-semibold">0</span>
          </Link>

        </div>
      </div>
    </>
  );
};

