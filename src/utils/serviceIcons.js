import {
  ShieldCheck,
  Wind,
  ChevronsUpDown,
  Palette,
  HardHat,
  Zap,
  Droplets,
  Paintbrush,
  Home,
  Building2,
  Layers,
  Wrench,
  Grid,
  Hammer,
  Maximize2,
  Box,
  Utensils,
  CloudRain,
  Cpu,
  Flame,
  Fan
} from 'lucide-react';

export const SERVICE_ICON_MAP = {
  ShieldCheck,
  Wind,
  ChevronsUpDown,
  Palette,
  HardHat,
  Zap,
  Droplets,
  Paintbrush,
  Home,
  Building2,
  Layers,
  Wrench,
  Grid,
  Hammer,
  Maximize2,
  Box,
  Utensils,
  CloudRain,
  Cpu,
  Flame,
  Fan
};

export const getServiceIcon = (iconName) => {
  return SERVICE_ICON_MAP[iconName] || Wrench;
};

