import "./App.css";
import Menu from "./Menu";
import PromptArea from "./PromptArea";
import { useState } from "react";
import axios from "axios";
import Footer from "./Footer";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  const [lastPrompt, setPrompt] = useState("");
  const [showStartup, setShowStartup] = useState(true);

  async function promptProcess(value) {
    console.log(value);
    setLoading(true);
    let data = await axios.post("https://sarazaiten.el.r.appspot.com/course", {
      prompt: value,
    });
    setLoading(false);
    //let data = value;
    console.log(data);
    setPrompt(data.data);
  }

  async function qryPromptProcess(value) {
    console.log(value);
    setLoading(true);
    let data = await axios.post("https://sarazaiten.el.r.appspot.com/usrQry", {
      prompt: value,
    });
    setLoading(false);
    //let data = value;
    console.log(data);
    setPrompt(data.data);
  }

  return (
    <div className="overflow-none bg-blue-100 min-h-screen">
      {showStartup && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-500"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          onAnimationComplete={() => setShowStartup(false)}
        >
          <motion.div
            className="flex flex-col items-center"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              className="text-white text-4xl font-bold mb-4"
              style={{ fontFamily: "Helvetica Neue, sans-serif" }}
            >
              SARAZAITEN
            </motion.h1>
          </motion.div>
        </motion.div>
      )}
      {!showStartup && (
        <div className="main flex">
          <Menu processPrompt={promptProcess} />
          <PromptArea
            newPrompt={lastPrompt}
            processPrompt={qryPromptProcess}
            loader={loading}
          />
        </div>
      )}
    </div>
  );
}

export default App;
