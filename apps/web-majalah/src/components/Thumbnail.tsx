import { Media, MediaRaw } from "api-types";
import Image, { ImageProps } from "next/image";
import * as React from "react";

import { EmptyImage } from "./EmptyImage";

interface Props extends Partial<ImageProps> {
  assets?: MediaRaw[] | Media[];
}

export const Thumbnail = React.memo(function Thumbnail({
  assets,
  ...props
}: Props) {
  const media = (assets?.[0] as Media)?.attributes ?? assets?.[0];

  if (!media) {
    return <EmptyImage style={props.style} />;
  }

  return (
    <Image
      src={media.url}
      width={media.width}
      height={media.height}
      alt={media.alternativeText ?? ""}
      placeholder="blur"
      blurDataURL={media.placeholder ?? ""}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
      className="thumbnail"
      {...props}
    />
  );
});
