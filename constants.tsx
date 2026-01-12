
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: '5.8ghz', name: '5.8GHz Antennas', icon: 'router' },
  { id: '2.4ghz', name: '2.4GHz Antennas', icon: 'settings_input_antenna' },
  { id: 'amps', name: 'Amplifiers', icon: 'memory' },
  { id: 'acc', name: 'Accessories', icon: 'electric_bolt' },
];

export const TOP_PRODUCTS: Product[] = [
  {
    id: 'hg5817d',
    name: 'HG5817D',
    category: 'Sector Series',
    price: 89.00,
    spec: '17 dBi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvNPeVpYESmXYT95j9mxQOBKeOLR-KAA-W78-e0lrDfXMNj5m1lN7Twob_YdlXOidD4ax3M2dkPMoWog2EGIcF0GZqq24ctJGS9eQ2Kt3pcllT7gBg90YUylro1zhB1cvgUt5TgSPhFs0PKT8NUad5ZxXIVKq5qEvkPy_uKLRStIzJR1VFgaahNA9SMguD0QsjdJ-B_IRZe7lhT5l4F8NyE4CwWs4hv-M919omsuPWxQLIfcP8ZKx76GAzNT9cVa8DXuHFZe88gFA',
  },
  {
    id: 'hg5833d',
    name: 'HG5833D',
    category: 'Parabolic',
    price: 245.50,
    spec: '33 dBi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqLd2my_64Un_7_QXpQbaqgongH9vja1zOfz9W9FGzhiB0MgU56zi83KjBydyecZSak21ZZeFwHHo3k8KBeYSBESZg_-wBYo1liGtbUMrM84eW2kG-eGzYLPE2iahlTT8PZND1aWMOoX7y_bv8R9gEPTmkQ7k9j9eeDrlMXGvC99uMimGAeBDnkRqd2nM9urvl29wHbWJq5JizjGd-ctYcAhr6gsei2uZe6Bsoy-gdLczTxK69XAa0SJ2yFW4aOPH3VZFo-R_0UKE',
  },
];

export const PARTNERS = [
  { name: 'NET-WAVE', icon: 'radar' },
  { name: 'PRO-LINK', icon: 'signal_cellular_alt' },
  { name: 'WIFI-CORE', icon: 'stream' },
  { name: 'CONNECT-X', icon: 'hub' },
];
