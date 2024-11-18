import { Magazine } from "api-types";
import * as React from "react";

import { ContentGrid, Hero } from "../components";

interface Props {
  post?: Magazine | null;
}

export const DetailMagazine = React.memo(function DetailMagazine({
  post,
}: Props) {
  return (
    <>
      <Hero post={post} />
      {post?.attributes.editions.data &&
        post.attributes.editions.data.map((item) => (
          <ContentGrid key={item.id} edition={item} />
        ))}
    </>
  );
});
