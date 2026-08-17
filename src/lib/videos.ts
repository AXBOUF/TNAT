export type VideoType = "youtube" | "local" | "placeholder";

export interface VideoItem {
  id: string;
  title: string;
  span: string;
  tilt: string;
  float: string;
  type: VideoType;
  youtube?: string;
  src?: string;
  poster?: string;
}

export const VIDEO_ITEMS: VideoItem[] = [
  {
    id: "VID 1",
    title: "",
    span: "col-span-12 md:col-span-7 md:row-span-2",
    tilt: "-rotate-1",
    float: "animate-[float_7s_ease-in-out_infinite_0.5s]",
    type: "youtube",
    youtube: "https://www.youtube.com/embed/1YTfIS-Bxow",
  },
  {
    id: "VID 2",
    title: "",
    span: "col-span-12 md:col-span-5",
    tilt: "rotate-2",
    float: "animate-[float_9s_ease-in-out_infinite_0.5s]",
    type: "youtube",
    youtube: "https://www.youtube.com/embed/H1-urzwhQB4?pp=0gcJCfkLAYcqIYzv",
  },
  {
    id: "VID 3",
    title: "",
    span: "col-span-12 md:col-span-5",
    tilt: "-rotate-2",
    float: "animate-[float_8s_ease-in-out_infinite_1s]",
    type: "youtube",
    youtube: "https://www.youtube.com/embed/jmZbuoQrLIk",
  },
  {
    id: "VID 4",
    title: "",
    span: "col-span-12 md:col-span-6",
    tilt: "rotate-1",
    float: "animate-[float_10s_ease-in-out_infinite_1.5s]",
    type: "youtube",
    youtube: "https://www.youtube.com/embed/kkfYEAxhfnI",
  },
  {
    id: "VID 5",
    title: "",
    span: "col-span-12 md:col-span-6",
    tilt: "-rotate-1",
    float: "animate-[float_8.5s_ease-in-out_infinite_0.8s]",
    type: "youtube",
    youtube: "https://www.youtube.com/embed/J6vhru3g4Cs",
  },
];

// Helper function to add a local video
export function addLocalVideo(
  id: string,
  title: string,
  span: string,
  src: string,
  poster?: string,
  tilt: string = "rotate-0",
  float: string = "animate-[float_8s_ease-in-out_infinite]"
): VideoItem {
  return {
    id,
    title,
    span,
    tilt,
    float,
    type: "local",
    src,
    poster,
  };
}

// Helper function to add a YouTube video
export function addYoutubeVideo(
  id: string,
  title: string,
  span: string,
  youtube: string,
  tilt: string = "rotate-0",
  float: string = "animate-[float_8s_ease-in-out_infinite]"
): VideoItem {
  return {
    id,
    title,
    span,
    tilt,
    float,
    type: "youtube",
    youtube,
  };
}
