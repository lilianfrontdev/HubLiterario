import type { Reflection } from "../types/api";
import { api } from "./api";

export const reflectionService = {
  getAllReflections: async (): Promise<Reflection[]> => {
    const response = await api.get<Reflection[]>("/reflections");
    return response.data;
  },

  createReflection: async (
    reflectionData: Omit<Reflection, "id">,
  ): Promise<Reflection> => {
    const response = await api.post<Reflection>("/reflections", reflectionData);
    return response.data;
  },

  likeReflection: async (
    id: string,
    currentLikes: number,
  ): Promise<Reflection> => {
    const response = await api.put<Reflection>(`/reflections/${id}`, {
      likes: currentLikes + 1,
    });
    return response.data;
  },
};
