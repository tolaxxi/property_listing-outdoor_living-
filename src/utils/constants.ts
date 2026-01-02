import { IoLocationOutline } from 'react-icons/io5';
import { IoBedOutline } from 'react-icons/io5';
import { TbMedal } from 'react-icons/tb';

export const NavItems = [
  { id: 1, label: 'all stays' },
  { id: 2, label: 'norway' },
  { id: 3, label: 'finland' },
  { id: 4, label: 'sweden' },
  { id: 5, label: 'switzerland' },
];

export const MobileIcon = [
  {
    id: 1,
    label: 'Location',
    icon: IoLocationOutline,
  },
  {
    id: 2,
    label: 'Super Host',
    icon: TbMedal,
  },
  {
    id: 3,
    label: 'property Type',
    icon: IoBedOutline,
  },
];

export const propertyTypes = [{ label: '1-2 people' }, { label: '3-4 people' }, { label: '5+ people' }];
