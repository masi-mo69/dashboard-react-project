import React from "react";
import { Link } from "react-router-dom"; 

const DomainLinks = () => {
  return (
    <p className="mt-4 text-gray-700 text-right text-sm">
      Already have a domain?{" "}
      <Link 
        to="/transfer-domain" 
        className="text-[#673de6] font-bold hover:underline"
      >
        Transfer it to Hostinger
      </Link>{" "}
      or{" "}
      <Link 
        href="/buy_hosting" 
        className="text-[#673de6] font-bold hover:underline"
      >
        get a hosting plan
      </Link>{" "}
      to connect it to your website.
    </p>
  );
};

export default DomainLinks;
