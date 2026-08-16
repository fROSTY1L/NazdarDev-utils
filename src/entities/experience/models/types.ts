export interface Experience {
    id: number
    title: string
    description: string
    organization: string
    from: string
    until: string | null
    short_about: string
    tech_stack: string
}

export type ExperienceInsert = {
    title: string
    description: string
    organization: string
    from: string
    until: string | null
    short_about: string
    tech_stack: string
}

export type ExperienceUpdate = Partial<ExperienceInsert>