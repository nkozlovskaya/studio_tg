import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IResult } from "../../types/ResultType";

export const peopleAPI = createApi({
  reducerPath: "peopleAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  tagTypes: ["People"],
  endpoints: (build) => ({
    fetchPeople: build.query<IResult, number>({
      query: (page) => `/people/?page=${page}`,
      // ({
      // url: (page) => `/people?page=${page}`,
      // params: {
      //   page,
      // },
      // })
      providesTags: (result) => ["People"],
    }),
  }),
});
