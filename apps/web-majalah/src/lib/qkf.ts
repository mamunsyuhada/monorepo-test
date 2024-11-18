import { createQueryKeyStore } from "@lukemorales/query-key-factory";
import type {} from "@tanstack/query-core";
import {
  Campaign,
  Category,
  CustomTags,
  Edition,
  Editorial,
  Magazine,
  Microsite,
  Post,
  SocialMedia,
  StrapiResponseSuccess,
  StrapiSingleResponseSuccess,
  SubCategory,
  Tag,
  UserRaw,
} from "api-types";
import qs from "qs";

import { api } from "./ky";

export const queries = createQueryKeyStore({
  // Generated APIs
  campaigns: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `campaigns${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Campaign>>(),
    }),
  },
  categories: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `categories${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Category>>(),
    }),
    detail: (idOrName, params) => ({
      queryKey: [idOrName, { params }],
      queryFn: () =>
        api
          .get(
            `categories/${idOrName}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Category>>(),
    }),
  },
  microsites: {
    detail: (idOrName, params) => ({
      queryKey: [idOrName, { params }],
      queryFn: () =>
        api
          .get(
            `microsites/${idOrName}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Microsite>>(),
    }),
  },
  posts: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `posts${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Post>>(),
    }),
    detail: (idOrSlug, params) => ({
      queryKey: [idOrSlug, { params }],
      queryFn: () =>
        api
          .get(
            `posts/${idOrSlug}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Post>>(),
    }),
    infinite: (params) => ({
      queryKey: [{ params }],
      queryFn: ({ pageParam = 1 }) =>
        api
          .get(
            `posts${
              params
                ? `?${qs.stringify(
                    {
                      ...params,
                      pagination: {
                        ...params.pagination,
                        page: pageParam,
                      },
                    },
                    { encodeValuesOnly: true }
                  )}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Post>>(),
    }),
  },
  socialMedias: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `social-medias${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<SocialMedia>>(),
    }),
  },
  subCategories: {
    detail: (idOrSlug, params) => ({
      queryKey: [idOrSlug, { params }],
      queryFn: () =>
        api
          .get(
            `sub-categories/${idOrSlug}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<SubCategory>>(),
    }),
  },
  tags: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `tags${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Tag>>(),
    }),
    detail: (idOrSlug, params) => ({
      queryKey: [idOrSlug, { params }],
      queryFn: () =>
        api
          .get(
            `tags/${idOrSlug}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Tag>>(),
    }),
  },
  users: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `users${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<UserRaw[]>(),
    }),
    detail: (idOrUsername, params) => ({
      queryKey: [idOrUsername, { params }],
      queryFn: () =>
        api
          .get(
            `users/${idOrUsername}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<UserRaw>(),
    }),
  },
  // Custom APIs
  viewCountPosts: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `custom/posts/view-count${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<{ data: [{ total: number; totalPosts: string }] }>(),
    }),
  },
  popularTags: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `custom/tags/popular${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<CustomTags>(),
    }),
    infinite: (params) => ({
      queryKey: [{ params }],
      queryFn: ({ pageParam = 0 }) =>
        api
          .get(
            `custom/tags/popular${
              params
                ? `?${qs.stringify(
                    {
                      ...params,
                      pagination: {
                        ...params.pagination,
                        start: pageParam,
                      },
                    },
                    { encodeValuesOnly: true }
                  )}`
                : ""
            }`
          )
          .json<CustomTags>(),
    }),
  },
  magazine: {
    infinite: (params) => ({
      queryKey: [{ params }],
      queryFn: ({ pageParam = 1 }) =>
        api
          .get(
            `magazines${
              params
                ? `?${qs.stringify(
                    {
                      ...params,
                      pagination: {
                        ...params.pagination,
                        page: pageParam,
                      },
                    },
                    { encodeValuesOnly: true }
                  )}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Magazine>>(),
    }),
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `magazines${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Magazine>>(),
    }),
    detail: (idOrSlug, params) => ({
      queryKey: [idOrSlug, { params }],
      queryFn: () =>
        api
          .get(
            `magazines/${idOrSlug}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Magazine>>(),
    }),
  },
  edition: {
    infinite: (params) => ({
      queryKey: [{ params }],
      queryFn: ({ pageParam = 1 }) =>
        api
          .get(
            `editions${
              params
                ? `?${qs.stringify(
                    {
                      ...params,
                      pagination: {
                        ...params.pagination,
                        page: pageParam,
                      },
                    },
                    { encodeValuesOnly: true }
                  )}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Edition>>(),
    }),
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `editions${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Edition>>(),
    }),
    detail: (idOrSlug, params) => ({
      queryKey: [idOrSlug, { params }],
      queryFn: () =>
        api
          .get(
            `editions/${idOrSlug}${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiSingleResponseSuccess<Edition>>(),
    }),
  },
  editorial: {
    list: (params) => ({
      queryKey: [{ params }],
      queryFn: () =>
        api
          .get(
            `editorials${
              params
                ? `?${qs.stringify(params, { encodeValuesOnly: true })}`
                : ""
            }`
          )
          .json<StrapiResponseSuccess<Editorial>>(),
    }),
  },
});
