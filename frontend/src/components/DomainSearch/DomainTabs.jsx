import React from "react";
import { Sparkles } from "lucide-react";

const DomainTabs = ({ activeTab, onChange }) => {
  return (
    <div className="flex gap-2 sm:gap-4 border-b pb-2">
      {/* Tab 1 */}
      <button
        className={`px-4 py-2 rounded-t text-sm sm:text-base font-medium transition-all ${
          activeTab === "find"
            ? "text-purple-600 border-b-2 border-purple-600 bg-white"
            : "text-gray-500 hover:text-purple-500"
        }`}
        onClick={() => onChange("find")}
      >
        Find new domain
      </button>

      {/* Tab 2 - with icon */}
      <button
        className={`px-4 py-2 rounded-t text-sm sm:text-base font-medium flex items-center gap-2 transition-all relative ${
          activeTab === "ai"
            ? "text-purple-600 border-b-2 border-purple-600 bg-white"
            : "text-gray-500 hover:text-purple-500"
        }`}
        onClick={() => onChange("ai")}
      >
        <span className="w-4 h-4">
          <Sparkles className="w-full h-full text-purple-400" />
        </span>
        Generate using AI

        {/* Pulse indicator */}
        <span className="absolute top-0 right-0 translate-x-1 -translate-y-1">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
          </span>
        </span>
      </button>
    </div>
  );
};

export default DomainTabs;
