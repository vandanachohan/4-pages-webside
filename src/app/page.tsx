import Link from "next/link";
import React from 'react';

export default function Home() {
  return (
    <div>
      <div>
        <ul>
          <li>Home</li>
          <li>
            <Link href="/about" target="_blank">about</Link>
          </li>
          <br />
          <li>
            <Link href="/contact" target="_blank">contact</Link>
          </li>
          <br />
          <li>
            <Link href="/destinations" target="_blank">destinations</Link>
          </li>
        </ul>
      </div>
      <h1>
        <u>Welcome to Secret Escapes</u>
      </h1>
      <p>Discover the world&apos;s best-kept secrets</p> 
    </div>
  );
}
