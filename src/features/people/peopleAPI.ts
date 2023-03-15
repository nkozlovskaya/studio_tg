import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
// import { IPerson } from "../../types/PersonType";
import { IResult } from "../../types/ResultType";

export const peopleAPI = createApi({
  reducerPath: "peopleAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api" }),
  tagTypes: ["People"],
  endpoints: (build) => ({
    fetchPeople: build.query<IResult, number>({
      query: (page: number) => ({
        url: `/people`,
        params: {
          _page: page,
        },
      }),
      providesTags: (result) => ["People"],
    }),
  }),
});
