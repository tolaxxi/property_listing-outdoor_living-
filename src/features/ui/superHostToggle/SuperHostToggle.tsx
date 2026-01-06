import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../app/store';
import { toggleSuperHost } from './superHostSlice';

const SuperHostToggle = () => {
  const isChecked = useSelector((state: RootState) => state.superHost.isChecked);
  const dispatch = useDispatch();

  return (
    <span className=" flex gap-2 items-center text-gray-400">
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={() => dispatch(toggleSuperHost())} />
        <span className="slider round"></span>
      </label>
      <p>Super Host</p>
    </span>
  );
};
export default SuperHostToggle;
