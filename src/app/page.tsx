import Link from "next/link";import React from 'react';


 export default function Home() {
   return (
    <div>
      <div>
         <ul>
           <li>
             Home
           </li>
           <li>
             <Link href="/about"target="-blank">about</Link>
             </li>
             <br/>
            <li>
           <Link href="/contact" target="-blank">contact</Link>
          </li>
          <br/>
          <li>
           <Link href="/destinations" target="-blank">destinations</Link>
          </li>

         </ul>
       </div>
       <h1>
       <h1><u>Welcome to Secret Escapes</u></h1>
      <p>Discover the world's best-kept secrets</p>
      </h1>
    </div>
  );
}











