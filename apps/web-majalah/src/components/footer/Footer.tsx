import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import * as React from "react";

import { dayjs } from "@/lib";
import { AccountLink } from "@/types/components";

import { IconButton } from "../IconButton";
import { Link } from "../Link";
import { LinkTarget } from "../LinkTarget";
import { SectionTitle } from "../SectionTitle";

export const infoLinks = [
  { label: "Redaksi", href: "/editorial" },
  { label: "Pedoman Media Siber", href: "/cyber-media-guidelines" },
];

const accountLinks: AccountLink[] = [
  { icon: "IconBrandFacebook", url: "https://www.facebook.com/inilahmedia" },
  { icon: "IconBrandInstagram", url: "https://www.instagram.com/inilah_com/" },
  { icon: "IconBrandX", url: "https://x.com/inilahdotcom" },
  { icon: "IconBrandTiktok" },
  {
    icon: "IconBrandYoutube",
    url: "https://www.youtube.com/channel/UCSDiZBMNDSSuaCw49CVzzLg/videos",
  },
  { icon: "IconBrandTelegram" },
  { icon: "IconBrandWhatsapp" },
  { icon: "IconBrandLinkedin" },
];

export const Footer = React.memo(
  React.forwardRef(function Footer(_props, ref) {
    return (
      <Box component="footer" ref={ref}>
        <Box
          sx={(theme) => ({
            py: 4,
            bgcolor: theme.vars.palette.grey[900],
          })}
        >
          <Container maxWidth="desktop">
            <Stack
              direction={{ mobile: "column-reverse", tablet: "row" }}
              spacing={6}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: 4 }}>
                  <SectionTitle
                    title="TENTANG KAMI"
                    titleColor="white"
                    isUseButton={false}
                  />
                </Box>
                <Box sx={{ mb: 1, textAlign: "center" }}>
                  <Image
                    src="/logo.png"
                    alt="main-logo"
                    width={255}
                    height={56}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 1,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "white" }}
                  >
                    Powered by {"  "}
                  </Typography>
                  <Image
                    src="/logo-biznet-white.png"
                    alt="biznet-logo"
                    width={150}
                    height={70}
                    style={{ objectFit: "contain" }}
                  />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "white" }}
                  >
                    Connect with us
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={{ mobile: 0.25, tablet: 0.5 }}
                    sx={{ justifyContent: "center", mt: 0.5 }}
                  >
                    {accountLinks.map((item) => {
                      if (!item.url) {
                        return null;
                      }

                      return (
                        <LinkTarget key={item.icon} href={item.url}>
                          <IconButton
                            name={item.icon}
                            size="small"
                            sx={(theme) => ({
                              p: 0.25,
                              color: "white",
                              border: `0.063rem solid ${theme.vars.palette.grey[700]}`,
                            })}
                          />
                        </LinkTarget>
                      );
                    })}
                  </Stack>
                </Box>
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ mb: 4 }}>
                  <SectionTitle
                    title="INFORMASI"
                    titleColor="white"
                    isUseButton={false}
                  />
                </Box>
                <List sx={{ p: 0 }}>
                  {infoLinks.map((item) => {
                    // const UniversalLink = item.target ? LinkTarget : Link;
                    const UniversalLink = Link;

                    return (
                      <UniversalLink key={item.label} href={item.href ?? "#"}>
                        <ListItem sx={{ pl: 0, py: 0 }}>
                          <ListItemText
                            primary={item.label}
                            primaryTypographyProps={{
                              sx: {
                                color: "white",
                                textAlign: { mobile: "center", tablet: "left" },
                              },
                            }}
                          />
                        </ListItem>
                      </UniversalLink>
                    );
                  })}
                </List>
              </Box>
            </Stack>
          </Container>
        </Box>
        <Divider />
        <Box
          sx={(theme) => ({
            display: { mobile: "none", tablet: "block" },
            bgcolor: theme.vars.palette.grey[900],
            py: 3,
          })}
        >
          <Typography align="center" sx={{ color: "white" }}>
            Copyright &copy; &ndash; {dayjs().format("YYYY")}{" "}
            <Typography component="span" sx={{ fontWeight: 600 }}>
              Inilah.com
            </Typography>
            . All Rights Reserved
          </Typography>
        </Box>
      </Box>
    );
  })
);
