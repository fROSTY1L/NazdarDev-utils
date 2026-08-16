import { experienceApi } from "@/entities/experience/api/articlesApi";
import { useQuery } from "@tanstack/react-query";

export function useExperience() {
    return useQuery({
        queryKey: ['experience'],
        queryFn: () => experienceApi.getAll(),
    })
}