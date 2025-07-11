import React, { useState } from "react";

export default function NewDomain() {
  const [activeTab, setActiveTab] = useState("find");
  const [domain, setDomain] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  const handleGenerate = () => {
    if (!description.trim()) {
      setError("Fill in this field");
    } else {
      setError("");
      // اینجا کد فراخوانی API یا عملیات تولید دامین
      console.log("Generate domains using AI for:", description);
    }
  };

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="p-8 max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">
          {activeTab === "find" ? "Get a New Domain" : "Generate domain using AI"}
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            onClick={() => setActiveTab("find")}
            className={`flex items-center gap-2 px-4 py-2 rounded 
              ${activeTab === "find" 
                ? "bg-purple-600 text-white" 
                : "border border-purple-600 text-purple-600 hover:bg-purple-50"} transition`}
          >
            Find new domain
          </button>
          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 px-4 py-2 rounded 
              ${activeTab === "ai" 
                ? "bg-purple-600 text-white" 
                : "border border-purple-600 text-purple-600 hover:bg-purple-50"} transition`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="w-5 h-5"
            >
              <path d="M18.3 8.1251L17.225 5.6251L14.625 4.4751L17.225 3.3501L18.3 0.975098L19.375 3.3501L21.975 4.4751L19.375 5.6251L18.3 8.1251ZM18.3 23.0001L17.225 20.6001L14.625 19.4751L17.225 18.3501L18.3 15.8251L19.375 18.3501L21.975 19.4751L19.375 20.6001L18.3 23.0001ZM7.325 19.1501L5.025 14.2251L0 11.9751L5.025 9.7251L7.325 4.8251L9.65 9.7251L14.65 11.9751L9.65 14.2251L7.325 19.1501Z"></path>
            </svg>
            Generate domain using AI
          </button>
        </div>

        {activeTab === "find" && (
          <>
            <p className="text-gray-600 mb-4 text-center">
              Type your desired domain name into the domain checker search bar and find out if it’s available instantly!
            </p>
            <div className="flex justify-center items-center gap-2 mb-8 max-w-lg mx-auto">
              <input
                type="text"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                placeholder="Enter your desired domain name"
                className="flex-1 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-purple-600"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-500 transition">
                Search
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {[
                { tld: ".com", price: "£4.99" },
                { tld: ".net", price: "£9.99" },
                { tld: ".io", price: "£25.99" },
                { tld: ".org", price: "£6.99" },
                { tld: ".online", price: "£1.99" },
                { tld: ".shop", price: "£0.99" },
              ].map(({ tld, price }) => (
                <div key={tld} className="text-center">
                  <strong className="text-purple-600 text-lg">{tld}</strong>
                  <p className="text-gray-600">{price}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "ai" && (
          <>
            <p className="text-gray-600 mb-4 text-center">
              Find unique domain name ideas that reflect your brand identity
            </p>
            <div className="mb-4 max-w-xl mx-auto">
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder='Write a short description about your project, for example: “Non-profit organization that helps plant trees”.'
                className={`w-full border rounded px-4 py-2 h-24 focus:outline-none ${
                  error ? "border-red-500" : "border-gray-300 focus:border-purple-600"
                }`}
              ></textarea>
              {error && (
                <p className="text-red-500 text-sm mt-1">Fill in this field</p>
              )}
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleGenerate}
                className="flex items-center gap-2 bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-500 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                >
                  <path d="M18.3 8.1251L17.225 5.6251L14.625 4.4751L17.225 3.3501L18.3 0.975098L19.375 3.3501L21.975 4.4751L19.375 5.6251L18.3 8.1251ZM18.3 23.0001L17.225 20.6001L14.625 19.4751L17.225 18.3501L18.3 15.8251L19.375 18.3501L21.975 19.4751L19.375 20.6001L18.3 23.0001ZM7.325 19.1501L5.025 14.2251L0 11.9751L5.025 9.7251L7.325 4.8251L9.65 9.7251L14.65 11.9751L9.65 14.2251L7.325 19.1501Z"></path>
                </svg>
                Generate
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
