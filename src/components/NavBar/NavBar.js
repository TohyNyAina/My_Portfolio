import React from 'react';
import {Link} from "react-router-dom";

export default function NavBar() {
  return (
    <div>NavBar
      <nav>
                                <Link as={Link} to="/home">Home</Link>
                                
                                <Link as={Link} to="/about">About</Link>
                                
                                <Link as={Link} to="/contact">Contact</Link>
                                <Link as={Link} to="/signin">Signin</Link>

                            </nav>
    </div>
  )
}
