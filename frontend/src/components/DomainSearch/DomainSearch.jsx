import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

const DomainSearch = ({ onCheckResult }) => {
  const [domain, setDomain] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const handleSearch = async (e) => {
    e.preventDefault();

    const isDomainEmpty = !domain.trim();
    const domainRegex = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    if (isHome) {
      navigate("/domains/new");
      return;
    }

    if (isDomainEmpty) {
      setStatus("❗ لطفاً یک دامنه وارد کنید");
      if(onCheckResult) onCheckResult("", false);  // اگر خواستی، نتیجه را خالی ارسال کن
      return;
    }

    if (!domainRegex.test(domain)) {
      setStatus("❗ فرمت دامنه صحیح نیست. مثال: example.com");
      if(onCheckResult) onCheckResult("", false);
      return;
    }

    try {
      const res = await axios.get(
        `https://daroomokamel.ir/whmcs_api_wraper/public/api/whmcs/domain/check?domain=${domain}`
      );

      const availability = res?.data?.availability;

      if (!availability || !availability.status) {
        setStatus("❗ پاسخ نامعتبر از سرور دریافت شد");
        if(onCheckResult) onCheckResult("", false);
        return;
      }

      const status = availability.status;

      if (status === "available") {
        setStatus(`✅ دامنه آزاد است: ${domain}`);
        if(onCheckResult) onCheckResult(domain, true);  // اطلاع والد که دامنه آزاد است
      } else if (status === "unavailable") {
        setStatus(`❌ دامنه قبلاً ثبت شده: ${domain}`);
        if(onCheckResult) onCheckResult(domain, false);  // اطلاع والد که آزاد نیست
      } else {
        setStatus(`❓ وضعیت دامنه مشخص نیست: ${domain}`);
        if(onCheckResult) onCheckResult(domain, false);
      }
    } catch (err) {
      console.error("❌ خطا در جستجوی دامنه:", err);
      setStatus(`❌ خطا در جستجو: ${domain}`);
      if(onCheckResult) onCheckResult(domain, false);
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

      {status && (
        <pre className="mt-4 text-gray-700 whitespace-pre-wrap">{status}</pre>
      )}
    </div>
  );
};

export default DomainSearch;
