const SuperHostToggle = () => {
  return (
    <span className=" flex gap-2 items-center text-gray-400">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>

      <p>Super Host</p>
    </span>
  );
};
export default SuperHostToggle;
