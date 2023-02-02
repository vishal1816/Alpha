"use client";

import { motion } from "framer-motion";


import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const handleNavigation = () => {
    const navbuttons = document.getElementById("navbarCollapse");
    if (navbuttons.classList.contains("show")) {
      navbuttons.classList.remove("show");
      navbuttons.classList.add("collapsing");
    } else {
      navbuttons.classList.remove("collapsing");
      navbuttons.classList.add("show");
    }
  };
  return (
    <div>
      <nav className="navbar  navbar-dark py-3 m-4 ">
      <div className="absolute w-[50%] inset-0 gradient-01" />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    ></div>
      {/* <img
        src="/logo-new.png"
        alt="search"
        className="w-[150px] h-[30px] object-contain"
      /> */}
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        Alpha Code Labs
      </h2>
        <button
          className="navbar-toggler"
          onClick={handleNavigation}
          type="button"
          //   data-toggle="collapse"
          //   data-target="#navbarCollapse"
          //   aria-controls="navbarCollapse"
          //   aria-expanded="false"
          //   aria-label="Toggle navigation"
        >
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
        </button>
        <div className=" navbar-collapse bg-dark" id="navbarCollapse">
          <ul className="navbar-nav  text-white">
            <li className="nav-item active">
              <a className="nav-link" href="#">
              About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Operating Models for Founders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Submit Interest
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Early Investors and Mentors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Our Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
              Our Partners
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};


  // <motion.nav
  //   variants={navVariants}
  //   initial="hidden"
  //   whileInView="show"
  //   className={`${styles.xPaddings} py-8 relative`}
  // >
  //   <div className="absolute w-[50%] inset-0 gradient-01" />
  //   <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
  //     <img
  //       src="/logo-new.png"
  //       alt="search"
  //       className="w-[150px] h-[30px] object-contain"
  //     />
  //     <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
  //       Alpha Code Labs
  //     </h2>

  //     <img
  //       src="/menu.svg"
  //       alt="menu"
  //       className="w-[24px] h-[24px] object-contain"
  //     />
  //   </div>
  //   <Secnav />
  // </motion.nav>

  

export default Navbar;

// import React from "react";

// import styles from "../styles";
// import { navVariants } from "../utils/motion";

// const Secnav = () => {
//   const handleNavigation = () => {
//     const navbuttons = document.getElementById("navbarCollapse");
//     if (navbuttons.classList.contains("show")) {
//       navbuttons.classList.remove("show");
//       navbuttons.classList.add("collapsing");
//     } else {
//       navbuttons.classList.remove("collapsing");
//       navbuttons.classList.add("show");
//     }
//   };
//   return (
//     <div>
//       <nav className="navbar  navbar-dark py-3 m-4 ">
//       <div className="absolute w-[50%] inset-0 gradient-01" />
//     <div
//       className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
//     ></div>
//       <img
//         src="/logo-new.png"
//         alt="search"
//         className="w-[150px] h-[30px] object-contain"
//       />
//       <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
//         Alpha Code Labs
//       </h2>
//         <button
//           className="navbar-toggler"
//           onClick={handleNavigation}
//           type="button"
//           //   data-toggle="collapse"
//           //   data-target="#navbarCollapse"
//           //   aria-controls="navbarCollapse"
//           //   aria-expanded="false"
//           //   aria-label="Toggle navigation"
//         >
//       <img
//         src="/menu.svg"
//         alt="menu"
//         className="w-[24px] h-[24px] object-contain"
//       />
//         </button>
//         <div className=" navbar-collapse bg-dark" id="navbarCollapse">
//           <ul className="navbar-nav  text-white">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//               About Us
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//               Operating Models for Founders
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//               Submit Interest
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//               Early Investors and Mentors
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//               Our Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//               Our Partners
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Secnav;

