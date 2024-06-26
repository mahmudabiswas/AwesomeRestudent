import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 250;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => {
      window.removeEventListener("scroll", listenToScroll);
    };
  }, []);
  return (
    <>
      {visible && (
        <div className="flex justify-center items-center">
          <button
            className="btn text-4xl h-4 w-12 text-white shadow-xl rounded-s-lg
                  fixed bottom-24  right-8 z-50 flex justify-center items-center cursor-pointer btn-primary"
            onClick={goToBtn}
          >
            <FaArrowUp />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollTop;
