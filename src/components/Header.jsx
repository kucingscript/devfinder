import { FiSearch } from "react-icons/fi";
import { useState } from "react";

import Main from "./Main";

const Header = () => {
  const [input, setInput] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    setInput("");
  };

  return (
    <>
      <header className="bg-grayishBlue px-5 py-6 flex justify-between items-center rounded-md mt-6">
        <div>
          <FiSearch className="w-8 h-8 sm:w-9 sm:h-9 text-neonGreen" />
        </div>
        <form className="w-full ml-6" onSubmit={(e) => submitForm(e)}>
          <input
            type="text"
            placeholder="Find github username..."
            className="w-full py-2 px-3 outline-none rounded-md text-darkGrayishBlue bg-lightCyan placeholder:text-darkGrayishBlue placeholder:opacity-50"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
      </header>

      <Main input={input} />
    </>
  );
};

export default Header;
