import { Box, ListItem, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Post } from "api-types";
import * as React from "react";

import { Empty, Link, SectionTitle } from "@/components";
import { Thumbnail } from "@/components/Thumbnail";
import { TypographyEllipsis } from "@/components/TypographyEllipsis";
import { queries } from "@/lib";
import { anton, theme, titiliumWeb } from "@/theme";

interface Props {
  post?: Post | null;
}

export const RelatedArticle = React.memo(function RelatedArticle({
  post,
}: Props) {
  const { data: article } = useQuery(
    queries.magazine.list({
      sort: "publishedAt:desc",
      filters: {
        slug: {
          $eq: `${post?.attributes.edition?.data?.attributes.magazine.data?.attributes.slug}`,
        },
      },
      populate: [
        "cover",
        "edition",
        "editions.posts",
        "editions.posts.assets",
        "magazine",
      ],
    })
  );

  const posts = article?.data[0]?.attributes.editions.data[0]?.attributes.posts;

  const filteredPosts = React.useMemo(() => {
    if (!posts?.data) {
      return [];
    }

    if (!post?.id) {
      return posts.data;
    }

    return posts.data.filter((item) => item.id !== post.id);
  }, [post?.id, posts?.data]);

  return (
    <Stack component="section" direction="column">
      <SectionTitle
        title="Artikel Terkait"
        moreLink="/trending"
        isUseButton={false}
      />
      {filteredPosts.length > 0 ? (
        filteredPosts.map((item) => {
          return (
            <ListItem
              sx={() => ({
                px: 0,
                mb: 0.5,
                width: "100%",
                height: "100%",
                "& .thumbnail": {
                  transition: "transform .7s ease",
                },
                "&:hover .thumbnail": {
                  transform: "scale(1.1)",
                },
                "&:hover .hover-link": {
                  color: theme.vars.palette.primary.main,
                },
              })}
            >
              <Stack
                component="article"
                direction="row"
                alignItems={{ mobile: "flex-start", tablet: "center" }}
                sx={{ width: "100%", gap: { mobile: 1.5, tablet: 3 } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "33.33%",
                    height: { mobile: 100, tablet: 250 },
                    overflow: "hidden",
                  }}
                >
                  <Link href={`/edisi/${item.attributes.slug}`}>
                    <Thumbnail assets={item.attributes.assets?.data} />
                  </Link>
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Link href={`/edisi/${item.attributes.slug}`}>
                    <TypographyEllipsis
                      className="hover-link"
                      variant="h6"
                      sx={() => ({
                        lineClamp: { mobile: 2, tablet: 3 },
                        mb: { mobile: 1, tablet: 2 },
                        fontFamily: anton.style.fontFamily,
                        fontSize: { mobile: "1rem", tablet: "1.5rem" },
                      })}
                    >
                      {item.attributes.title}
                    </TypographyEllipsis>
                    <TypographyEllipsis
                      fontFamily={titiliumWeb.style.fontFamily}
                      variant="h5"
                      color={theme.vars.palette.text.primary}
                      sx={{
                        lineClamp: { mobile: 2, tablet: 3 },
                      }}
                    >
                      {item?.attributes?.subtitle}
                    </TypographyEllipsis>
                  </Link>
                </Box>
              </Stack>
            </ListItem>
          );
        })
      ) : (
        <Empty title="Tidak ada berita terkait" sx={{ mt: 3 }} />
      )}
    </Stack>
  );
});
