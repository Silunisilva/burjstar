import React, { useState, useEffect } from 'react';

// Dynamic luxury counter that rolls smoothly and locks into the final number
function RollingNumber({ target, suffix = '', duration = 1800 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp = null;
    let animId = null;
    const finalTarget = Number(target) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Smooth luxury ease-out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = Math.floor(ease * finalTarget);

      setCount(val);

      if (progress < 1) {
        animId = window.requestAnimationFrame(step);
      } else {
        setCount(finalTarget);
      }
    };

    animId = window.requestAnimationFrame(step);
    return () => {
      if (animId) window.cancelAnimationFrame(animId);
    };
  }, [target, duration]);

  return (
    <span className="text-[#D89828] font-serif font-black drop-shadow-[0_2px_12px_rgba(216,152,40,0.3)]">
      {count}{suffix}
    </span>
  );
}

export default function HeroStats() {
  const stats = [
    {
      id: 1,
      target: 15,
      suffix: "+",
      title: "Years in Abu Dhabi",
      subtitle: "Engineering & Contracting Excellence"
    },
    {
      id: 2,
      target: 450,
      suffix: "+",
      title: "Projects Completed",
      subtitle: "Luxury Villas & Commercial Fit-Outs"
    },
    {
      id: 3,
      target: 98,
      suffix: "%",
      title: "Client Satisfaction",
      subtitle: "Verified On-Time Delivery Rate"
    },
    {
      id: 4,
      target: 100,
      suffix: "%",
      title: "In-House Engineers",
      subtitle: "ADM Licensed • Zero Outsourcing"
    }
  ];

  return (
    <div className="relative z-30 max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
      {/* Sleek Minimalist Luxury Glass Container */}
      <div className="bg-white/95 backdrop-blur-xl border-2 border-neutral-200 hover:border-[#D89828]/70 rounded-2xl sm:rounded-3xl py-4 sm:py-7 px-4 sm:px-12 shadow-[0_20px_50px_rgba(0,0,0,0.08),0_0_25px_rgba(216,152,40,0.08)] transition-all duration-500">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-3 sm:gap-8 sm:divide-x divide-neutral-200">
          {stats.map((st, idx) => (
            <div
              key={st.id}
              className={`p-1.5 sm:p-0 sm:px-6 first:pl-0 last:pr-0 text-left flex flex-col justify-center group ${idx % 2 === 1 ? 'pl-2 sm:pl-6 border-l border-neutral-200 sm:border-l-0' : 'pr-2 sm:pr-6'
                } ${idx >= 2 ? 'pt-3 sm:pt-0 border-t border-neutral-200 sm:border-t-0' : ''}`}
            >
              {/* Dynamic Number Counter */}
              <div className="text-2xl sm:text-4xl lg:text-5xl tracking-tight mb-0.5 sm:mb-1 select-none">
                <RollingNumber target={st.target} suffix={st.suffix} duration={2000} />
              </div>

              {/* Title */}
              <h4 className="text-[11px] sm:text-sm font-bold text-neutral-900 tracking-wide group-hover:text-[#B57C1C] transition-colors leading-tight">
                {st.title}
              </h4>

              {/* Subtitle */}
              <p className="text-[10px] sm:text-xs text-neutral-600 font-medium mt-0.5 sm:mt-1 leading-snug">
                {st.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
