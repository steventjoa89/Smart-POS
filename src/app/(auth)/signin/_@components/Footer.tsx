import React from "react";

const Footer = () => {
  return (
    <footer className="py-12">
      <div className="container">
        <div className="flex flex-wrap mt-12 -mx-3">
          <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
            <p className="mb-0 text-slate-400">
              Copyright © {new Date().getFullYear()} Smart POS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
