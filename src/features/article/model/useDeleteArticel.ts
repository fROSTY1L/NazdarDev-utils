import { articleApi } from "@/entities/articles";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useDeleteArticle () {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => articleApi.remove(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] })
        },
    })
}