import React, { useContext } from "react";
import ThemeContext, { ThemeContextType } from "@/context/ThemeContex";

const Fluorine = () => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  return (
    <div className="animate-rotate hover:pause cursor-pointer flex justify-center items-center">
      <div
        className={`absolute h-[70px] w-[70px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } bottom-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
      </div>
      <div
        className={`absolute h-[120px] w-[120px] rounded-full border ${
          theme === "dark"
            ? "border-bg_light_placeholder"
            : "border-bg_dark_placeholder"
        }`}
      >
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[-6px] left-[calc(50%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(20%_-_6px)] left-[calc(9%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(20%_-_6px)] right-[calc(9%_-_6px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(60%_-_5px)] left-[calc(1%_-_5px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(60%_-_5px)] right-[calc(1%_-_5px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(95%_-_5px)] left-[calc(27%_-_5px)]`}
        ></span>
        <span
          className={`absolute h-[12px] w-[12px] rounded-full ${
            theme === "dark"
              ? "bg-bg_light_placeholder"
              : "bg-bg_dark_placeholder"
          } top-[calc(95%_-_5px)] right-[calc(27%_-_5px)]`}
        ></span>
      </div>
    </div>
  );
};

export default Fluorine;
