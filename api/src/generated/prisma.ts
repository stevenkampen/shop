import { Prisma as BasePrisma, BasePrismaOptions } from 'prisma-binding'
import { GraphQLResolveInfo } from 'graphql'

export const typeDefs = `
type Brand implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type Cart implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  products(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct!]
  user(where: UserWhereInput): User
}

type CartProduct implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Int!
  product(where: ProductWhereInput): Product!
  cart(where: CartWhereInput): Cart!
}

type Post implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
  author(where: UserWhereInput): User!
}

type Product implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  price: Int!
  currency: Currency!
  brand(where: BrandWhereInput): Brand!
  name: String!
}

type User implements Node {
  id: ID!
  email: String!
  password: String!
  name: String!
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]
}

type AggregateBrand {
  count: Int!
}

type AggregateCart {
  count: Int!
}

type AggregateCartProduct {
  count: Int!
}

type AggregatePost {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """
  The number of nodes that have been affected by the Batch operation.
  """
  count: Long!
}

"""
A connection to a list of items.
"""
type BrandConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  name: String!
}

input BrandCreateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
}

"""
An edge in a connection.
"""
type BrandEdge {
  """
  The item at the end of the edge.
  """
  node: Brand!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
}

type BrandPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BrandSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BrandSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
}

input BrandUpdateDataInput {
  name: String
}

input BrandUpdateInput {
  name: String
}

input BrandUpdateNestedInput {
  where: BrandWhereUniqueInput!
  data: BrandUpdateDataInput!
}

input BrandUpdateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
  disconnect: BrandWhereUniqueInput
  delete: BrandWhereUniqueInput
  update: BrandUpdateNestedInput
  upsert: BrandUpsertNestedInput
}

input BrandUpsertNestedInput {
  where: BrandWhereUniqueInput!
  update: BrandUpdateDataInput!
  create: BrandCreateInput!
}

input BrandWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [BrandWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [BrandWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
}

input BrandWhereUniqueInput {
  id: ID
  name: String
}

"""
A connection to a list of items.
"""
type CartConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CartEdge]!
  aggregate: AggregateCart!
}

input CartCreateInput {
  products: CartProductCreateManyWithoutCartInput
  user: UserCreateOneInput
}

input CartCreateOneWithoutProductsInput {
  create: CartCreateWithoutProductsInput
  connect: CartWhereUniqueInput
}

input CartCreateWithoutProductsInput {
  user: UserCreateOneInput
}

"""
An edge in a connection.
"""
type CartEdge {
  """
  The item at the end of the edge.
  """
  node: Cart!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CartOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CartPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
}

"""
A connection to a list of items.
"""
type CartProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [CartProductEdge]!
  aggregate: AggregateCartProduct!
}

input CartProductCreateInput {
  quantity: Int
  product: ProductCreateOneInput!
  cart: CartCreateOneWithoutProductsInput!
}

input CartProductCreateManyWithoutCartInput {
  create: [CartProductCreateWithoutCartInput!]
  connect: [CartProductWhereUniqueInput!]
}

input CartProductCreateWithoutCartInput {
  quantity: Int
  product: ProductCreateOneInput!
}

"""
An edge in a connection.
"""
type CartProductEdge {
  """
  The item at the end of the edge.
  """
  node: CartProduct!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum CartProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  quantity_ASC
  quantity_DESC
}

type CartProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  quantity: Int!
}

type CartProductSubscriptionPayload {
  mutation: MutationType!
  node: CartProduct
  updatedFields: [String!]
  previousValues: CartProductPreviousValues
}

input CartProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartProductWhereInput
}

input CartProductUpdateInput {
  quantity: Int
  product: ProductUpdateOneInput
  cart: CartUpdateOneWithoutProductsInput
}

input CartProductUpdateManyWithoutCartInput {
  create: [CartProductCreateWithoutCartInput!]
  connect: [CartProductWhereUniqueInput!]
  disconnect: [CartProductWhereUniqueInput!]
  delete: [CartProductWhereUniqueInput!]
  update: [CartProductUpdateWithoutCartInput!]
  upsert: [CartProductUpsertWithoutCartInput!]
}

input CartProductUpdateWithoutCartDataInput {
  quantity: Int
  product: ProductUpdateOneInput
}

input CartProductUpdateWithoutCartInput {
  where: CartProductWhereUniqueInput!
  data: CartProductUpdateWithoutCartDataInput!
}

input CartProductUpsertWithoutCartInput {
  where: CartProductWhereUniqueInput!
  update: CartProductUpdateWithoutCartDataInput!
  create: CartProductCreateWithoutCartInput!
}

input CartProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartProductWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  quantity: Int
  """
  All values that are not equal to given value.
  """
  quantity_not: Int
  """
  All values that are contained in given list.
  """
  quantity_in: [Int!]
  """
  All values that are not contained in given list.
  """
  quantity_not_in: [Int!]
  """
  All values less than the given value.
  """
  quantity_lt: Int
  """
  All values less than or equal the given value.
  """
  quantity_lte: Int
  """
  All values greater than the given value.
  """
  quantity_gt: Int
  """
  All values greater than or equal the given value.
  """
  quantity_gte: Int
  product: ProductWhereInput
  cart: CartWhereInput
}

input CartProductWhereUniqueInput {
  id: ID
}

type CartSubscriptionPayload {
  mutation: MutationType!
  node: Cart
  updatedFields: [String!]
  previousValues: CartPreviousValues
}

input CartSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: CartWhereInput
}

input CartUpdateInput {
  products: CartProductUpdateManyWithoutCartInput
  user: UserUpdateOneInput
}

input CartUpdateOneWithoutProductsInput {
  create: CartCreateWithoutProductsInput
  connect: CartWhereUniqueInput
  disconnect: CartWhereUniqueInput
  delete: CartWhereUniqueInput
  update: CartUpdateWithoutProductsInput
  upsert: CartUpsertWithoutProductsInput
}

input CartUpdateWithoutProductsDataInput {
  user: UserUpdateOneInput
}

input CartUpdateWithoutProductsInput {
  where: CartWhereUniqueInput!
  data: CartUpdateWithoutProductsDataInput!
}

input CartUpsertWithoutProductsInput {
  where: CartWhereUniqueInput!
  update: CartUpdateWithoutProductsDataInput!
  create: CartCreateWithoutProductsInput!
}

input CartWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [CartWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [CartWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  products_every: CartProductWhereInput
  products_some: CartProductWhereInput
  products_none: CartProductWhereInput
  user: UserWhereInput
}

input CartWhereUniqueInput {
  id: ID
}

enum Currency {
  GBP
}

scalar DateTime

"""
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""
An object with an ID
"""
interface Node {
  """
  The id of the object.
  """
  id: ID!
}

"""
Information about pagination in a connection.
"""
type PageInfo {
  """
  When paginating forwards, are there more items?
  """
  hasNextPage: Boolean!
  """
  When paginating backwards, are there more items?
  """
  hasPreviousPage: Boolean!
  """
  When paginating backwards, the cursor to continue.
  """
  startCursor: String
  """
  When paginating forwards, the cursor to continue.
  """
  endCursor: String
}

"""
A connection to a list of items.
"""
type PostConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [PostEdge]!
  aggregate: AggregatePost!
}

input PostCreateInput {
  isPublished: Boolean
  title: String!
  text: String!
  author: UserCreateOneWithoutPostsInput!
}

input PostCreateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
}

input PostCreateWithoutAuthorInput {
  isPublished: Boolean
  title: String!
  text: String!
}

"""
An edge in a connection.
"""
type PostEdge {
  """
  The item at the end of the edge.
  """
  node: Post!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum PostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  isPublished_ASC
  isPublished_DESC
  title_ASC
  title_DESC
  text_ASC
  text_DESC
}

type PostPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  isPublished: Boolean!
  title: String!
  text: String!
}

type PostSubscriptionPayload {
  mutation: MutationType!
  node: Post
  updatedFields: [String!]
  previousValues: PostPreviousValues
}

input PostSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PostWhereInput
}

input PostUpdateInput {
  isPublished: Boolean
  title: String
  text: String
  author: UserUpdateOneWithoutPostsInput
}

input PostUpdateManyWithoutAuthorInput {
  create: [PostCreateWithoutAuthorInput!]
  connect: [PostWhereUniqueInput!]
  disconnect: [PostWhereUniqueInput!]
  delete: [PostWhereUniqueInput!]
  update: [PostUpdateWithoutAuthorInput!]
  upsert: [PostUpsertWithoutAuthorInput!]
}

input PostUpdateWithoutAuthorDataInput {
  isPublished: Boolean
  title: String
  text: String
}

input PostUpdateWithoutAuthorInput {
  where: PostWhereUniqueInput!
  data: PostUpdateWithoutAuthorDataInput!
}

input PostUpsertWithoutAuthorInput {
  where: PostWhereUniqueInput!
  update: PostUpdateWithoutAuthorDataInput!
  create: PostCreateWithoutAuthorInput!
}

input PostWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [PostWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [PostWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  isPublished: Boolean
  """
  All values that are not equal to given value.
  """
  isPublished_not: Boolean
  title: String
  """
  All values that are not equal to given value.
  """
  title_not: String
  """
  All values that are contained in given list.
  """
  title_in: [String!]
  """
  All values that are not contained in given list.
  """
  title_not_in: [String!]
  """
  All values less than the given value.
  """
  title_lt: String
  """
  All values less than or equal the given value.
  """
  title_lte: String
  """
  All values greater than the given value.
  """
  title_gt: String
  """
  All values greater than or equal the given value.
  """
  title_gte: String
  """
  All values containing the given string.
  """
  title_contains: String
  """
  All values not containing the given string.
  """
  title_not_contains: String
  """
  All values starting with the given string.
  """
  title_starts_with: String
  """
  All values not starting with the given string.
  """
  title_not_starts_with: String
  """
  All values ending with the given string.
  """
  title_ends_with: String
  """
  All values not ending with the given string.
  """
  title_not_ends_with: String
  text: String
  """
  All values that are not equal to given value.
  """
  text_not: String
  """
  All values that are contained in given list.
  """
  text_in: [String!]
  """
  All values that are not contained in given list.
  """
  text_not_in: [String!]
  """
  All values less than the given value.
  """
  text_lt: String
  """
  All values less than or equal the given value.
  """
  text_lte: String
  """
  All values greater than the given value.
  """
  text_gt: String
  """
  All values greater than or equal the given value.
  """
  text_gte: String
  """
  All values containing the given string.
  """
  text_contains: String
  """
  All values not containing the given string.
  """
  text_not_contains: String
  """
  All values starting with the given string.
  """
  text_starts_with: String
  """
  All values not starting with the given string.
  """
  text_not_starts_with: String
  """
  All values ending with the given string.
  """
  text_ends_with: String
  """
  All values not ending with the given string.
  """
  text_not_ends_with: String
  author: UserWhereInput
}

input PostWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type ProductConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  price: Int!
  currency: Currency!
  name: String!
  brand: BrandCreateOneInput!
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

"""
An edge in a connection.
"""
type ProductEdge {
  """
  The item at the end of the edge.
  """
  node: Product!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  price_ASC
  price_DESC
  currency_ASC
  currency_DESC
  name_ASC
  name_DESC
}

type ProductPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  price: Int!
  currency: Currency!
  name: String!
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
}

input ProductUpdateDataInput {
  price: Int
  currency: Currency
  name: String
  brand: BrandUpdateOneInput
}

input ProductUpdateInput {
  price: Int
  currency: Currency
  name: String
  brand: BrandUpdateOneInput
}

input ProductUpdateNestedInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateDataInput!
}

input ProductUpdateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
  disconnect: ProductWhereUniqueInput
  delete: ProductWhereUniqueInput
  update: ProductUpdateNestedInput
  upsert: ProductUpsertNestedInput
}

input ProductUpsertNestedInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [ProductWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [ProductWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  createdAt: DateTime
  """
  All values that are not equal to given value.
  """
  createdAt_not: DateTime
  """
  All values that are contained in given list.
  """
  createdAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  createdAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  createdAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  createdAt_lte: DateTime
  """
  All values greater than the given value.
  """
  createdAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  createdAt_gte: DateTime
  updatedAt: DateTime
  """
  All values that are not equal to given value.
  """
  updatedAt_not: DateTime
  """
  All values that are contained in given list.
  """
  updatedAt_in: [DateTime!]
  """
  All values that are not contained in given list.
  """
  updatedAt_not_in: [DateTime!]
  """
  All values less than the given value.
  """
  updatedAt_lt: DateTime
  """
  All values less than or equal the given value.
  """
  updatedAt_lte: DateTime
  """
  All values greater than the given value.
  """
  updatedAt_gt: DateTime
  """
  All values greater than or equal the given value.
  """
  updatedAt_gte: DateTime
  price: Int
  """
  All values that are not equal to given value.
  """
  price_not: Int
  """
  All values that are contained in given list.
  """
  price_in: [Int!]
  """
  All values that are not contained in given list.
  """
  price_not_in: [Int!]
  """
  All values less than the given value.
  """
  price_lt: Int
  """
  All values less than or equal the given value.
  """
  price_lte: Int
  """
  All values greater than the given value.
  """
  price_gt: Int
  """
  All values greater than or equal the given value.
  """
  price_gte: Int
  currency: Currency
  """
  All values that are not equal to given value.
  """
  currency_not: Currency
  """
  All values that are contained in given list.
  """
  currency_in: [Currency!]
  """
  All values that are not contained in given list.
  """
  currency_not_in: [Currency!]
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  brand: BrandWhereInput
}

input ProductWhereUniqueInput {
  id: ID
}

"""
A connection to a list of items.
"""
type UserConnection {
  """
  Information to aid in pagination.
  """
  pageInfo: PageInfo!
  """
  A list of edges.
  """
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  password: String!
  name: String!
  posts: PostCreateManyWithoutAuthorInput
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPostsInput {
  email: String!
  password: String!
  name: String!
}

"""
An edge in a connection.
"""
type UserEdge {
  """
  The item at the end of the edge.
  """
  node: User!
  """
  A cursor for use in pagination.
  """
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  password: String!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserSubscriptionWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserSubscriptionWhereInput!]
  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]
  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String
  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]
  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateDataInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateInput {
  email: String
  password: String
  name: String
  posts: PostUpdateManyWithoutAuthorInput
}

input UserUpdateNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  disconnect: UserWhereUniqueInput
  delete: UserWhereUniqueInput
  update: UserUpdateNestedInput
  upsert: UserUpsertNestedInput
}

input UserUpdateOneWithoutPostsInput {
  create: UserCreateWithoutPostsInput
  connect: UserWhereUniqueInput
  disconnect: UserWhereUniqueInput
  delete: UserWhereUniqueInput
  update: UserUpdateWithoutPostsInput
  upsert: UserUpsertWithoutPostsInput
}

input UserUpdateWithoutPostsDataInput {
  email: String
  password: String
  name: String
}

input UserUpdateWithoutPostsInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutPostsDataInput!
}

input UserUpsertNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPostsInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutPostsDataInput!
  create: UserCreateWithoutPostsInput!
}

input UserWhereInput {
  """
  Logical AND on all given filters.
  """
  AND: [UserWhereInput!]
  """
  Logical OR on all given filters.
  """
  OR: [UserWhereInput!]
  id: ID
  """
  All values that are not equal to given value.
  """
  id_not: ID
  """
  All values that are contained in given list.
  """
  id_in: [ID!]
  """
  All values that are not contained in given list.
  """
  id_not_in: [ID!]
  """
  All values less than the given value.
  """
  id_lt: ID
  """
  All values less than or equal the given value.
  """
  id_lte: ID
  """
  All values greater than the given value.
  """
  id_gt: ID
  """
  All values greater than or equal the given value.
  """
  id_gte: ID
  """
  All values containing the given string.
  """
  id_contains: ID
  """
  All values not containing the given string.
  """
  id_not_contains: ID
  """
  All values starting with the given string.
  """
  id_starts_with: ID
  """
  All values not starting with the given string.
  """
  id_not_starts_with: ID
  """
  All values ending with the given string.
  """
  id_ends_with: ID
  """
  All values not ending with the given string.
  """
  id_not_ends_with: ID
  email: String
  """
  All values that are not equal to given value.
  """
  email_not: String
  """
  All values that are contained in given list.
  """
  email_in: [String!]
  """
  All values that are not contained in given list.
  """
  email_not_in: [String!]
  """
  All values less than the given value.
  """
  email_lt: String
  """
  All values less than or equal the given value.
  """
  email_lte: String
  """
  All values greater than the given value.
  """
  email_gt: String
  """
  All values greater than or equal the given value.
  """
  email_gte: String
  """
  All values containing the given string.
  """
  email_contains: String
  """
  All values not containing the given string.
  """
  email_not_contains: String
  """
  All values starting with the given string.
  """
  email_starts_with: String
  """
  All values not starting with the given string.
  """
  email_not_starts_with: String
  """
  All values ending with the given string.
  """
  email_ends_with: String
  """
  All values not ending with the given string.
  """
  email_not_ends_with: String
  password: String
  """
  All values that are not equal to given value.
  """
  password_not: String
  """
  All values that are contained in given list.
  """
  password_in: [String!]
  """
  All values that are not contained in given list.
  """
  password_not_in: [String!]
  """
  All values less than the given value.
  """
  password_lt: String
  """
  All values less than or equal the given value.
  """
  password_lte: String
  """
  All values greater than the given value.
  """
  password_gt: String
  """
  All values greater than or equal the given value.
  """
  password_gte: String
  """
  All values containing the given string.
  """
  password_contains: String
  """
  All values not containing the given string.
  """
  password_not_contains: String
  """
  All values starting with the given string.
  """
  password_starts_with: String
  """
  All values not starting with the given string.
  """
  password_not_starts_with: String
  """
  All values ending with the given string.
  """
  password_ends_with: String
  """
  All values not ending with the given string.
  """
  password_not_ends_with: String
  name: String
  """
  All values that are not equal to given value.
  """
  name_not: String
  """
  All values that are contained in given list.
  """
  name_in: [String!]
  """
  All values that are not contained in given list.
  """
  name_not_in: [String!]
  """
  All values less than the given value.
  """
  name_lt: String
  """
  All values less than or equal the given value.
  """
  name_lte: String
  """
  All values greater than the given value.
  """
  name_gt: String
  """
  All values greater than or equal the given value.
  """
  name_gte: String
  """
  All values containing the given string.
  """
  name_contains: String
  """
  All values not containing the given string.
  """
  name_not_contains: String
  """
  All values starting with the given string.
  """
  name_starts_with: String
  """
  All values not starting with the given string.
  """
  name_not_starts_with: String
  """
  All values ending with the given string.
  """
  name_ends_with: String
  """
  All values not ending with the given string.
  """
  name_not_ends_with: String
  posts_every: PostWhereInput
  posts_some: PostWhereInput
  posts_none: PostWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Mutation {
  createPost(data: PostCreateInput!): Post!
  createUser(data: UserCreateInput!): User!
  createBrand(data: BrandCreateInput!): Brand!
  createProduct(data: ProductCreateInput!): Product!
  createCart(data: CartCreateInput!): Cart!
  createCartProduct(data: CartProductCreateInput!): CartProduct!
  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateCart(data: CartUpdateInput!, where: CartWhereUniqueInput!): Cart
  updateCartProduct(data: CartProductUpdateInput!, where: CartProductWhereUniqueInput!): CartProduct
  deletePost(where: PostWhereUniqueInput!): Post
  deleteUser(where: UserWhereUniqueInput!): User
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteCart(where: CartWhereUniqueInput!): Cart
  deleteCartProduct(where: CartProductWhereUniqueInput!): CartProduct
  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  upsertCart(where: CartWhereUniqueInput!, create: CartCreateInput!, update: CartUpdateInput!): Cart!
  upsertCartProduct(where: CartProductWhereUniqueInput!, create: CartProductCreateInput!, update: CartProductUpdateInput!): CartProduct!
  updateManyPosts(data: PostUpdateInput!, where: PostWhereInput!): BatchPayload!
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput!): BatchPayload!
  updateManyBrands(data: BrandUpdateInput!, where: BrandWhereInput!): BatchPayload!
  updateManyProducts(data: ProductUpdateInput!, where: ProductWhereInput!): BatchPayload!
  updateManyCarts(data: CartUpdateInput!, where: CartWhereInput!): BatchPayload!
  updateManyCartProducts(data: CartProductUpdateInput!, where: CartProductWhereInput!): BatchPayload!
  deleteManyPosts(where: PostWhereInput!): BatchPayload!
  deleteManyUsers(where: UserWhereInput!): BatchPayload!
  deleteManyBrands(where: BrandWhereInput!): BatchPayload!
  deleteManyProducts(where: ProductWhereInput!): BatchPayload!
  deleteManyCarts(where: CartWhereInput!): BatchPayload!
  deleteManyCartProducts(where: CartProductWhereInput!): BatchPayload!
}

type Query {
  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  carts(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Cart]!
  cartProducts(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CartProduct]!
  post(where: PostWhereUniqueInput!): Post
  user(where: UserWhereUniqueInput!): User
  brand(where: BrandWhereUniqueInput!): Brand
  product(where: ProductWhereUniqueInput!): Product
  cart(where: CartWhereUniqueInput!): Cart
  cartProduct(where: CartProductWhereUniqueInput!): CartProduct
  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  cartsConnection(where: CartWhereInput, orderBy: CartOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartConnection!
  cartProductsConnection(where: CartProductWhereInput, orderBy: CartProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CartProductConnection!
  """
  Fetches an object given its ID
  """
  node("""
  The ID of an object
  """
  id: ID!): Node
}

type Subscription {
  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  cart(where: CartSubscriptionWhereInput): CartSubscriptionPayload
  cartProduct(where: CartProductSubscriptionWhereInput): CartProductSubscriptionPayload
}
`

export type UserOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC'

export type BrandOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC'

export type Currency = 
  'GBP'

export type PostOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'isPublished_ASC' |
  'isPublished_DESC' |
  'title_ASC' |
  'title_DESC' |
  'text_ASC' |
  'text_DESC'

export type ProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'price_ASC' |
  'price_DESC' |
  'currency_ASC' |
  'currency_DESC' |
  'name_ASC' |
  'name_DESC'

export type CartOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC'

export type CartProductOrderByInput = 
  'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'quantity_ASC' |
  'quantity_DESC'

export type MutationType = 
  'CREATED' |
  'UPDATED' |
  'DELETED'

export interface CartProductCreateWithoutCartInput {
  quantity?: Int
  product: ProductCreateOneInput
}

export interface PostWhereInput {
  AND?: PostWhereInput[] | PostWhereInput
  OR?: PostWhereInput[] | PostWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  isPublished?: Boolean
  isPublished_not?: Boolean
  title?: String
  title_not?: String
  title_in?: String[] | String
  title_not_in?: String[] | String
  title_lt?: String
  title_lte?: String
  title_gt?: String
  title_gte?: String
  title_contains?: String
  title_not_contains?: String
  title_starts_with?: String
  title_not_starts_with?: String
  title_ends_with?: String
  title_not_ends_with?: String
  text?: String
  text_not?: String
  text_in?: String[] | String
  text_not_in?: String[] | String
  text_lt?: String
  text_lte?: String
  text_gt?: String
  text_gte?: String
  text_contains?: String
  text_not_contains?: String
  text_starts_with?: String
  text_not_starts_with?: String
  text_ends_with?: String
  text_not_ends_with?: String
  author?: UserWhereInput
}

export interface CartProductUpdateManyWithoutCartInput {
  create?: CartProductCreateWithoutCartInput[] | CartProductCreateWithoutCartInput
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  disconnect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  delete?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
  update?: CartProductUpdateWithoutCartInput[] | CartProductUpdateWithoutCartInput
  upsert?: CartProductUpsertWithoutCartInput[] | CartProductUpsertWithoutCartInput
}

export interface ProductUpdateInput {
  price?: Int
  currency?: Currency
  name?: String
  brand?: BrandUpdateOneInput
}

export interface CartUpdateInput {
  products?: CartProductUpdateManyWithoutCartInput
  user?: UserUpdateOneInput
}

export interface CartCreateWithoutProductsInput {
  user?: UserCreateOneInput
}

export interface BrandUpsertNestedInput {
  where: BrandWhereUniqueInput
  update: BrandUpdateDataInput
  create: BrandCreateInput
}

export interface CartProductSubscriptionWhereInput {
  AND?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  OR?: CartProductSubscriptionWhereInput[] | CartProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartProductWhereInput
}

export interface BrandUpdateDataInput {
  name?: String
}

export interface ProductWhereInput {
  AND?: ProductWhereInput[] | ProductWhereInput
  OR?: ProductWhereInput[] | ProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  price?: Int
  price_not?: Int
  price_in?: Int[] | Int
  price_not_in?: Int[] | Int
  price_lt?: Int
  price_lte?: Int
  price_gt?: Int
  price_gte?: Int
  currency?: Currency
  currency_not?: Currency
  currency_in?: Currency[] | Currency
  currency_not_in?: Currency[] | Currency
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  brand?: BrandWhereInput
}

export interface BrandUpdateNestedInput {
  where: BrandWhereUniqueInput
  data: BrandUpdateDataInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
  posts_every?: PostWhereInput
  posts_some?: PostWhereInput
  posts_none?: PostWhereInput
}

export interface PostCreateInput {
  isPublished?: Boolean
  title: String
  text: String
  author: UserCreateOneWithoutPostsInput
}

export interface CartWhereInput {
  AND?: CartWhereInput[] | CartWhereInput
  OR?: CartWhereInput[] | CartWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  products_every?: CartProductWhereInput
  products_some?: CartProductWhereInput
  products_none?: CartProductWhereInput
  user?: UserWhereInput
}

export interface UserCreateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface UserCreateWithoutPostsInput {
  email: String
  password: String
  name: String
}

export interface CartUpsertWithoutProductsInput {
  where: CartWhereUniqueInput
  update: CartUpdateWithoutProductsDataInput
  create: CartCreateWithoutProductsInput
}

export interface UserCreateInput {
  email: String
  password: String
  name: String
  posts?: PostCreateManyWithoutAuthorInput
}

export interface PostWhereUniqueInput {
  id?: ID_Input
}

export interface PostCreateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
}

export interface BrandWhereUniqueInput {
  id?: ID_Input
  name?: String
}

export interface PostCreateWithoutAuthorInput {
  isPublished?: Boolean
  title: String
  text: String
}

export interface CartWhereUniqueInput {
  id?: ID_Input
}

export interface BrandCreateInput {
  name: String
}

export interface CartUpdateWithoutProductsInput {
  where: CartWhereUniqueInput
  data: CartUpdateWithoutProductsDataInput
}

export interface ProductCreateInput {
  price: Int
  currency: Currency
  name: String
  brand: BrandCreateOneInput
}

export interface CartProductUpdateInput {
  quantity?: Int
  product?: ProductUpdateOneInput
  cart?: CartUpdateOneWithoutProductsInput
}

export interface BrandCreateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
}

export interface UserUpdateDataInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface CartCreateInput {
  products?: CartProductCreateManyWithoutCartInput
  user?: UserCreateOneInput
}

export interface UserUpdateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput
  delete?: UserWhereUniqueInput
  update?: UserUpdateNestedInput
  upsert?: UserUpsertNestedInput
}

export interface CartProductCreateManyWithoutCartInput {
  create?: CartProductCreateWithoutCartInput[] | CartProductCreateWithoutCartInput
  connect?: CartProductWhereUniqueInput[] | CartProductWhereUniqueInput
}

export interface ProductUpsertNestedInput {
  where: ProductWhereUniqueInput
  update: ProductUpdateDataInput
  create: ProductCreateInput
}

export interface BrandUpdateOneInput {
  create?: BrandCreateInput
  connect?: BrandWhereUniqueInput
  disconnect?: BrandWhereUniqueInput
  delete?: BrandWhereUniqueInput
  update?: BrandUpdateNestedInput
  upsert?: BrandUpsertNestedInput
}

export interface ProductUpdateNestedInput {
  where: ProductWhereUniqueInput
  data: ProductUpdateDataInput
}

export interface ProductCreateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
}

export interface CartProductUpdateWithoutCartDataInput {
  quantity?: Int
  product?: ProductUpdateOneInput
}

export interface UserCreateOneInput {
  create?: UserCreateInput
  connect?: UserWhereUniqueInput
}

export interface BrandWhereInput {
  AND?: BrandWhereInput[] | BrandWhereInput
  OR?: BrandWhereInput[] | BrandWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  name?: String
  name_not?: String
  name_in?: String[] | String
  name_not_in?: String[] | String
  name_lt?: String
  name_lte?: String
  name_gt?: String
  name_gte?: String
  name_contains?: String
  name_not_contains?: String
  name_starts_with?: String
  name_not_starts_with?: String
  name_ends_with?: String
  name_not_ends_with?: String
}

export interface CartProductCreateInput {
  quantity?: Int
  product: ProductCreateOneInput
  cart: CartCreateOneWithoutProductsInput
}

export interface ProductSubscriptionWhereInput {
  AND?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  OR?: ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: ProductWhereInput
}

export interface CartCreateOneWithoutProductsInput {
  create?: CartCreateWithoutProductsInput
  connect?: CartWhereUniqueInput
}

export interface CartProductWhereInput {
  AND?: CartProductWhereInput[] | CartProductWhereInput
  OR?: CartProductWhereInput[] | CartProductWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  quantity?: Int
  quantity_not?: Int
  quantity_in?: Int[] | Int
  quantity_not_in?: Int[] | Int
  quantity_lt?: Int
  quantity_lte?: Int
  quantity_gt?: Int
  quantity_gte?: Int
  product?: ProductWhereInput
  cart?: CartWhereInput
}

export interface CartUpdateWithoutProductsDataInput {
  user?: UserUpdateOneInput
}

export interface ProductWhereUniqueInput {
  id?: ID_Input
}

export interface PostUpdateInput {
  isPublished?: Boolean
  title?: String
  text?: String
  author?: UserUpdateOneWithoutPostsInput
}

export interface CartUpdateOneWithoutProductsInput {
  create?: CartCreateWithoutProductsInput
  connect?: CartWhereUniqueInput
  disconnect?: CartWhereUniqueInput
  delete?: CartWhereUniqueInput
  update?: CartUpdateWithoutProductsInput
  upsert?: CartUpsertWithoutProductsInput
}

export interface UserUpdateOneWithoutPostsInput {
  create?: UserCreateWithoutPostsInput
  connect?: UserWhereUniqueInput
  disconnect?: UserWhereUniqueInput
  delete?: UserWhereUniqueInput
  update?: UserUpdateWithoutPostsInput
  upsert?: UserUpsertWithoutPostsInput
}

export interface UserUpdateNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpdateWithoutPostsInput {
  where: UserWhereUniqueInput
  data: UserUpdateWithoutPostsDataInput
}

export interface ProductUpdateDataInput {
  price?: Int
  currency?: Currency
  name?: String
  brand?: BrandUpdateOneInput
}

export interface UserUpdateWithoutPostsDataInput {
  email?: String
  password?: String
  name?: String
}

export interface CartProductUpdateWithoutCartInput {
  where: CartProductWhereUniqueInput
  data: CartProductUpdateWithoutCartDataInput
}

export interface UserUpsertWithoutPostsInput {
  where: UserWhereUniqueInput
  update: UserUpdateWithoutPostsDataInput
  create: UserCreateWithoutPostsInput
}

export interface BrandSubscriptionWhereInput {
  AND?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  OR?: BrandSubscriptionWhereInput[] | BrandSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: BrandWhereInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  name?: String
  posts?: PostUpdateManyWithoutAuthorInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PostUpdateManyWithoutAuthorInput {
  create?: PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput
  connect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  disconnect?: PostWhereUniqueInput[] | PostWhereUniqueInput
  delete?: PostWhereUniqueInput[] | PostWhereUniqueInput
  update?: PostUpdateWithoutAuthorInput[] | PostUpdateWithoutAuthorInput
  upsert?: PostUpsertWithoutAuthorInput[] | PostUpsertWithoutAuthorInput
}

export interface UserUpsertNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface BrandUpdateInput {
  name?: String
}

export interface PostUpsertWithoutAuthorInput {
  where: PostWhereUniqueInput
  update: PostUpdateWithoutAuthorDataInput
  create: PostCreateWithoutAuthorInput
}

export interface PostUpdateWithoutAuthorDataInput {
  isPublished?: Boolean
  title?: String
  text?: String
}

export interface PostUpdateWithoutAuthorInput {
  where: PostWhereUniqueInput
  data: PostUpdateWithoutAuthorDataInput
}

export interface CartProductUpsertWithoutCartInput {
  where: CartProductWhereUniqueInput
  update: CartProductUpdateWithoutCartDataInput
  create: CartProductCreateWithoutCartInput
}

export interface CartProductWhereUniqueInput {
  id?: ID_Input
}

export interface PostSubscriptionWhereInput {
  AND?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  OR?: PostSubscriptionWhereInput[] | PostSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PostWhereInput
}

export interface CartSubscriptionWhereInput {
  AND?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  OR?: CartSubscriptionWhereInput[] | CartSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: CartWhereInput
}

export interface ProductUpdateOneInput {
  create?: ProductCreateInput
  connect?: ProductWhereUniqueInput
  disconnect?: ProductWhereUniqueInput
  delete?: ProductWhereUniqueInput
  update?: ProductUpdateNestedInput
  upsert?: ProductUpsertNestedInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface CartProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  quantity: Int
}

/*
 * A connection to a list of items.

 */
export interface PostConnection {
  pageInfo: PageInfo
  edges: PostEdge[]
  aggregate: AggregatePost
}

export interface Brand extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface CartProduct extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  quantity: Int
  product: Product
  cart: Cart
}

export interface User extends Node {
  id: ID_Output
  email: String
  password: String
  name: String
  posts?: Post[]
}

export interface AggregateCartProduct {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface CartProductConnection {
  pageInfo: PageInfo
  edges: CartProductEdge[]
  aggregate: AggregateCartProduct
}

export interface BatchPayload {
  count: Long
}

/*
 * An edge in a connection.

 */
export interface CartEdge {
  node: Cart
  cursor: String
}

export interface CartProductSubscriptionPayload {
  mutation: MutationType
  node?: CartProduct
  updatedFields?: String[]
  previousValues?: CartProductPreviousValues
}

export interface AggregateProduct {
  count: Int
}

export interface Cart extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  products?: CartProduct[]
  user?: User
}

/*
 * A connection to a list of items.

 */
export interface ProductConnection {
  pageInfo: PageInfo
  edges: ProductEdge[]
  aggregate: AggregateProduct
}

export interface Post extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
  author: User
}

/*
 * An edge in a connection.

 */
export interface BrandEdge {
  node: Brand
  cursor: String
}

export interface PostSubscriptionPayload {
  mutation: MutationType
  node?: Post
  updatedFields?: String[]
  previousValues?: PostPreviousValues
}

export interface AggregateUser {
  count: Int
}

export interface PostPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  isPublished: Boolean
  title: String
  text: String
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

export interface CartPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
}

/*
 * An edge in a connection.

 */
export interface PostEdge {
  node: Post
  cursor: String
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

/*
 * An edge in a connection.

 */
export interface CartProductEdge {
  node: CartProduct
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  email: String
  password: String
  name: String
}

/*
 * A connection to a list of items.

 */
export interface CartConnection {
  pageInfo: PageInfo
  edges: CartEdge[]
  aggregate: AggregateCart
}

export interface Product extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  price: Int
  currency: Currency
  brand: Brand
  name: String
}

export interface AggregateBrand {
  count: Int
}

export interface BrandSubscriptionPayload {
  mutation: MutationType
  node?: Brand
  updatedFields?: String[]
  previousValues?: BrandPreviousValues
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

export interface ProductPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  price: Int
  currency: Currency
  name: String
}

export interface ProductSubscriptionPayload {
  mutation: MutationType
  node?: Product
  updatedFields?: String[]
  previousValues?: ProductPreviousValues
}

export interface CartSubscriptionPayload {
  mutation: MutationType
  node?: Cart
  updatedFields?: String[]
  previousValues?: CartPreviousValues
}

export interface BrandPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
}

export interface AggregateCart {
  count: Int
}

export interface AggregatePost {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface BrandConnection {
  pageInfo: PageInfo
  edges: BrandEdge[]
  aggregate: AggregateBrand
}

/*
 * An edge in a connection.

 */
export interface ProductEdge {
  node: Product
  cursor: String
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The 'Long' scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

export type DateTime = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

export interface Schema {
  query: Query
  mutation: Mutation
  subscription: Subscription
}

export type Query = {
  posts: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Post[]>
  users: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<User[]>
  brands: (args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Brand[]>
  products: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Product[]>
  carts: (args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<Cart[]>
  cartProducts: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProduct[]>
  post: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  user: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  brand: (args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Brand | null>
  product: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  cart: (args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Cart | null>
  cartProduct: (args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  postsConnection: (args: { where?: PostWhereInput, orderBy?: PostOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<PostConnection>
  usersConnection: (args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<UserConnection>
  brandsConnection: (args: { where?: BrandWhereInput, orderBy?: BrandOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<BrandConnection>
  productsConnection: (args: { where?: ProductWhereInput, orderBy?: ProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<ProductConnection>
  cartsConnection: (args: { where?: CartWhereInput, orderBy?: CartOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartConnection>
  cartProductsConnection: (args: { where?: CartProductWhereInput, orderBy?: CartProductOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string) => Promise<CartProductConnection>
  node: (args: { id: ID_Output }, info?: GraphQLResolveInfo | string) => Promise<Node | null>
}

export type Mutation = {
  createPost: (args: { data: PostCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  createUser: (args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  createBrand: (args: { data: BrandCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Brand>
  createProduct: (args: { data: ProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  createCart: (args: { data: CartCreateInput }, info?: GraphQLResolveInfo | string) => Promise<Cart>
  createCartProduct: (args: { data: CartProductCreateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  updatePost: (args: { data: PostUpdateInput, where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  updateUser: (args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  updateBrand: (args: { data: BrandUpdateInput, where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Brand | null>
  updateProduct: (args: { data: ProductUpdateInput, where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  updateCart: (args: { data: CartUpdateInput, where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Cart | null>
  updateCartProduct: (args: { data: CartProductUpdateInput, where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  deletePost: (args: { where: PostWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Post | null>
  deleteUser: (args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<User | null>
  deleteBrand: (args: { where: BrandWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Brand | null>
  deleteProduct: (args: { where: ProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Product | null>
  deleteCart: (args: { where: CartWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<Cart | null>
  deleteCartProduct: (args: { where: CartProductWhereUniqueInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct | null>
  upsertPost: (args: { where: PostWhereUniqueInput, create: PostCreateInput, update: PostUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Post>
  upsertUser: (args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<User>
  upsertBrand: (args: { where: BrandWhereUniqueInput, create: BrandCreateInput, update: BrandUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Brand>
  upsertProduct: (args: { where: ProductWhereUniqueInput, create: ProductCreateInput, update: ProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Product>
  upsertCart: (args: { where: CartWhereUniqueInput, create: CartCreateInput, update: CartUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<Cart>
  upsertCartProduct: (args: { where: CartProductWhereUniqueInput, create: CartProductCreateInput, update: CartProductUpdateInput }, info?: GraphQLResolveInfo | string) => Promise<CartProduct>
  updateManyPosts: (args: { data: PostUpdateInput, where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyUsers: (args: { data: UserUpdateInput, where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyBrands: (args: { data: BrandUpdateInput, where: BrandWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyProducts: (args: { data: ProductUpdateInput, where: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCarts: (args: { data: CartUpdateInput, where: CartWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  updateManyCartProducts: (args: { data: CartProductUpdateInput, where: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyPosts: (args: { where: PostWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyUsers: (args: { where: UserWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyBrands: (args: { where: BrandWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyProducts: (args: { where: ProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCarts: (args: { where: CartWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
  deleteManyCartProducts: (args: { where: CartProductWhereInput }, info?: GraphQLResolveInfo | string) => Promise<BatchPayload>
}

export type Subscription = {
  post: (args: { where?: PostSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<PostSubscriptionPayload>>
  user: (args: { where?: UserSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<UserSubscriptionPayload>>
  brand: (args: { where?: BrandSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<BrandSubscriptionPayload>>
  product: (args: { where?: ProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<ProductSubscriptionPayload>>
  cart: (args: { where?: CartSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartSubscriptionPayload>>
  cartProduct: (args: { where?: CartProductSubscriptionWhereInput }, infoOrQuery?: GraphQLResolveInfo | string) => Promise<AsyncIterator<CartProductSubscriptionPayload>>
}

export class Prisma extends BasePrisma {
  
  constructor({ endpoint, secret, fragmentReplacements, debug }: BasePrismaOptions) {
    super({ typeDefs, endpoint, secret, fragmentReplacements, debug });
  }

  exists = {
    Post: (where: PostWhereInput): Promise<boolean> => super.existsDelegate('query', 'posts', { where }, {}, '{ id }'),
    User: (where: UserWhereInput): Promise<boolean> => super.existsDelegate('query', 'users', { where }, {}, '{ id }'),
    Brand: (where: BrandWhereInput): Promise<boolean> => super.existsDelegate('query', 'brands', { where }, {}, '{ id }'),
    Product: (where: ProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'products', { where }, {}, '{ id }'),
    Cart: (where: CartWhereInput): Promise<boolean> => super.existsDelegate('query', 'carts', { where }, {}, '{ id }'),
    CartProduct: (where: CartProductWhereInput): Promise<boolean> => super.existsDelegate('query', 'cartProducts', { where }, {}, '{ id }')
  }

  query: Query = {
    posts: (args, info): Promise<Post[]> => super.delegate('query', 'posts', args, {}, info),
    users: (args, info): Promise<User[]> => super.delegate('query', 'users', args, {}, info),
    brands: (args, info): Promise<Brand[]> => super.delegate('query', 'brands', args, {}, info),
    products: (args, info): Promise<Product[]> => super.delegate('query', 'products', args, {}, info),
    carts: (args, info): Promise<Cart[]> => super.delegate('query', 'carts', args, {}, info),
    cartProducts: (args, info): Promise<CartProduct[]> => super.delegate('query', 'cartProducts', args, {}, info),
    post: (args, info): Promise<Post | null> => super.delegate('query', 'post', args, {}, info),
    user: (args, info): Promise<User | null> => super.delegate('query', 'user', args, {}, info),
    brand: (args, info): Promise<Brand | null> => super.delegate('query', 'brand', args, {}, info),
    product: (args, info): Promise<Product | null> => super.delegate('query', 'product', args, {}, info),
    cart: (args, info): Promise<Cart | null> => super.delegate('query', 'cart', args, {}, info),
    cartProduct: (args, info): Promise<CartProduct | null> => super.delegate('query', 'cartProduct', args, {}, info),
    postsConnection: (args, info): Promise<PostConnection> => super.delegate('query', 'postsConnection', args, {}, info),
    usersConnection: (args, info): Promise<UserConnection> => super.delegate('query', 'usersConnection', args, {}, info),
    brandsConnection: (args, info): Promise<BrandConnection> => super.delegate('query', 'brandsConnection', args, {}, info),
    productsConnection: (args, info): Promise<ProductConnection> => super.delegate('query', 'productsConnection', args, {}, info),
    cartsConnection: (args, info): Promise<CartConnection> => super.delegate('query', 'cartsConnection', args, {}, info),
    cartProductsConnection: (args, info): Promise<CartProductConnection> => super.delegate('query', 'cartProductsConnection', args, {}, info),
    node: (args, info): Promise<Node | null> => super.delegate('query', 'node', args, {}, info)
  }

  mutation: Mutation = {
    createPost: (args, info): Promise<Post> => super.delegate('mutation', 'createPost', args, {}, info),
    createUser: (args, info): Promise<User> => super.delegate('mutation', 'createUser', args, {}, info),
    createBrand: (args, info): Promise<Brand> => super.delegate('mutation', 'createBrand', args, {}, info),
    createProduct: (args, info): Promise<Product> => super.delegate('mutation', 'createProduct', args, {}, info),
    createCart: (args, info): Promise<Cart> => super.delegate('mutation', 'createCart', args, {}, info),
    createCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'createCartProduct', args, {}, info),
    updatePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'updatePost', args, {}, info),
    updateUser: (args, info): Promise<User | null> => super.delegate('mutation', 'updateUser', args, {}, info),
    updateBrand: (args, info): Promise<Brand | null> => super.delegate('mutation', 'updateBrand', args, {}, info),
    updateProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'updateProduct', args, {}, info),
    updateCart: (args, info): Promise<Cart | null> => super.delegate('mutation', 'updateCart', args, {}, info),
    updateCartProduct: (args, info): Promise<CartProduct | null> => super.delegate('mutation', 'updateCartProduct', args, {}, info),
    deletePost: (args, info): Promise<Post | null> => super.delegate('mutation', 'deletePost', args, {}, info),
    deleteUser: (args, info): Promise<User | null> => super.delegate('mutation', 'deleteUser', args, {}, info),
    deleteBrand: (args, info): Promise<Brand | null> => super.delegate('mutation', 'deleteBrand', args, {}, info),
    deleteProduct: (args, info): Promise<Product | null> => super.delegate('mutation', 'deleteProduct', args, {}, info),
    deleteCart: (args, info): Promise<Cart | null> => super.delegate('mutation', 'deleteCart', args, {}, info),
    deleteCartProduct: (args, info): Promise<CartProduct | null> => super.delegate('mutation', 'deleteCartProduct', args, {}, info),
    upsertPost: (args, info): Promise<Post> => super.delegate('mutation', 'upsertPost', args, {}, info),
    upsertUser: (args, info): Promise<User> => super.delegate('mutation', 'upsertUser', args, {}, info),
    upsertBrand: (args, info): Promise<Brand> => super.delegate('mutation', 'upsertBrand', args, {}, info),
    upsertProduct: (args, info): Promise<Product> => super.delegate('mutation', 'upsertProduct', args, {}, info),
    upsertCart: (args, info): Promise<Cart> => super.delegate('mutation', 'upsertCart', args, {}, info),
    upsertCartProduct: (args, info): Promise<CartProduct> => super.delegate('mutation', 'upsertCartProduct', args, {}, info),
    updateManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyPosts', args, {}, info),
    updateManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyUsers', args, {}, info),
    updateManyBrands: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyBrands', args, {}, info),
    updateManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyProducts', args, {}, info),
    updateManyCarts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCarts', args, {}, info),
    updateManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'updateManyCartProducts', args, {}, info),
    deleteManyPosts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyPosts', args, {}, info),
    deleteManyUsers: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyUsers', args, {}, info),
    deleteManyBrands: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyBrands', args, {}, info),
    deleteManyProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyProducts', args, {}, info),
    deleteManyCarts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCarts', args, {}, info),
    deleteManyCartProducts: (args, info): Promise<BatchPayload> => super.delegate('mutation', 'deleteManyCartProducts', args, {}, info)
  }

  subscription: Subscription = {
    post: (args, infoOrQuery): Promise<AsyncIterator<PostSubscriptionPayload>> => super.delegateSubscription('post', args, {}, infoOrQuery),
    user: (args, infoOrQuery): Promise<AsyncIterator<UserSubscriptionPayload>> => super.delegateSubscription('user', args, {}, infoOrQuery),
    brand: (args, infoOrQuery): Promise<AsyncIterator<BrandSubscriptionPayload>> => super.delegateSubscription('brand', args, {}, infoOrQuery),
    product: (args, infoOrQuery): Promise<AsyncIterator<ProductSubscriptionPayload>> => super.delegateSubscription('product', args, {}, infoOrQuery),
    cart: (args, infoOrQuery): Promise<AsyncIterator<CartSubscriptionPayload>> => super.delegateSubscription('cart', args, {}, infoOrQuery),
    cartProduct: (args, infoOrQuery): Promise<AsyncIterator<CartProductSubscriptionPayload>> => super.delegateSubscription('cartProduct', args, {}, infoOrQuery)
  }
}