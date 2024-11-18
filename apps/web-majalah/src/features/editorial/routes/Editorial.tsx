import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Editorial as EditorialType } from "api-types";
import * as React from "react";

import { PageTitle } from "@/components/PageTitle";

interface Props {
  editorials: EditorialType[];
}

const StyledLink = styled(Link)({
  color: "unset",
  textDecoration: "none",
});

function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  const hue = hash % 360;
  const pastelColor = `hsl(${hue}, 80%, 70%)`;
  const lightness = 70;
  const textColor = lightness > 50 ? "#000" : "#fff";

  return { bgcolor: pastelColor, color: textColor, fontWeight: 700, p: 3 };
}

function stringAvatar(name: string) {
  return {
    sx: { ...stringToColor(name) },
    children: `${name.split(" ")?.[0]?.[0] ?? ""}${
      name.split(" ")?.[1]?.[0] ?? ""
    }`,
  };
}

export const Editorial = React.memo(function Editorial({ editorials }: Props) {
  if (!editorials || editorials.length === 0) {
    return <Typography>Data tidak tersedia</Typography>;
  }

  const groupedEditorials = editorials.reduce(
    (acc: Record<string, EditorialType[]>, item) => {
      const { division } = item.attributes;

      if (division) {
        // Inisialisasi array jika belum ada
        acc[division] = acc[division] || [];

        // Gunakan tanda '!' untuk memastikan TypeScript bahwa acc[division] pasti ada
        acc[division]!.push(item);
      }

      return acc;
    },
    {} as Record<string, EditorialType[]>
  );

  const divisions = Object.keys(groupedEditorials);

  return (
    <>
      <PageTitle title="Jajaran Redaksi" />
      <Container
        maxWidth="desktop"
        sx={(theme) => ({
          bgcolor: theme.vars.palette.background.default,
          py: 4,
        })}
      >
        {divisions && divisions.length > 0 ? (
          divisions.map((division) => (
            <Stack key={division}>
              <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
                {division}
              </Typography>
              <Stack direction="row" sx={{ flexWrap: "wrap" }} gap={2}>
                {groupedEditorials[division]?.map((item) => (
                  <Card
                    key={item.id}
                    sx={{ width: { mobile: "100%", tablet: 275 } }}
                    variant="outlined"
                  >
                    <CardContent>
                      <Avatar
                        {...stringAvatar(
                          item.attributes?.name ?? "Unknown Name"
                        )}
                      />
                      <Typography
                        variant="subtitle1"
                        sx={{ mt: 1, fontWeight: 500 }}
                      >
                        {item.attributes?.name}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Stack>
          ))
        ) : (
          <Typography>Data tidak tersedia</Typography>
        )}
        <Stack
          sx={{
            gap: 3,
            mt: 10,
            mb: 6,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h5" align="center">
              INFO IKLAN
            </Typography>
            <Typography align="center">
              Untuk informasi pemasangan iklan silahkan menghubungi:
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" align="center">
              Iskandar
            </Typography>
            <Typography align="center">
              <StyledLink href="tel:+622127095509" align="center">
                021-27095509
              </StyledLink>
            </Typography>
            <Typography align="center">
              <StyledLink href="https://wa.me/+628175228888" target="_blank">
                0817 522 8888
              </StyledLink>
            </Typography>
            <Typography align="center">
              <StyledLink href="mailto:marketing@inilah.com">
                marketing@inilah.com
              </StyledLink>
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" align="center">
              Alamat Redaksi
            </Typography>
            <Typography variant="h6" align="center">
              PT. Indonesia News Center
            </Typography>
            <Typography align="center">
              Jl. Rimba No. 42, Cipete Utara, Kebayoran Baru, Jakarta Selatan
            </Typography>
          </Box>
        </Stack>
      </Container>
    </>
  );
});
