import React from 'react';

const DotSwitcher = ({ count, activeIndex, onChange }) => {
  return (
    <div className="flex justify-center gap-2 mb-4">
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <button
            key={i}
            className={`w-4 h-4 rounded-full ${i === activeIndex ? 'bg-purple-600' : 'bg-gray-300'}`}
            onClick={() => onChange(i)}
          />
        ))}
    </div>
  );
};

export default DotSwitcher;
