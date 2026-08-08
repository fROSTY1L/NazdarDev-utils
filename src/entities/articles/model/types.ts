export interface Article {
    id: number
    title: string
    img: string 
    description: string
    article: string
    created_at: string
    reading_time: number
}

export type ArticleInsert = {
    title: string
    img: string
    description: string
    article: string
    reading_time: number
}

export type ArticleUpdate = Partial<ArticleInsert>