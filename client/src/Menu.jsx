import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Menu(props) {
  const [menuItems, setMenuItems] = useState([]);
  const [showMenu, setShowMenu] = useState(false);

  async function getMenuItem() {
    let data = await axios.get("https://sarazaiten.el.r.appspot.com/");
    setMenuItems(data.data.slice(0, 13));
  }

  function sendPrompt(e) {
    console.log(e.target.value);
    props.processPrompt(e.target.value + " in C++"); // Remove language choice
    setShowMenu(false);
  }

  useEffect(() => {
    getMenuItem();
  }, []);

  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-blue-400">
        <header className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center">
            <button
              className="block md:hidden py-1 px-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-sm transition-colors "
              onClick={() => setShowMenu(!showMenu)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
            <h1
              className="hidden md:block text-white text-2xl font-bold "
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              SARAZAITEN
            </h1>
          </div>
        </header>
      </div>
      <div
        className={`${
          showMenu ? "block" : "hidden"
        } absolute md:relative md:block top-0 left-0 z-10 mainMenuStyle max-w-32 mx-auto p-4 bg-blue-100 rounded-lg shadow-lg ${
          showMenu ? "mt-12" : ""
        }`}
      >
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <button
                value={item.prompt}
                onClick={sendPrompt}
                className="block w-full py-2 px-4 bg-white hover:bg-blue-200 text-blue-800 text-left transition-colors rounded-lg shadow-sm"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
