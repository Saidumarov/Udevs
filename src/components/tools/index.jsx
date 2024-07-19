import { useState } from "react";
import { ToolsData } from "../../db/tools";

const Tools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  const tools = [
    "Frontend",
    "Backend",
    "Devops",
    "Testing",
    "UX/UI",
    "Infrastructure",
    "Mobile",
  ];

  const handleCheckboxChange = (tool) => {
    setSelectedTool(selectedTool === tool ? null : tool);
  };
  return (
    <section className="w-full h-full bg-[#f4f7ff]" id="tools">
      <div className="container py-20  max-[900px]:py-5">
        <div className="reveal">
          <h1 className="max-w-[800px] max-[900px]:text-[32px] max-[900px]:leading-[48px] text-[64px] leading-[64px] font-[600] text-[#1b5bf7]">
            Tools
          </h1>
          <div className="reveal">
            <div className="flex space-x-5 pt-16 max-[840px]:flex-wrap  max-[840px]:space-x-0 ">
              {tools.map((tool, i) => (
                <div
                  key={i}
                  className="flex items-center  max-[840px]:w-[40%] max-[840px]:mt-4"
                >
                  <input
                    id={i}
                    type="checkbox"
                    className="hidden peer"
                    checked={selectedTool === tool}
                    onChange={() => handleCheckboxChange(tool)}
                  />
                  <label
                    htmlFor={i}
                    className="flex  font-medium relative items-center cursor-pointer text-[16px]"
                  >
                    <span
                      className={`relative  w-6 h-6 inline-block mr-2 border-2 border-[#4f00fa] rounded-full peer-checked:bg-[#4f00fa] peer-checked:border-transparent ${
                        selectedTool === tool ? "bg-[#4f00fa]" : ""
                      }`}
                    ></span>
                    {tool}
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <div className="tools w-full">
              {ToolsData.map((el, i) => (
                <div
                  style={{
                    backgroundColor:
                      selectedTool === null
                        ? el.bg
                        : selectedTool === el.type
                        ? el.bg
                        : "",
                    opacity:
                      selectedTool === null
                        ? 1
                        : selectedTool === el.type
                        ? 1
                        : 0.4,
                  }}
                  key={i}
                  className={`tools_card  `}
                >
                  <img className="w-6 h-6 block" src={el.img} alt="" />
                  <span className="tools_text">{el.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
