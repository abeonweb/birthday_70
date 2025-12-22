import React from "react";
import { Clock, Mic, Cake, Music, Camera, Heart, Users } from "lucide-react";
import { ProgramEvent, PhotoGroup, SpecialMention } from "@/types";
import Photo1 from "@/public/photo_1.jpg"
import Photo2 from "@/public/photo_2.jpg"
import Photo3 from "@/public/photo_3.jpg"
import Photo4 from "@/public/photo_4.jpg"
import Photo5 from "@/public/photo_5.jpg"
import Photo6 from "@/public/photo_6.jpg"
import Photo7 from "@/public/photo_7.jpg"
import Photo8 from "@/public/photo_8.jpg"
import Photo9 from "@/public/photo_9.jpg"
import Photo10 from "@/public/photo_10.jpg"
import Photo11 from "@/public/photo_11.jpg"
import Photo12 from "@/public/photo_12.jpg"
import Photo13 from "@/public/photo_13.jpg"
import Photo14 from "@/public/photo_14.jpg"
import Photo15 from "@/public/photo_15.jpg"
import Photo16 from "@/public/photo_16.jpg"



export const DAD_NAME = "Abiodun Oke";

export const PROGRAM_DATA: ProgramEvent[] = [
  {
    time: "2:00 PM",
    title: "Welcome all guests",
    description: "Guests arrive and enjoy refreshments on the terrace.",
    icon: "music",
  },
  {
    time: "2:30 PM",
    title: "Grand entrance of the Celebrant",
    description:
      "Abiodun Oke makes his grand entrance to celebrate his 70th birthday.",
    icon: "clock",
  },
  {
    time: "3:00 PM",
    title: "Opening prayer",
    description: "A blessing and prayer to commence the celebration.",
    icon: "prayer",
  },
  {
    time: "3:30 PM",
    title: "Celebrant thanksgiving dance with his wife",
    description: "A special dance expressing gratitude with his wife.",
    icon: "music",
  },
  {
    time: "4:00 PM",
    title: "Celebrant dance with various groups",
    description: "Dancing with different groups of family and friends.",
    icon: "group",
  },
  {
    time: "4:30 PM",
    title: "Tributes",
    description: "Speeches and tributes from family and lifelong friends.",
    icon: "mic",
  },
  {
    time: "5:00 PM",
    title: "Cutting of the cake & Photo Session",
    description:
      "Singing 'Happy Birthday' and cutting the cake, followed by photos.",
    icon: "camera",
  },
  {
    time: "5:30 PM",
    title: "Toast to the Celebrant",
    description: "Raising glasses in honor of Abiodun Oke.",
    icon: "mic",
  },
  {
    time: "6:00 PM",
    title: "Celebrant dance with the children and grandchildren",
    description: "Special dance with the younger generation.",
    icon: "music",
  },
  {
    time: "6:30 PM",
    title: "Celebrant dance with various groups cont'd",
    description: "Continuing dances with various groups.",
    icon: "group",
  },
  {
    time: "7:00 PM",
    title: "Celebrant's Speech",
    description: "Abiodun Oke shares his thoughts and reflections.",
    icon: "mic",
  },
  {
    time: "7:30 PM",
    title: "Dance! Dance!! Dance!!",
    description: "Open dancing and celebration for all guests.",
    icon: "music",
  },
];

export const PHOTO_DATA: PhotoGroup[] = [
  {
    category: "Gallery",
    photos: [
      {
        id: "c1",
        url: Photo1,
        thumbnailUrl: "/public/photo_1",
        caption: "Abiodun Oke at 5 years old, 1959",
      },
      {
        id: "c2",
         url: Photo2,
        thumbnailUrl: "/public/photo_2",
        caption: "School sports day champion",
      },
      {
        id: "c3",
        url: Photo3,
        thumbnailUrl: "https://picsum.photos/id/12/400/400",
        caption: "Family holiday at the coast",
      },
  //   ],
  // },
  // {
  //   category: "Early Career",
  //   photos: [
      {
        id: "e1",
        url: Photo4,
        thumbnailUrl: "https://picsum.photos/id/20/400/400",
        caption: "First day at the engineering firm",
      },
      {
        id: "e2",
        url: Photo5,
        thumbnailUrl: "https://picsum.photos/id/21/400/400",
        caption: "Project milestone celebration",
      },
      {
        id: "e3",
        url: Photo6,
        thumbnailUrl: "https://picsum.photos/id/22/400/400",
        caption: "Mentoring the next generation",
      },
  //   ],
  // },
  // {
  //   category: "Family Life",
  //   photos: [
      {
        id: "f1",
        url: Photo7,
        thumbnailUrl: "https://picsum.photos/id/30/400/400",
        caption: "Wedding Day, 1982",
      },
      {
        id: "f2",
        url: Photo8,
        thumbnailUrl: "https://picsum.photos/id/31/400/400",
        caption: "Sunday family picnic",
      },
      {
        id: "f3",
        url: Photo9,
        thumbnailUrl: "https://picsum.photos/id/32/400/400",
        caption: "Housewarming at the new home",
      },
  //   ],
  // },
  // {
  //   category: "Recent Years",
  //   photos: [
      {
        id: "r1",
        url: Photo10,
        thumbnailUrl: "https://picsum.photos/id/40/400/400",
        caption: "Retirement party cruise",
      },
      {
        id: "r2",
        url: Photo11,
        thumbnailUrl: "https://picsum.photos/id/41/400/400",
        caption: "With the grandchildren",
      },
      {
        id: "r3",
        url: Photo12,
        thumbnailUrl: "https://picsum.photos/id/42/400/400",
        caption: "Hiking his favorite trail",
      },
      {
        id: "r4",
        url: Photo13,
        thumbnailUrl: "https://picsum.photos/id/41/400/400",
        caption: "With the grandchildren",
      },
      {
        id: "r5",
        url: Photo14,
        thumbnailUrl: "https://picsum.photos/id/42/400/400",
        caption: "Hiking his favorite trail",
      },
      {
        id: "r6",
        url: Photo15,
        thumbnailUrl: "https://picsum.photos/id/41/400/400",
        caption: "With the grandchildren",
      },
      {
        id: "r7",
        url: Photo16,
        thumbnailUrl: "https://picsum.photos/id/42/400/400",
        caption: "Hiking his favorite trail",
      },
    ],
  },
];

export const SPECIAL_MENTIONS: SpecialMention[] = [
  { role: "MC", name: "Mrs Shola Adewale", note: "" },
  // { role: "Key Speakers", name: "Mr Name Lastname", note: "Children's tribute" },
  // {
  //   role: "Acknowledgements",
  //   name: "Name Lastname",
  //   note: "For hosting us tonight",
  // },
];

export const ICON_MAP = {
  clock: <Clock className="w-6 h-6" />,
  mic: <Mic className="w-6 h-6" />,
  cake: <Cake className="w-6 h-6" />,
  music: <Music className="w-6 h-6" />,
  camera: <Camera className="w-6 h-6" />,
  prayer: <Heart className="w-6 h-6" />,
  group: <Users className="w-6 h-6" />,
};
