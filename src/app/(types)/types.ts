// rename file to index.ts

export interface TProject {
    title: string
    id: string
    pic: string[]
    techstack: {
        technology: string
        usage: string
    }[]
    backend: string | undefined
    description: string
    repo: string
    webLink: string
    features: string[]
    learnt: string[]
    struggled: string[] | undefined
}
