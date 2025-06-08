import React, { useRef, useEffect, useState } from "react";

const PlanSlider = ({ step, setStep, total }) => {
  const containerRef = useRef(null);
  const [trianglePos, setTrianglePos] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const buttons = containerRef.current.querySelectorAll("button");
    if (!buttons[step]) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const btnRect = buttons[step].getBoundingClientRect();

    // موقعیت مرکز دایره نسبت به container
    const centerX = btnRect.left - containerRect.left + btnRect.width / 2;
    setTrianglePos(centerX);
  }, [step, total]);

  return (
    <div className="relative w-full mt-6 mb-12">
      {/* دایره‌ها */}
      <div
        ref={containerRef}
        className="flex justify-between items-center h-3 px-4"
      >
        {[...Array(total)].map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-3 h-3 rounded-full transition duration-300 focus:outline-none ${
              i === step
                ? "bg-purple-600 scale-125 shadow-md"
                : i === 0 || i === total - 1
                ? "bg-gray-400"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* مثلث سه گوش پایین دایره‌ها */}
      <div
            className="absolute transition-all duration-300"
            style={{
                top: "calc(100% + 30px)",
                left: `${trianglePos - 8}px`,
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: "10px solid purple",
            }}
        />
    </div>
  );
};

export default PlanSlider;
