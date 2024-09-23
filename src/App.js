import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isHover, setIsHover] = useState(false);
  const [totalSales, setIsTotalSales] = useState(2);
  return (
    <div>
      <motion.button
        className="flex items-center gap-2 px-6 py-3 bg-[#2d2d2d] rounded-xl shadow-md z-20"
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
      >
        <span className="font-semibold">Checkout</span>
        <div className="flex items-center justify-center relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="14"
            width="15.75"
            viewBox="0 0 576 512"
          >
            <path
              fill="#fff"
              d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
            />
          </svg>
          {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <motion.div
            className="absolute bottom-[5px] right-[-7px]"
            animate={{ opacity: isHover ? 0 : 1 }}
            transition={{ ease: "easeInOut", duration: 0.4 }}
          >
            <span className="text-xs font-semibold">{totalSales}</span>
          </motion.div>
        </div>
        <motion.div
          className="bg-[#909090ad] font-semibold flex justify-center items-start w-[139px] rounded-t-xl absolute -z-10"
          initial={{ height: "0px", opacity: 0 }}
          animate={{
            height: isHover ? "60px" : "0px",
            opacity: 1,
            transform: "translate(-17.5%, -50%)",
          }}
          transition={{ ease: "easeInOut", duration: 0.4 }}
        >
          <span className="mt-2">{totalSales} Items in cart</span>
        </motion.div>
      </motion.button>
    </div>
  );
}

export default App;
