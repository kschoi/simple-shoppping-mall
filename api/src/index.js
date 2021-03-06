const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
require("dotenv").config();

const db = require("./db");
const models = require("./models");

// 애플리케이션을 배포할 때는 다른 포트 번호를 지정할 수 있도록 해야 한다.
// .env 파일에 명시된 포트 또는 포트 4000번에서 서버를 실행
const port = process.env.PORT || 4000;
// DB_HOST 값을 변수로 저장
const DB_HOST = process.env.DB_HOST;

// express를 이용하여 app 객체를 생성한다.
const app = express();

const items = [
  {
    id: "1",
    title: "티셔츠",
    thumbnailUrl: "https://cdn.imweb.me/thumbnail/20210518/a098cae37bb7e.jpg",
    price: "29000",
    quantity: 1,
  },
  {
    id: "2",
    title: "머그컵",
    thumbnailUrl:
      "https://contents.sixshop.com/thumbnails/uploadedFiles/59826/product/image_1622135279973_750.jpg",
    price: "10000",
    quantity: 1,
  },
  {
    id: "3",
    title: "모자",
    thumbnailUrl:
      "https://img.gqkorea.co.kr/gq/2018/03/style_5aa635a19dd2d-1024x1024.jpg",
    price: "19000",
    quantity: 1,
  },
];

// 그래프QL 스키마 언어로 스키마를 구성
const typeDefs = gql`
  type Item {
    id: ID!
    title: String!
    quantity: Int!
    price: String!
    thumbnailUrl: String!
  }
  type Query {
    items: [Item!]!
    item(id: ID!): Item!
  }
  type Mutation {
    newItem(
      title: String!
      price: String!
      quantity: Int!
      thumbnailUrl: String!
    ): Item!
  }
`;

// 스키마 필드를 위한 리졸버 함수 제공
const resolvers = {
  Query: {
    items: async () => {
      return await models.Item.find();
    },
    item: async (parent, args) => {
      return await models.Item.findById(args.id);
    },
  },
  Mutation: {
    newItem: async (parent, args) => {
      return await models.Item.create({
        title: args.title,
        price: args.price,
        quantity: args.quantity,
        thumbnailUrl: args.thumbnailUrl,
      });
    },
  },
};

db.connect(DB_HOST);

async function startApolloServer(typeDefs, resolvers) {
  // 아폴로 서버 설정
  const server = new ApolloServer({ typeDefs, resolvers });

  // express와 통합하기 위해 추가
  await server.start();

  // express를 이용하여 app 객체를 생성한다.
  const app = express();

  // 아폴로 그래프QL 미들웨어를 적용하고 경로를 /api로 설정
  server.applyMiddleware({ app, path: "/api" });

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(
    `🚀 GraphQL Server running at http://localhost:${port}${server.graphqlPath}`
  );
}

startApolloServer(typeDefs, resolvers);
