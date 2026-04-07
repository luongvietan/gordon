import type { ComponentProps } from "react";
import {
  ArrowRight,
  Bug,
  CheckCircle2,
  DoorOpen,
  Egg,
  Leaf,
  Menu,
  Recycle,
  Sprout,
  Trash2,
  Truck,
  Utensils,
  Wind,
  Wrench,
  X,
} from "lucide-react";

type Props = Omit<ComponentProps<"svg">, "name"> & {
  name: string;
  size?: number;
};

export function LandingIcon({ name, size = 24, className, ...rest }: Props) {
  const Icon = (() => {
    switch (name) {
      // Trust strip
      case "eco":
        return Leaf;
      case "nutrition":
        return Utensils;
      case "cycle":
        return Recycle;
      case "conveyor_belt":
        return Truck;

      // How it works
      case "auto_delete":
        return Trash2;
      case "bug_report":
        return Bug;
      case "restaurant":
        return Utensils;
      case "grass":
        return Sprout;

      // Features
      case "sensor_door":
        return DoorOpen;
      case "nest_eco_leaf":
        return Egg;
      case "water_drop":
        return Utensils;
      case "air":
        return Wind;
      case "engineering":
        return Wrench;
      case "local_shipping":
        return Truck;

      // Generic UI
      case "check_circle":
        return CheckCircle2;
      case "menu":
        return Menu;
      case "close":
        return X;
      case "arrow_right":
        return ArrowRight;
      default:
        return Leaf;
    }
  })();

  return <Icon width={size} height={size} className={className} aria-hidden="true" {...rest} />;
}

