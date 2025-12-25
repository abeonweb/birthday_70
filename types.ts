import { StaticImageData } from "next/image";

export interface ProgramEvent {
  time: string;
  title: string;
  description?: string;
  icon: "clock" | "mic" | "cake" | "music" | "camera" | "group" | "prayer";
}

export interface PhotoGroup {
  category: string;
  photos: Photo[];
}

export interface Photo {
  id: string;
  url: StaticImageData;
  caption?: string;
}

export interface SpecialMention {
  role: string;
  name: string;
  note?: string;
}
