import { articleApi, type ArticleInsert } from '@/entities/articles';
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useCreateArticle() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (payload: ArticleInsert) => articleApi.create(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['articles'] })
        },
    })
}