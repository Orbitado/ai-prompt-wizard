const Dropdown = () => {
  return (
    <>
      <label title="Choose an AI model" className="dropdown">
        <span className="font-semibold text-sm">Select AI model</span>
      </label>
      <select
        title="Choose an AI model"
        defaultValue="Choose an AI model"
        className="border-gray-300 p-2 border rounded-[0.25rem] w-full text-sm"
      >
        <option value="Choose an AI model" disabled className="dropdown-item">
          Choose an AI model
        </option>
        <option value="ChatGPT" className="dropdown-item">
          ChatGPT
        </option>
        <option value="Dall-E" className="dropdown-item">
          Dall-E
        </option>
        <option value="MidJourney" className="dropdown-item">
          MidJourney
        </option>
      </select>
    </>
  );
};

export default Dropdown;
