import type { ReactNode } from 'react';
import PropertyTypePopup from './popupMenu/PropertyTypesPopup';
import StayPopup from './popupMenu/StayPopup';
import SuperHostPopup from './popupMenu/SuperHostPopup';
import type { PopupType } from '../../../../types/popup';

const popupMap: Record<PopupType, ReactNode> = {
  location: <StayPopup />,
  superHost: <SuperHostPopup />,
  propertyType: <PropertyTypePopup />,
};

interface MobilePopupProps {
  type: PopupType;
}

const MobilePopup = ({ type }: MobilePopupProps) => {
  return <div className="items-center absolute bottom-20 right-0 left-0">{popupMap[type]}</div>;
};
export default MobilePopup;
