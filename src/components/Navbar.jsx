// import React from 'react';
// //mport Logo from '../components/logo.png'; // ✅ Ensure this path is correct
// //import Logo from './logo.png'
// import { BrowserRouter as  Link } from "react-router-dom";
// import Logo from '../../src/logo.png'
// //import AdminLogin from './AdminLogin';
// const Navbar = () => {
//   return (
//     <div className=''>
//            <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#home">
//             <img src={Logo} alt="Logo" width={100} />
//           </a>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNavAltMarkup"
//             aria-controls="navbarNavAltMarkup"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//             <div className="navbar-nav text-white" id="navarrange">
//               {/* <a className="nav-link active" aria-current="page" href="/">
//                 Home
//               </a> */}
//               <Link className="nav-link active" aria-current="page" to="/">
//   Home
// </Link>
//               <a className="nav-link" href="#service">
//                 Products
//               </a>
//               <a className="nav-link" href="#product">
//                 Services
//               </a>
//               <a className="nav-link" href="#about">
//                 About
//               </a>
//               <a className="nav-link" href="#contactme">
//                 Contact
//               </a>

//               {/* Use Link instead of <a> for React Router */}
//               <Link className="nav-link" to="/admin">
//                 Admin
//               </Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Routes should be outside nav */}
//       {/* <Routes>
//         <Route path="/admin" element={<AdminLogin />} />
//       </Routes>
//     </Router> */}
//     </div>
//   );
// };

// export default Navbar;


// import React from 'react';
// //import { Link } from "react-router-dom";
// //import Logo from './logo.png'; // adjust path to your file
// import Logo from '../logo.png'
// //import { Link } from "react-router-dom"; // ✅ correct

// import { BrowserRouter as  Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
//       <div className="container-fluid">
//         <a className="navbar-brand" href="#home">
//           <img src={Logo} alt="Logo" width={100} />
//         </a>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav text-white" id="navarrange">
//             <Link className="nav-link active" aria-current="page" to="/">
//               Home
//             </Link>
//             <a className="nav-link" href="#service">Products</a>
//             <a className="nav-link" href="#product">Services</a>
//             <a className="nav-link" href="#about">About</a>
//             {/* <Link className="nav-link" to="/admin">Admin</Link> */}
//             <a className="nav-link" href="#contactme">Contact</a>
//             <Link className="nav-link text-dark" to="/admin">Admin</Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import Logo from '../logo.png';
import { Link } from "react-router-dom"; // ✅ correct import

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#home">
          <img src={Logo} alt="Logo" width={100} />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav text-white" id="navarrange">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <a className="nav-link" href="#service">Products</a>
            <a className="nav-link" href="#product">Services</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#contactme">Contact</a>
            <Link className="nav-link text-dark" to="/admin">Admin</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
