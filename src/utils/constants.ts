import type { ComponentType } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { IoBedOutline } from 'react-icons/io5';
import { TbMedal } from 'react-icons/tb';
import type { PopupType } from '../types/popup';

export const NavItems = [
  { id: 1, label: 'all stays', key: 'allStays' },
  { id: 2, label: 'norway', key: 'norway' },
  { id: 3, label: 'finland', key: 'finland' },
  { id: 4, label: 'sweden', key: 'sweden' },
  { id: 5, label: 'switzerland', key: 'switzerland' },
] as const;

export type NavItemsKey = (typeof NavItems)[number]['key'];

interface MobileIconItem {
  label: string;
  icon: ComponentType;
  type: PopupType;
}

export const MobileIcon: MobileIconItem[] = [
  {
    label: 'Location',
    icon: IoLocationOutline,
    type: 'location',
  },
  {
    label: 'Super Host',
    icon: TbMedal,
    type: 'superHost',
  },
  {
    label: 'property Type',
    icon: IoBedOutline,
    type: 'propertyType',
  },
];

export const propertyTypes = [
  { label: '1–2 People', key: 'oneToTwoPeople' },
  { label: '3–4 People', key: 'threeToFourPeople' },
  { label: '5+ People', key: 'fivePlusPeople' },
] as const;

export type PropertyTypeKey = (typeof propertyTypes)[number]['key'];
