import { supabase } from "@/app/lib/supabase";
import type { Article, ArticleInsert, ArticleUpdate } from "../model/types";

export const articleApi = {
    getAll: async (): Promise<Article[]> => {
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) throw error;
        return data ?? [];
    },

    getById: async (id: number): Promise<Article> => {
        const { data, error } = await supabase
            .from('articles')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error;
        return data;
    },

    create: async (payload: ArticleInsert): Promise<Article> => {
        const { data, error } = await supabase
            .from('articles')
            .insert(payload)
            .select()
            .single()
        if (error) throw error;
        return data;
            
    },

    update: async (id: number, payload: ArticleUpdate): Promise<Article> => {
        const { data, error } = await supabase
            .from('articles')
            .update(payload)
            .eq('id', id)
            .select()
            .single()

        if (error) throw error;
        return data;
    },

    remove: async (id: number): Promise<void> => {
        const { error } = await supabase
            .from('articles')
            .delete()
            .eq('id', id)
        
        if (error) throw error;
    }
}