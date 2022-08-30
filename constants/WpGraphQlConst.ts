export class WpGraphQlPostConst {
    private static _itemsOnList = `
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      date
      excerpt
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      slug
      title`

    private static _itemsOnOne = `
      categories {
        edges {
          node {
            name
            slug
          }
        }
      }
      date
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      id
      slug
      title`

    static list = `query PostListQuery {
      posts {
        edges {
          node {
            ${this._itemsOnList}
          }
        }
      }
    }`

    static listByCategory = `query PostListByCategoryQuery($categoryId: Int!) {
      posts(where: {categoryId: $categoryId}) {
        edges {
          node {
            ${this._itemsOnList}
          }
        }
      }
    }`

    static one = `query PostQuery($id: ID!) {
      post(id: $id, idType: SLUG) {
        ${this._itemsOnOne}
      }
    }`

    static allSlugList = `query PostAllSlugListQuery {
      posts(first: 10000) {
        edges {
          node {
            slug
          }
        }
      }
    }`

    static allCategorySlugList = `query PostAllCategorySlugListQuery {
      categories {
        edges {
          node {
            slug
          }
        }
      }
    }`

    static categoryIdBySlug = `query PostCategoryIdBySlugQuery($id: ID!) {
      category(id: $id, idType: SLUG) {
        categoryId
      }
    }`
}