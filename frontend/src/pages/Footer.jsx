import React from 'react';
import './footer.css';

export default function Footer() {
  return (
    <footer className="app-footer">
      &copy; {new Date().getFullYear()} Monkey & River Hackathon. All rights reserved.
    </footer>
  );
}