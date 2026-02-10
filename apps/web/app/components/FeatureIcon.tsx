"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Bus,
  Cable,
  Code2,
  Cog,
  Globe2,
  HeartPulse,
  Landmark,
  Layout,
  RadioTower,
  Smartphone,
  Zap
} from "lucide-react";

const iconMap = {
  bus: Bus,
  medical: HeartPulse,
  telecom: RadioTower,
  media: Smartphone,
  internet: Globe2,
  eu: Landmark,
  net: RadioTower,
  power: Zap,
  fiber: Cable,
  civil: Landmark,
  scada: Cog,
  responsive: BarChart3,
  custom: Cog,
  ui: Layout,
  code: Code2
} as const;

type FeatureIconName = keyof typeof iconMap;

export const FeatureIcon = ({ name }: { name: FeatureIconName }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="feature-icon-placeholder" aria-hidden="true" />;
  }

  const Icon = iconMap[name];
  return <Icon size={22} strokeWidth={1.6} />;
};
