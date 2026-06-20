/**
 * EXAMPLE: How to add videos to the video gallery
 *
 * Edit src/lib/videos.ts to add new videos using the helper functions
 * or by directly adding to the VIDEO_ITEMS array.
 */

import { VIDEO_ITEMS, addLocalVideo, addYoutubeVideo } from "./videos";

// EXAMPLE 1: Add a YouTube video
const newYoutubeVideo = addYoutubeVideo(
  "VID 6",
  "New YouTube Video",
  "md:col-span-6",
  "https://www.youtube.com/embed/YOUR_VIDEO_ID"
);

// EXAMPLE 2: Add a local video file with poster
const newLocalVideo = addLocalVideo(
  "VID 7",
  "Local Video File",
  "md:col-span-5",
  "/videos/my-trading-session.mp4",
  "/videos/my-trading-session-poster.jpg"
);

// EXAMPLE 3: Add videos directly to the array in videos.ts
// Add this to the VIDEO_ITEMS array:
// {
//   id: "VID 8",
//   title: "My Video Title",
//   span: "md:col-span-6",
//   tilt: "rotate-1",
//   float: "animate-[float_8s_ease-in-out_infinite]",
//   type: "youtube",
//   youtube: "https://www.youtube.com/embed/VIDEO_ID",
// }

// Grid span options (responsive):
// - md:col-span-5 (medium: 5 cols)
// - md:col-span-6 (medium: 6 cols)
// - md:col-span-7 (medium: 7 cols)
// - md:row-span-2 (medium: 2 rows)
// Example: "md:col-span-7 md:row-span-2"

// Rotation (tilt) options:
// - "-rotate-2", "-rotate-1", "rotate-0", "rotate-1", "rotate-2"

// Float animation options (duration and delay):
// - animate-[float_Xs_ease-in-out_infinite] where X is seconds (7-10s recommended)
// - animate-[float_Xs_ease-in-out_infinite_Ys] where Y is delay in seconds (0-1.5s recommended)
// Examples:
// - "animate-[float_7s_ease-in-out_infinite]"
// - "animate-[float_8s_ease-in-out_infinite_0.5s]"
// - "animate-[float_9s_ease-in-out_infinite_1s]"
