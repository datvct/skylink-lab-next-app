import httpClient from "../../http-client"

const getPage = async (slug: string, lang?: string) => {
  const response = await httpClient.get<{ data: any }>(
    `pages?populate=*&publicationState=preview&filters[slug][$eq]=${slug}&filters[publishedAt][$notNull]=true&locale=${lang}`,
    null,
    {
      next: {
        revalidate: 15,
        tags: [`pages_${slug}`, "homepage", `posts_${slug}`, `category_${slug}`],
      },
    },
  )

  return response.data
}

export default getPage
