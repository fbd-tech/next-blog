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

    static list = `query PostListQuery($offsetPagination: OffsetPagination!) {
      posts(where: {offsetPagination: $offsetPagination}) {
        edges {
          node {
            ${this._itemsOnList}
          }
        }
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }`

    static listByCategory = `query PostListByCategoryQuery($offsetPagination: OffsetPagination!, $categoryId: Int!) {
      posts(where: {offsetPagination: $offsetPagination, categoryId: $categoryId}) {
        edges {
          node {
            ${this._itemsOnList}
          }
        }
        pageInfo {
          offsetPagination {
            total
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

    static total = `query PostTotalQuery {
      posts {
        pageInfo {
          offsetPagination {
            total
          }
        }
      }
    }`
}