import React from "react";
import "./button.scss";

export default function Button({
  children,
  color = "radial-gradient(49.67% 100% at 50% 100%, rgba(198, 255, 126, 0.4) 0%, rgba(105, 222, 167, 0) 100%), linear-gradient(270deg, rgba(105, 222, 167, 0.6) 0%, rgba(105, 222, 167, 0.42) 100%)",
  className,
  style,
  ...props
}) {
  console.log(color);
  return (
    <div className="button_box">
      <button
        className={`btn button px-5 py-2 ${className}`}
        style={{ background: color, ...style }}
        {...props}
      >
        {children}
      </button>
      <div className="glow"></div>
    </div>
  );
}
