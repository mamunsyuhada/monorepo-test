import { Box, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import * as React from "react";
import { useInView } from "react-intersection-observer";

import { theme } from "@/theme";

const svgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const pathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

export const MotionLogo = React.memo(function MotionLogo() {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isMobile = useMediaQuery(theme.breakpoints.down("tablet"));
  return (
    <Box width="100%" ref={ref}>
      {inView && (
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1775 345"
          initial="hidden"
          animate="visible"
          variants={svgVariants}
          style={{
            width: isMobile ? "100%" : "40%",
            height: "auto",
            maxWidth: isMobile ? "100%" : "40%",
          }}
          fillRule="evenodd"
          clipRule="evenodd"
          imageRendering="optimizeQuality"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M13.5 21.5c17.663-.667 35.497-1 53.5-1 18.18 0 36.013.667 53.5 2h-1a2809.64 2809.64 0 00-106-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M333.5 21.5c17.664-.667 35.497-1 53.5-1 18.179 0 36.013.667 53.5 2h-1a2809.644 2809.644 0 00-106-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M252.5 27.5a32.634 32.634 0 01-4-4.5 5512.38 5512.38 0 00-105-.5 10879.63 10879.63 0 00-2 295v4a15011.235 15011.235 0 01-.5-300 1898.052 1898.052 0 01106.5-.5c2.993 1.159 4.66 3.325 5 6.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1055.5 22.5h-168c.283-.79.783-1.456 1.5-2 55.598.665 111.1 1.331 166.5 2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1463.5 23.5h-1c-84.83-1-169.83-1.333-255-1 .28-.79.78-1.456 1.5-2a7952.415 7952.415 0 00252 0c1.75.248 2.58 1.248 2.5 3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M119.5 22.5v298h-104c-.998-99.263-1.33-198.596-1-298h105z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M143.5 22.5c35.002-.167 70.002 0 105 .5a32.634 32.634 0 004 4.5c-.073 1.527.594 2.527 2 3 1.174 1.014 1.84 2.347 2 4a29.283 29.283 0 002.5 7c.383-.556.883-.89 1.5-1-.259 2.49.741 4.156 3 5 .238 1.904 1.238 3.238 3 4 .838.342 1.172 1.008 1 2 .238 1.904 1.238 3.238 3 4 1.174 1.014 1.84 2.347 2 4-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.259 2.49.741 4.156 3 5-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.259 2.49.741 4.156 3 5-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.259 2.49.741 4.156 3 5-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3 .838.342 1.172 1.008 1 2-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3 .838.342 1.172 1.008 1 2-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3 .838.342 1.172 1.008 1 2-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3 .838.342 1.172 1.008 1 2-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.073 1.527.594 2.527 2 3-.131.876.202 1.543 1 2 1-43.662 1.333-87.328 1-131h106v298h-106c-1.816-1.618-3.149-3.618-4-6-.299-1.955-1.299-3.289-3-4a21.614 21.614 0 00-4-5c-.25-2.174-1.25-3.841-3-5-1.406-.473-2.073-1.473-2-3-.37-2.767-1.704-4.767-4-6-.838-.342-1.172-1.008-1-2-.054-2.132-1.054-3.465-3-4-.838-.342-1.172-1.008-1-2-.37-2.767-1.704-4.767-4-6 .073-1.527-.594-2.527-2-3-.838-.342-1.172-1.008-1-2-.37-2.767-1.704-4.767-4-6 .073-1.527-.594-2.527-2-3-.838-.342-1.172-1.008-1-2-.37-2.767-1.704-4.767-4-6-.37-2.767-1.704-4.767-4-6-.838-.342-1.172-1.008-1-2-.37-2.767-1.704-4.767-4-6-.838-.342-1.172-1.008-1-2-.054-2.132-1.054-3.465-3-4-.838-.342-1.172-1.008-1-2-.575-3.454-2.242-6.121-5-8-.575-3.454-2.242-6.121-5-8a26.707 26.707 0 01-5-7c-.25-2.174-1.25-3.841-3-5 .259-2.489-.741-4.156-3-5-.37-2.767-1.704-4.767-4-6-.238-2.145-1.238-3.812-3-5-1 43.662-1.333 87.328-1 131h-106v-3c.809-1.792 1.309-3.792 1.5-6 .5-96.333.667-192.666.5-289z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M569.5 22.5h168a900.98 900.98 0 001 60c1.276 7.272 1.276 14.939 0 23a3843.432 3843.432 0 01-124 1c-7.852-.325-15.518.008-23 1-3.9.93-7.9 1.263-12 1a23.832 23.832 0 00-9 1c-.952 1.545-1.285 3.212-1 5a24.93 24.93 0 00-1 8c.719 2.388 2.385 3.888 5 4.5a21.341 21.341 0 009 1.5 729.55 729.55 0 0054 1c7.261.114 14.261 1.114 21 3 2.488 1.888 5.488 2.555 9 2h1a48.682 48.682 0 008.5 5c1.356-.88 2.856-1.214 4.5-1 11.059 3.025 20.725 8.358 29 16 .762 1.762 2.096 2.762 4 3 1 .333 1.667 1 2 2 .58 2.249 1.913 3.915 4 5 .762 3.677 2.762 6.344 6 8-.073 1.527.594 2.527 2 3 3.293 5.199 5.627 10.865 7 17 .065 2.928.732 5.595 2 8 .869 2.217 1.202 4.55 1 7v34c-1.193.47-1.86 1.47-2 3a44.673 44.673 0 00-1 10c-1.29.558-2.123 1.558-2.5 3-.147 4.117-1.814 7.45-5 10l-1-1c-.667 1-.667 2 0 3 .654-1.196 1.154-1.196 1.5 0-1.505 1.342-2.172 3.008-2 5a5.727 5.727 0 00-1 3c-1.826 1.647-3.16 3.647-4 6 0 .667-.333 1-1 1a102.102 102.102 0 00-12 12c-1.527-.073-2.527.594-3 2-1.527-.073-2.527.594-3 2-3.159.074-5.492 1.407-7 4 0 .667-.333 1-1 1-3.136-.521-5.47.479-7 3-2.184 2.085-4.851 3.085-8 3-2.053-.098-3.72.569-5 2-5.073 1.935-10.406 3.268-16 4-4.6-.22-8.933.446-13 2-5.14.988-10.474 1.321-16 1h-167v-85a1923.06 1923.06 0 0130 0 435.734 435.734 0 0059 0h1a602.277 602.277 0 0060 .5c2.536-.186 4.869-.686 7-1.5 9.385-.873 13.218-5.873 11.5-15-4.379-2.904-9.213-4.404-14.5-4.5a760.316 760.316 0 00-39-.5c-6.809-1.152-13.809-1.819-21-2-7.972-.252-15.639-1.585-23-4-2.338-1.54-5.005-2.206-8-2a31.686 31.686 0 01-6-2c-1.676-2.334-4.009-3.334-7-3-3.651-1.159-6.985-2.826-10-5-.473-1.406-1.473-2.073-3-2-.473-1.406-1.473-2.073-3-2-.473-1.406-1.473-2.073-3-2-.762-1.762-2.096-2.762-4-3-3.667-3-7-6.333-10-10-.054-2.132-1.054-3.465-3-4-.838-.342-1.172-1.008-1-2-.054-2.132-1.054-3.465-3-4a32.508 32.508 0 01-3-7c.098-2.053-.569-3.72-2-5-3.053-7.253-4.719-14.92-5-23a401.344 401.344 0 011-33c-.295-2.235.039-4.235 1-6 .617-.11 1.117-.444 1.5-1 .61-3.327 1.11-6.66 1.5-10 2.334-1.676 3.334-4.009 3-7 .16-1.653.826-2.986 2-4 1.908-.986 2.908-2.652 3-5 1.406-.473 2.073-1.473 2-3 .238-1.904 1.238-3.238 3-4s2.762-2.096 3-4c3.936-2.266 7.269-5.266 10-9 1.904-.238 3.238-1.238 4-3 1.527.073 2.527-.594 3-2 1.527.073 2.527-.594 3-2 1.681-1.508 3.681-2.508 6-3a257.196 257.196 0 0024-9c2.719-1.413 5.719-2.08 9-2 4.317.417 8.317-.25 12-2 5.14-.988 10.474-1.321 16-1zM759.5 22.5h106v298h-106c-.302-99.453-.302-198.787 0-298z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M887.5 22.5h175c6.09 1.736 12.42 2.736 19 3a264.67 264.67 0 0022 6c1.71 1.238 3.71 1.905 6 2 4.76 1.216 9.1 3.216 13 6 .84 2.26 2.51 3.26 5 3a46.243 46.243 0 0113 9c1.08 2.087 2.75 3.42 5 4 1 .333 1.67 1 2 2 1.93 3.6 4.6 6.6 8 9 1.76.762 2.76 2.096 3 4 .2 1.544.87 2.878 2 4a7.253 7.253 0 01-2 2.5c3.64.556 5.64 2.723 6 6.5.68-.363 1.35-.696 2-1 9.3 16.402 15.13 34.069 17.5 53 3.03 22 3.19 44 .5 66a29.153 29.153 0 00-3 4.5c.94 2.381 1.27 4.881 1 7.5a48.42 48.42 0 01-3 15c-1.78 1.49-2.45 3.49-2 6v1a28.4 28.4 0 00-5 4.5c1.47.71 2.14 1.876 2 3.5-1.88 6.087-4.54 11.754-8 17-2.26.844-3.26 2.511-3 5-.84 2.353-2.17 4.353-4 6-1.41.473-2.07 1.473-2 3-.33 1-1 1.667-2 2-1.41.473-2.07 1.473-2 3-1 .333-1.67 1-2 2 0 .667-.33 1-1 1-.65-.304-1.32-.637-2-1-2.96 1.942-4.63 4.608-5 8-1.53-.073-2.53.594-3 2-10.68 9.508-23.01 16.175-37 20a176.485 176.485 0 00-18 5c-.71.904-1.71 1.237-3 1-4.29-.302-8.29.364-12 2-4.81.987-9.81 1.321-15 1h-168c-.002-99.13-.002-198.463 0-298zm109 85c12.68.135 24.68.135 36 0 8.32.23 16.32 1.897 24 5 .47 1.406 1.47 2.073 3 2 .47 1.406 1.47 2.073 3 2 .33 1 1 1.667 2 2-.07 1.527.59 2.527 2 3a92.62 92.62 0 0110 22c-.06 4.576.6 8.909 2 13v29c-1.12 3.795-1.78 7.795-2 12v1c-1.37 3.119-2.37 6.452-3 10-2.58 6.16-5.91 11.827-10 17-1.9.238-3.24 1.238-4 3-1.53-.073-2.53.594-3 2a33.458 33.458 0 00-7 3 185.79 185.79 0 00-16 2c-12.54-.632-24.88-.632-37 0-.283-.789-.783-1.456-1.5-2l-.5-62.5c.011-21.383.678-42.55 2-63.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1207.5 22.5c85.17-.333 170.17 0 255 1v83c-49.84-.332-99.5.001-149 1v21c49.16.833 98.5 1.333 148 1.5 1 28.093 1.33 56.259 1 84.5h-148c-.99 7.148-1.32 14.481-1 22h148c-.24 1.291.1 2.291 1 3v81h-255a11128.82 11128.82 0 010-298z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1652.5 22.5c14.51-.026 28.51 2.307 42 7-.11.617-.44 1.117-1 1.5 2.31.497 4.64.663 7 .5 1.93 1.793 4.26 2.793 7 3 1.18 2.413 3.18 3.413 6 3a37.79 37.79 0 019 5 11.65 11.65 0 002 5c1.23-.863 2.56-.863 4 0 .76 1.762 2.1 2.762 4 3 1.67 1 3 2.333 4 4 .92 2.59 2.59 4.59 5 6 .24 1.904 1.24 3.238 3 4-.07 1.527.59 2.527 2 3-.07 1.527.59 2.527 2 3 2.78 3.905 4.78 8.238 6 13 .22 3.662 1.22 6.995 3 10 1.41 2.719 2.08 5.719 2 9-.2 5.25.47 10.25 2 15v2c.13 12.051-.54 24.051-2 36-1.6 3.739-2.6 7.739-3 12-.65.304-1.32.637-2 1a16.91 16.91 0 00-1 8c.17.992-.16 1.658-1 2-1.43 1.28-2.1 2.947-2 5-1.18 3.04-2.85 5.706-5 8-1.41.473-2.07 1.473-2 3 0 .667-.33 1-1 1-1.32 1.442-2.99 2.108-5 2v4c0 .667-.33 1-1 1-4 0-6 2-6 6-1.08 2.043-2.75 3.376-5 4-1.53-.073-2.53.594-3 2-1.53-.073-2.53.594-3 2-2.05.553-2.39 1.553-1 3a53.85 53.85 0 014 9c-.38 2.198.29 3.865 2 5-.33 2.991.67 5.324 3 7-.38 2.198.29 3.865 2 5-.34 1.983.32 3.317 2 4-.38 2.198.29 3.865 2 5-.33 2.991.67 5.324 3 7-.33 2.991.67 5.324 3 7-.38 2.198.29 3.865 2 5 .49 2.307.49 4.473 0 6.5.97 1.481 2.3 2.315 4 2.5-.38 2.198.29 3.865 2 5 0 3.665 1.34 6.665 4 9 1.04 1.43 1.7 3.097 2 5-.33 2.991.67 5.324 3 7 1.79 1.926 2.79 4.259 3 7v5c-35.38.32-70.71-.013-106-1v-1a16.91 16.91 0 00-1-8c-.68.363-1.35.696-2 1a1646.625 1646.625 0 01-30-70c.1-2.053-.57-3.72-2-5h-27c-.67 28-1.33 56-2 84a4.949 4.949 0 00-.5-3c-1.28-.119-2.45.381-3.5 1.5-31.67.667-63.33.667-95 0-1.18-.967-2.51-1.467-4-1.5-.67-88.832-1.33-177.499-2-266v-29h168zm-52 85c13.34-.012 26.68.321 40 1 6.38 2.553 10.55 7.22 12.5 14 .5 4.321.67 8.654.5 13a31.828 31.828 0 00-2 6c-2.36 2.029-4.69 4.029-7 6-4.14.706-8.31 1.372-12.5 2-12.44-1.239-25.11-1.239-38 0-.67-.667-1.33-1.333-2-2-.5-12.996-.67-25.996-.5-39 3.21.31 6.21-.023 9-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1062.5 22.5c6.61.047 12.94 1.047 19 3-6.58-.264-12.91-1.264-19-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M265.5 21.5c5.03 1.974 5.03 3.307 0 4v-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M553.5 23.5c-3.683 1.75-7.683 2.417-12 2 3.795-1.117 7.795-1.783 12-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1081.5 25.5c7.78.776 15.11 2.776 22 6a264.67 264.67 0 01-22-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M252.5 27.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1694.5 29.5c2.29.095 4.29.762 6 2a24.93 24.93 0 01-7-.5c.56-.383.89-.883 1-1.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M532.5 27.5a257.196 257.196 0 01-24 9c7.482-4.164 15.482-7.164 24-9z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1103.5 31.5c2.4-.24 4.4.426 6 2-2.29-.095-4.29-.762-6-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1700.5 31.5c2.74.207 5.07 1.207 7 3-2.74-.207-5.07-1.207-7-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M759.5 22.5c17.664-.667 35.497-1 53.5-1a744.995 744.995 0 0154.5 1.5c-.018 99.316-.351 198.482-1 297.5h-1v-298h-106z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1707.5 34.5c2.32.492 4.32 1.492 6 3-2.82.413-4.82-.587-6-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M256.5 34.5c2.322 1.302 3.655 3.302 4 6-.617.11-1.117.444-1.5 1a29.283 29.283 0 01-2.5-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M502.5 39.5c-.473 1.406-1.473 2.073-3 2 .473-1.406 1.473-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1122.5 39.5c2.17.25 3.84 1.25 5 3-2.49.26-4.16-.74-5-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M499.5 41.5c-.473 1.406-1.473 2.073-3 2 .473-1.406 1.473-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M260.5 40.5c1.39 1.4 2.39 3.066 3 5-2.259-.844-3.259-2.51-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M496.5 43.5c-.762 1.762-2.096 2.762-4 3 .762-1.762 2.096-2.762 4-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1722.5 42.5c2.61.943 4.61 2.61 6 5-1.44-.863-2.77-.863-4 0a11.65 11.65 0 01-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M263.5 45.5c1.762.762 2.762 2.096 3 4-1.762-.762-2.762-2.096-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1728.5 47.5c1.9.238 3.24 1.238 4 3-1.9-.238-3.24-1.238-4-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1140.5 51.5c2.25.58 3.92 1.913 5 4-2.25-.58-3.92-1.913-5-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M267.5 51.5c1.762.762 2.762 2.096 3 4-1.762-.762-2.762-2.096-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M492.5 46.5c-2.731 3.734-6.064 6.734-10 9 2.731-3.734 6.064-6.734 10-9z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1736.5 54.5c2.41 1.41 4.08 3.41 5 6-2.41-1.41-4.08-3.41-5-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M482.5 55.5c-.238 1.904-1.238 3.238-3 4 .238-1.904 1.238-3.238 3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M569.5 22.5a4765.134 4765.134 0 01169-.5c.294 20.656.294 40.823 0 60.5a900.98 900.98 0 01-1-60h-168z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1147.5 57.5c3.4 2.4 6.07 5.4 8 9-3.4-2.4-6.07-5.4-8-9z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M272.5 59.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1741.5 60.5c1.76.762 2.76 2.096 3 4-1.76-.762-2.76-2.096-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M13.5 21.5a2809.64 2809.64 0 01106 1h-105c-.33 99.404.002 198.737 1 298h-2a11175.904 11175.904 0 010-299z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M274.5 62.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M476.5 63.5c.073 1.527-.594 2.527-2 3-.073-1.527.594-2.527 2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1744.5 64.5c1.41.473 2.07 1.473 2 3-1.41-.473-2.07-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M276.5 65.5c1.39 1.4 2.39 3.066 3 5-2.259-.844-3.259-2.51-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1746.5 67.5c1.41.473 2.07 1.473 2 3-1.41-.473-2.07-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M474.5 66.5c-.092 2.348-1.092 4.014-3 5 .25-2.174 1.25-3.84 3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M279.5 70.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M281.5 73.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1158.5 70.5a57.312 57.312 0 018 12c-.65.304-1.32.637-2 1-.36-3.777-2.36-5.944-6-6.5a7.253 7.253 0 002-2.5c-1.13-1.122-1.8-2.456-2-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M333.5 21.5c35.504-.332 70.837.002 106 1h-106c.333 43.672 0 87.338-1 131-.798-.457-1.131-1.124-1-2l2-130z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M283.5 76.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M469.5 75.5c.334 2.991-.666 5.324-3 7 .435-2.657 1.435-4.99 3-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M285.5 79.5c1.39 1.4 2.39 3.066 3 5-2.259-.844-3.259-2.51-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M288.5 84.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1754.5 83.5c1.78 3.005 2.78 6.338 3 10-1.78-3.005-2.78-6.338-3-10z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M290.5 87.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M466.5 82.5c-.39 3.34-.89 6.673-1.5 10-.383.556-.883.89-1.5 1 .242-3.979 1.242-7.646 3-11z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M292.5 90.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M294.5 93.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M296.5 96.5c1.39 1.4 2.39 3.066 3 5-2.259-.844-3.259-2.51-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M299.5 101.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M301.5 104.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M614.5 106.5v1c-6.961.186-14.628.186-23 0 7.482-.992 15.148-1.325 23-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M738.5 105.5c.543.06.876.393 1 1-1.059 1.196-2.393 1.863-4 2-39.846-.279-80.179-.612-121-1v-1c41.503.332 82.837-.001 124-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M994.5 107.5a181.045 181.045 0 0138 0c-11.32.135-23.32.135-36 0h-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1462.5 23.5h1c.33 28.008 0 56.008-1 84-49.46.44-98.46.44-147 0h-2c49.5-.999 99.16-1.332 149-1v-83z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M579.5 108.5a38.596 38.596 0 00-10 6c-.285-1.788.048-3.455 1-5a23.832 23.832 0 019-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M304.5 109.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1056.5 112.5c1.53-.073 2.53.594 3 2-1.53.073-2.53-.594-3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M306.5 112.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1059.5 114.5c1.53-.073 2.53.594 3 2-1.53.073-2.53-.594-3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1759.5 102.5c1.53 4.75 2.2 9.75 2 15-1.53-4.75-2.2-9.75-2-15z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M308.5 115.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M462.5 99.5a401.344 401.344 0 00-1 33c-.666-4.32-.999-8.82-1-13.5-.186-6.738.481-13.238 2-19.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1064.5 118.5c1.41.473 2.07 1.473 2 3-1.41-.473-2.07-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1640.5 108.5c6.4 1.141 10.9 4.808 13.5 11 .5 5.323.67 10.656.5 16h-1c.17-4.346 0-8.679-.5-13-1.95-6.78-6.12-11.447-12.5-14z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1313.5 107.5h2c-.96 6.912-1.3 13.912-1 21h-1v-21z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M311.5 120.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M313.5 123.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M568.5 122.5c5.788 3.996 12.121 5.996 19 6h-5a21.341 21.341 0 01-9-1.5c-2.615-.612-4.281-2.112-5-4.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M315.5 126.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M636.5 129.5a729.55 729.55 0 01-54-1h5c5.637-.099 11.47-.432 17.5-1a9949.19 9949.19 0 0131.5 2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1462.5 214.5c.33-28.241 0-56.407-1-84.5-49.5-.167-98.84-.667-148-1.5h1c48.82.23 97.65-.104 146.5-1 .41.457.91.791 1.5 1a927.308 927.308 0 010 86z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M317.5 129.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M657.5 132.5c3.281-.08 6.281.587 9 2-3.512.555-6.512-.112-9-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M320.5 134.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M667.5 134.5c4.572.888 8.905 2.221 13 4-1.644-.214-3.144.12-4.5 1a48.682 48.682 0 01-8.5-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M322.5 137.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1653.5 135.5h1c.47 2.893-.53 4.893-3 6a31.828 31.828 0 012-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1651.5 141.5c-1.11 3.446-3.45 5.446-7 6 2.31-1.971 4.64-3.971 7-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M325.5 142.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1761.5 119.5c1.52 12.099.85 24.099-2 36a272.286 272.286 0 002-36z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M327.5 145.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1600.5 107.5c-2.79.977-5.79 1.31-9 1-.17 13.004 0 26.004.5 39 .67.667 1.33 1.333 2 2 12.89-1.239 25.56-1.239 38 0 4.19-.628 8.36-1.294 12.5-2-.11.617-.44 1.117-1 1.5a372.445 372.445 0 01-52 1 458.938 458.938 0 01-1-42.5h10z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M329.5 148.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1652.5 22.5h-168v299c-1-99.832-1.33-199.832-1-300 56.5-.332 112.84.001 169 1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1076.5 143.5c1.55 4.067 2.22 8.4 2 13-1.4-4.091-2.06-8.424-2-13z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M709.5 154.5c1.904.238 3.238 1.238 4 3-1.904-.238-3.238-1.238-4-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M466.5 155.5c1.431 1.28 2.098 2.947 2 5-1.431-1.28-2.098-2.947-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1759.5 155.5c-.08 4.337-1.08 8.337-3 12 .4-4.261 1.4-8.261 3-12z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M715.5 159.5c2.087 1.085 3.42 2.751 4 5-2.087-1.085-3.42-2.751-4-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M119.5 22.5h1c.132 3.96.465 7.96 1 12a41450.139 41450.139 0 00-1.5 287 2801.452 2801.452 0 01-104 1c-1.301-.139-2.134-.805-2.5-2h106v-298z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M471.5 167.5c1.946.535 2.946 1.868 3 4-1.474-.936-2.474-2.27-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1756.5 167.5c-.43 3.285-1.43 6.285-3 9a16.91 16.91 0 011-8c.68-.363 1.35-.696 2-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M719.5 164.5c2.971 1.943 4.971 4.609 6 8-3.238-1.656-5.238-4.323-6-8z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M725.5 172.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M475.5 173.5c1.946.535 2.946 1.868 3 4-1.474-.936-2.474-2.27-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1752.5 178.5c.1 2.053-.57 3.72-2 5-.1-2.053.57-3.72 2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M488.5 187.5c1.904.238 3.238 1.238 4 3-1.904-.238-3.238-1.238-4-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M492.5 190.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1745.5 191.5c.07 1.527-.59 2.527-2 3-.07-1.527.59-2.527 2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M495.5 192.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1078.5 185.5c.42 4.317-.25 8.317-2 12 .22-4.205.88-8.205 2-12z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M251.5 194.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M498.5 194.5c1.527-.073 2.527.594 3 2-1.527.073-2.527-.594-3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M994.5 107.5h2a1016.417 1016.417 0 00-2 63.5l.5 62.5c.717.544 1.217 1.211 1.5 2h-3c-.332-42.837.001-85.503 1-128z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1742.5 195.5c-.92 2.589-2.59 4.589-5 6v-4c2.01.108 3.68-.558 5-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M734.5 192.5c1.54 2.338 2.206 5.005 2 8-1.268-2.405-1.935-5.072-2-8z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M511.5 201.5c2.991-.334 5.324.666 7 3-2.657-.435-4.991-1.435-7-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M255.5 200.5c2.259.844 3.259 2.511 3 5-1.39-1.399-2.39-3.066-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1076.5 198.5c.18 3.786-.82 7.119-3 10 .63-3.548 1.63-6.881 3-10z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1736.5 202.5a25.772 25.772 0 01-6 6c0-4 2-6 6-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1184.5 201.5c-.04 4.233-.71 8.233-2 12 .27-2.619-.06-5.119-1-7.5.9-1.652 1.9-3.152 3-4.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M524.5 206.5c2.995-.206 5.662.46 8 2-2.928-.065-5.595-.732-8-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M258.5 205.5c1.75 1.159 2.75 2.826 3 5-1.75-1.159-2.75-2.826-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M143.5 22.5c.167 96.334 0 192.667-.5 289-.191 2.208-.691 4.208-1.5 6a10879.63 10879.63 0 012-295z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M555.5 212.5c7.191.181 14.191.848 21 2 .065.438-.101.772-.5 1a274.166 274.166 0 01-20.5-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1725.5 212.5c-.47 1.406-1.47 2.073-3 2 .47-1.406 1.47-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1722.5 214.5c-.47 1.406-1.47 2.073-3 2 .47-1.406 1.47-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1719.5 216.5c-.61.891-.94 1.891-1 3-1.39-1.447-1.05-2.447 1-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M266.5 217.5c2.758 1.879 4.425 4.546 5 8-2.45-2.129-4.117-4.796-5-8z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M737.5 207.5c.693 4.065 1.36 8.232 2 12.5-.264 6.502-.931 13.335-2 20.5v-33z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1063.5 225.5c-.76 1.762-2.1 2.762-4 3 .76-1.762 2.1-2.762 4-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M271.5 225.5c2.758 1.879 4.425 4.546 5 8a24.766 24.766 0 01-5-8z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1059.5 228.5c-.47 1.406-1.47 2.073-3 2 .47-1.406 1.47-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1179.5 228.5c-.09 2.286-.76 4.286-2 6-.45-2.51.22-4.51 2-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1722.5 228.5c1.04 1.43 1.7 3.097 2 5-1.71-1.135-2.38-2.802-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1056.5 230.5c-1.59 2.321-3.92 3.321-7 3a33.458 33.458 0 017-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1049.5 233.5c-.42.722-1.08 1.222-2 1.5a98.4 98.4 0 01-14 .5 185.79 185.79 0 0116-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M277.5 235.5c1.946.535 2.946 1.868 3 4-1.474-.936-2.474-2.27-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M550.5 235.5a435.734 435.734 0 01-59 0c19.033-1.266 38.7-1.266 59 0z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M618.5 234.5c-2.131.814-4.464 1.314-7 1.5a602.277 602.277 0 01-60-.5c21.617.115 43.95-.219 67-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1314.5 214.5v21h148v4c-.9-.709-1.24-1.709-1-3h-148c-.32-7.519.01-14.852 1-22z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1724.5 233.5c1.57 2.009 2.57 4.343 3 7-2.33-1.676-3.33-4.009-3-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1177.5 235.5c-.48 2.943-1.48 5.61-3 8 .14-1.624-.53-2.79-2-3.5a28.4 28.4 0 015-4.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1618.5 236.5c1.43 1.28 2.1 2.947 2 5-1.43-1.28-2.1-2.947-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M737.5 241.5c-.382 4.592-1.382 8.925-3 13a44.673 44.673 0 011-10c.14-1.53.807-2.53 2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1727.5 240.5c1.04 1.43 1.7 3.097 2 5-1.71-1.135-2.38-2.802-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M281.5 241.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1729.5 245.5c1.17 1.014 1.84 2.347 2 4-1.68-.683-2.34-2.017-2-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1731.5 249.5c1.04 1.43 1.7 3.097 2 5-1.71-1.135-2.38-2.802-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M286.5 249.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1733.5 254.5c1.57 2.009 2.57 4.343 3 7-2.33-1.676-3.33-4.009-3-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M290.5 255.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1166.5 260.5c-.25 2.174-1.25 3.841-3 5-.26-2.489.74-4.156 3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M295.5 263.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1736.5 261.5c1.57 2.009 2.57 4.343 3 7-2.33-1.676-3.33-4.009-3-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M734.5 254.5c-1.031 7.385-3.698 14.052-8 20h-1c-.172-1.992.495-3.658 2-5-.346-1.196-.846-1.196-1.5 0-.667-1-.667-2 0-3l1 1c3.186-2.55 4.853-5.883 5-10 .377-1.442 1.21-2.442 2.5-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M297.5 266.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1484.5 51.5c.67 88.501 1.33 177.168 2 266 1.49.033 2.82.533 4 1.5 31.67.667 63.33.667 95 0 1.05-1.119 2.22-1.619 3.5-1.5.48.948.65 1.948.5 3h-105v-269z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1739.5 268.5c1.04 1.43 1.7 3.097 2 5-1.71-1.135-2.38-2.802-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1159.5 271.5c.07 1.527-.59 2.527-2 3-.07-1.527.59-2.527 2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M302.5 274.5c1.406.473 2.073 1.473 2 3-1.406-.473-2.073-1.473-2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M725.5 274.5h1c.073 1.527-.594 2.527-2 3a5.727 5.727 0 011-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1155.5 276.5c.07 1.527-.59 2.527-2 3-.07-1.527.59-2.527 2-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1741.5 273.5a37.137 37.137 0 014 9c-1.7-.185-3.03-1.019-4-2.5.49-2.027.49-4.193 0-6.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1153.5 279.5c0 1.333-.67 2-2 2 .33-1 1-1.667 2-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M304.5 277.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M724.5 277.5c-.345 2.698-1.678 4.698-4 6 .84-2.353 2.174-4.353 4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M309.5 285.5c1.946.535 2.946 1.868 3 4-1.474-.936-2.474-2.27-3-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1150.5 282.5c-2 2.667-4.33 5-7 7 .37-3.392 2.04-6.058 5-8 .68.363 1.35.696 2 1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1745.5 282.5c1.43 1.28 2.1 2.947 2 5-1.71-1.135-2.38-2.802-2-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M719.5 284.5c-3 5-7 9-12 12a102.102 102.102 0 0112-12z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1143.5 289.5c-.47 1.406-1.47 2.073-3 2 .47-1.406 1.47-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1747.5 287.5c2.09 2.588 3.43 5.588 4 9-2.66-2.335-4-5.335-4-9z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M313.5 291.5c2.296 1.233 3.63 3.233 4 6-1.816-1.618-3.149-3.618-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M707.5 296.5c-.473 1.406-1.473 2.073-3 2 .473-1.406 1.473-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M704.5 298.5c-.473 1.406-1.473 2.073-3 2 .473-1.406 1.473-2.073 3-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M701.5 300.5c-1.836 2.088-4.169 3.421-7 4 1.508-2.593 3.841-3.926 7-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M251.5 194.5c-.958-.453-1.792-1.119-2.5-2l-1 129a1531.13 1531.13 0 01-106.5 0v-1h106c-.333-43.672 0-87.338 1-131 1.762 1.188 2.762 2.855 3 5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M319.5 300.5c1.75 1.159 2.75 2.826 3 5-1.75-1.159-2.75-2.826-3-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1753.5 301.5c1.57 2.009 2.57 4.343 3 7-2.33-1.676-3.33-4.009-3-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M693.5 305.5c-2.149 1.236-4.482 2.236-7 3 1.53-2.521 3.864-3.521 7-3z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M322.5 305.5a21.614 21.614 0 014 5v1c-2.322-1.302-3.655-3.302-4-6z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M326.5 310.5c1.701.711 2.701 2.045 3 4h-1c-1.406-.473-2.073-1.473-2-3v-1z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1653.5 318.5c-1.79-1.926-2.79-4.259-3-7 .65-.304 1.32-.637 2-1a16.91 16.91 0 011 8z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M678.5 311.5c-1.28 1.431-2.947 2.098-5 2 1.28-1.431 2.947-2.098 5-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1103.5 311.5c-5.55 2.89-11.55 4.557-18 5a176.485 176.485 0 0118-5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M657.5 317.5c-4.118 1.209-8.451 1.876-13 2 4.067-1.554 8.4-2.22 13-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1082.5 317.5c-3.77 1.295-7.77 1.961-12 2 3.71-1.636 7.71-2.302 12-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M328.5 314.5h1c.851 2.382 2.184 4.382 4 6v1c-2.853-1.333-4.519-3.666-5-7z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M439.5 22.5h1c.167 99.667 0 199.334-.5 299-35.352.019-70.852.019-106.5 0v-1h106v-298z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M461.5 235.5v85h167a7058.311 7058.311 0 01-168 1 1797.25 1797.25 0 00-1-84.5c.544-.717 1.211-1.217 2-1.5z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M759.5 320.5h107c-35.069.67-70.236 1.336-105.5 2-.717-.544-1.217-1.211-1.5-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M887.5 320.5h168c-55.4.669-110.902 1.335-166.5 2-.717-.544-1.217-1.211-1.5-2z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1462.5 235.5c1 28.495 1.33 57.162 1 86-84.9-.332-169.74.002-254.5 1-.72-.544-1.22-1.211-1.5-2h255v-81-4z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1591.5 236.5v85h-107v-1h105c.67-28 1.33-56 2-84z"
          />
          <motion.path
            fill="transparent"
            stroke="#d7a09d"
            strokeWidth="10"
            transition={transition}
            variants={pathVariants}
            d="M1759.5 315.5a85.818 85.818 0 003 5.5c-36 .667-72 .667-108 0-.56-.383-.89-.883-1-1.5 35.29.987 70.62 1.32 106 1v-5z"
          />
        </motion.svg>
      )}
    </Box>
  );
});
