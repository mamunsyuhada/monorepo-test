import { Box, Button, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

import { roboto } from "@/theme";

import { MotionLogo } from "./MotionLogo";

const fadeToTop = {
  hidden: {
    opacity: 0,
    y: 1000,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const HeroLaunch = React.memo(function HeroLaunch() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3 }}
    >
      <Stack
        direction={{ desktop: "row", mobile: "column" }}
        sx={{
          padding: { desktop: 16, mobile: 8 },
          color: "#FFF",
          fontFamily: roboto.style.fontFamily,
          background: "url('/bg-wave-heikel.png')",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: "90vh",
          textAlign: "center",
          justifyContent: "center",
          zIndex: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Stack spacing={2} width="100%">
          {/* Mobile Screenshot */}
          <Box
            component={motion.div}
            variants={fadeToTop}
            sx={{
              width: { desktop: 450, mobile: 250 },
              height: { desktop: 850, mobile: 475 },
              mx: "auto",
              position: "absolute",
              top: { desktop: -40, mobile: -20 },
              left: { desktop: -40, mobile: 0 },
              display: { desktop: "block", mobile: "block" },
            }}
          >
            <Image
              src="/mobile-screenshot.png"
              alt="Insider in Mobile"
              layout="responsive"
              width={450}
              height={850}
              style={{
                objectFit: "cover",
                transform: "rotate(390deg)",
                opacity: 0.1,
              }}
            />
          </Box>

          {/* Devices Screenshot - partially visible in bottom right */}
          <Box
            component={motion.div}
            variants={fadeToTop}
            sx={{
              // width: "100%",
              height: "auto",
              maxWidth: { desktop: "1200px", mobile: "900px" },
              position: "absolute",
              bottom: { desktop: "-150px", mobile: "-50px" },
              right: { desktop: "-650px", mobile: "-180px" },
              zIndex: -1,
              overflow: "hidden",
            }}
          >
            <Image
              src="/devices-screenshot.png"
              alt="Insider in Devices"
              layout="responsive"
              width={1200}
              height={800}
              style={{
                objectFit: "contain",
                opacity: 0.1,
              }}
            />
          </Box>

          {/* Text Section */}
          <Stack
            spacing={4}
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <MotionLogo />
            <Typography
              fontSize={{ mobile: "1.25rem", desktop: "2.5rem" }}
              variant="h1"
              fontWeight={900}
              component={motion.div}
              variants={fadeToTop}
            >
              E-Magazine Terbaru dari Inilah.com
            </Typography>
            <Typography
              fontSize={{ mobile: "0.75rem", desktop: "1rem" }}
              variant="h4"
              fontWeight={700}
              component={motion.div}
              variants={fadeToTop}
            >
              Kami hadir dengan liputan mendalam, konten segar, dan perspektif
              yang lebih luas untuk menemani perjalanan informasi Anda.
            </Typography>
            <Button
              variant="contained"
              variants={fadeToTop}
              whileHover={{
                scale: 1.1,
                backgroundColor: "#bc941c",
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                opacity: 0.8,
                transition: { duration: 0.3 },
              }}
              component={motion.button}
              sx={{
                borderRadius: 20,
                width: "fit-content",
                border: "2px #bc941c solid",
                marginTop: 8,
                color: "#fff",
                zIndex: 4,
              }}
              onClick={(e) => {
                e.stopPropagation();
                document.querySelector("#magazines")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Baca Sekarang
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </motion.div>
  );
});
