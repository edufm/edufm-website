import fm from "front-matter"

export type ArticleMeta = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  image?: string
  published?: boolean
  externalPublicationName?: string
  externalPublicationUrl?: string
  readingTime?: number
}

export type Article = ArticleMeta & {
  content: string
}

type FrontMatterAttributes = {
  slug: string
  title: string
  date: string | Date
  category: string
  excerpt: string
  image?: string
  published?: boolean
  externalPublicationName?: string
  externalPublicationUrl?: string
}

function getArticleModules(language: string) {
  var articleModules = {}
  if (language === "en") {
    articleModules = import.meta.glob("../content/en/articles/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    })
  }

  else if (language === "pt") {
    articleModules = import.meta.glob("../content/pt/articles/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    })
  }

  return Object.values(articleModules)
    .map((raw) => parseArticle(raw as string))
    .filter((article) => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

function normalizeDate(value: string | Date): string {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }

  return value
}

function parseArticle(raw: string): Article {
  const { attributes, body } = fm<FrontMatterAttributes>(raw)

  return {
    slug: attributes.slug,
    title: attributes.title,
    date: normalizeDate(attributes.date),
    category: attributes.category,
    excerpt: attributes.excerpt,
    image: attributes.image,
    published: attributes.published ?? true,
    externalPublicationName: attributes.externalPublicationName,
    externalPublicationUrl: attributes.externalPublicationUrl,
    readingTime: getReadingTime(body),
    content: body,
  }
}

export function getAllArticles(language: string): Article[] {
  return getArticleModules(language)
}

export function getArticleBySlug(language: string, slug: string): Article | undefined {
  return getArticleModules(language).find((article) => article.slug === slug)
}

export function getReadingTime(text: string): number {
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 150))
}
