import ky from "ky-universal";

export const api: typeof ky = ky.create({
  prefixUrl:
    typeof window !== "undefined"
      ? "/api/v1"
      : `${process.env.NEXT_PUBLIC_GATEWAY_URL}/api`,
  timeout: 60000,
});

export const youtubeApi: typeof ky = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_YOUTUBE_API_URL,
  timeout: 60000,
});
