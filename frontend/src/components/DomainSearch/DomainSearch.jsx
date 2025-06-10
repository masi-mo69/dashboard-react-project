import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";

const DomainSearch = () => {
  const [domain, setDomain] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault(); // جلوگیری از رفرش شدن صفحه

    try {
      const res = await axios.get(
        `https://6846aa507dbda7ee7aafddfa.mockapi.io/api/plans/domains`
      );

      const matched = res.data.find(
        (item) => item.domain.toLowerCase() === domain.toLowerCase()
      );

      if (matched) {
        if (matched.available) {
          setStatus("✅ دامنه آزاد است");
        } else {
          setStatus("❌ دامنه قبلاً ثبت شده");
        }
      } else {
        setStatus("❓ دامنه در لیست یافت نشد");
      }
    } catch (err) {
      console.error("خطا در جستجوی دامنه:", err);
      setStatus("❌ خطا در جستجو");
    }
  };

  return (
    <div className="mx-auto py-3">
      <form onSubmit={handleSearch}>
        <div className="flex flex-col sm:flex-row items-stretch gap-3">
          <div className="relative flex-grow">
            <fieldset
              className={`rounded-md p-1 relative border ${
                isFocused ? "border-red-500" : "border-gray-300"
              } transition-colors`}
            >
              {(isFocused || domain !== "") && (
                <legend className="absolute right-4 -top-3 bg-white text-sm px-1 text-gray-500 transition-all duration-300">
                  Enter your desired domain name
                </legend>
              )}
              <div className="flex items-center">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder={isFocused ? "" : "example.com"}
                  className="w-full p-2 pl-10 border-none focus:ring-0 outline-none text-gray-700"
                />
              </div>
            </fieldset>
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* نتیجه */}
      {status && (
        <p className="mt-4 text-lg font-medium text-gray-700">{status}</p>
      )}
    </div>
  );
};

export default DomainSearch;
