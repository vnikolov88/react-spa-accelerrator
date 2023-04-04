import { apiClient } from "@/utils/api";

export const getAllCharecters = async (page = 0) =>
  (await apiClient.get<GetCharectersResponse>(`/character?page=${page}`)).data;

export type GetCharectersResponse = {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results:
  {
    id: number,
    name: string,
    status: "Dead" | "Alive" | "unknown",
    species: string,
    type: string,
    gender: "unknown" | "Female" | "Male" | "Genderless",
    origin: {
      name: string,
      url: string
    },
    location: {
      name: string,
      url: string
    },
    image: string,
    episode: string[],
    url: string,
    created: Date
  }[]
};

export const getCharecterById = async (id: number) =>
  (await apiClient.get<GetCharecterResponse>(`/character/${id}`)).data;

export type GetCharecterResponse = {
  id: number,
  name: string,
  status: "Dead" | "Alive" | "unknown",
  species: string,
  type: string,
  gender: "unknown" | "Female" | "Male" | "Genderless",
  origin: {
    name: string,
    url: string
  },
  location: {
    name: string,
    url: string
  },
  image: string,
}