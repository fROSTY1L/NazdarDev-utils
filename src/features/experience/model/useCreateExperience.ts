import { experienceApi } from "@/entities/experience/api/articlesApi";
import type { ExperienceInsert } from "@/entities/experience/models/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateExperience() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: ExperienceInsert) => experienceApi.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['experience'] })
        },
    })
}