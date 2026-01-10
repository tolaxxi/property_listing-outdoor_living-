import { useEffect, useRef, useState } from 'react';
import { MobileIcon } from '../../../../utils/constants';
import MobilePopup from './MobilePopup';
import type { PopupType } from '../../../../types/popup';

const MobileNav = () => {
  const [activeIconId, setActiveIconId] = useState<PopupType | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const togglePopup = (type: PopupType) => {
    setActiveIconId((prev) => (prev === type ? null : type));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveIconId(null);
      }
    };

    if (activeIconId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeIconId]);

  return (
    <nav className="md:hidden relative flex justify-center items-center flex-col w-[90%]" ref={navRef}>
      <div
        className=" border-gray-700
     w-full opacity-90 rounded-4xl px-5 py-2 bg-slate-900 border text-3xl text-gray-400 flex justify-between"
      >
        {MobileIcon.map(({ icon: Icon, type }) => (
          <div className="" key={type}>
            {activeIconId === type && <MobilePopup type={type} />}
            <button
              className={`${activeIconId === type && 'bg-gray-400 text-gray-950'} flex  px-7 rounded-4xl py-2`}
              onClick={() => togglePopup(type)}
            >
              <Icon />
            </button>
          </div>
        ))}
      </div>
    </nav>
  );
};
export default MobileNav;
