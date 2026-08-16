import { experienceApi } from "@/entities/experience/api/articlesApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteExperience() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => experienceApi.remove(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['experience'] })
        },
    })
}