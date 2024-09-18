import React from "react";

const Calculator = () => {
  const [value, setValue] = React.useState("");

  const getValue = (e) => {
    const newValue = e.target.value;
    if (
      ["+", "-", "*", "/"].includes(newValue) &&
      ["+", "-", "*", "/"].includes(value.slice(-1))
    ) {
      return;
    }
    setValue(value + newValue);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-4 gap-4">
          {/* Display */}
          <div className="col-span-4 bg-black text-white text-right p-4 text-2xl rounded">
            <input
              type="text"
              value={value}
              className="bg-black text-white text-right p-4 text-2xl rounded"
            />
          </div>

          {/* Number buttons */}
          <input
            type="button"
            value="7"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="8"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="9"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="/"
            className="bg-orange-600 text-white p-4 rounded"
            onClick={getValue}
          />

          <input
            type="button"
            value="4"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="5"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="6"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="*"
            className="bg-orange-600 text-white p-4 rounded"
            onClick={getValue}
          />

          <input
            type="button"
            value="1"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="2"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="3"
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="-"
            className="bg-orange-600 text-white p-4 rounded"
            onClick={getValue}
          />

          <input
            type="button"
            value="0"
            className="bg-gray-600 text-white p-4 rounded col-span-2"
            onClick={getValue}
          />
          <input
            type="button"
            value="."
            className="bg-gray-600 text-white p-4 rounded"
            onClick={getValue}
          />
          <input
            type="button"
            value="+"
            className="bg-orange-600 text-white p-4 rounded"
          />

          {/* Clear and equals */}
          <input
            type="button"
            value="C"
            className="bg-red-600 text-white p-4 rounded col-span-2"
            onClick={() => setValue("")}
          />
          <input
            type="button"
            value="="
            className="bg-green-600 text-white p-4 rounded col-span-2"
            onClick={(e) => setValue(eval(value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
