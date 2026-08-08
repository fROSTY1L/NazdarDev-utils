import { articleApi } from "@/entities/articles";
import { useQuery } from "@tanstack/react-query";

export function useArticles() {

    return useQuery({
        queryKey: ['articles'],
        queryFn: () => articleApi.getAll(),
    })
} 