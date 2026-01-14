import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "../data/currencies";

interface PortalModalProps {
  currency: string;
  setCurrency: (value: string) => void;
  texts: {
    currency: string;
    chooseCurrencyError: string;
    select: string;
  };
  closePortal: () => void;
}

export default function PortalModal({
  currency,
  setCurrency,
  texts,
  closePortal,
}: PortalModalProps) {
  const handleClose = () => {
    if (currency === texts.currency) {
      toast(texts.chooseCurrencyError, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        style: {
          backgroundColor: "red",
          color: "white",
          fontFamily: "Poppins",
        },
      });
    } else {
      closePortal();
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center">
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable={false}
        theme="colored"
      />
      <div className="absolute inset-0 bg-black/60"></div>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-11/12 max-w-md bg-white text-black rounded-lg p-6 z-10"
      >
        <form className="flex flex-col gap-4">
          <label className="font-semibold text-xl italic">{texts.currency}:</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border border-gray-300 rounded px-3 py-4 outline-none cursor-pointer"
          >
            {data.map((item) => (
              <option key={item.currency} value={item.currency}>
                {item.currency}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={handleClose}
            className="bg-black hover:bg-green-700 rounded-md cursor-pointer transition-colors text-white px-4 py-4 mt-1"
          >
            {texts.select}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
