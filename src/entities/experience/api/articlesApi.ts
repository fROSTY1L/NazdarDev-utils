import { supabase } from "@/app/lib/supabase";
import type { Experience, ExperienceInsert, ExperienceUpdate } from "../models/types";

export const experienceApi = {
    getAll: async (): Promise<Experience[]> => {
        const { data, error } = await supabase
            .from('experience')
            .select('*')
            .order('until', {ascending: false, nullsFirst: true})

        if (error) throw error;
        return data;
    },

    getById: async (id: number): Promise<Experience> => {
        const { data, error } = await supabase
            .from('experience')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error;
        return data;
    },

    create: async (payload: ExperienceInsert): Promise<Experience> => {
        const { data, error } = await supabase
            .from('experience')
            .insert(payload)
            .select()
            .single()

        if (error) throw error;
        return data;
    },

    update: async (id: number, payload: ExperienceUpdate): Promise<Experience> => {
        const { data, error } = await supabase
            .from('experience')
            .update(payload)
            .eq('id', id)
            .select()
            .single()

        if (error) throw error;
        return data;
    },

    remove: async (id: number): Promise<void> => {
        const { error } = await supabase
            .from('experience')
            .delete()
            .eq('id', id)

        if (error) throw error;
    }
}