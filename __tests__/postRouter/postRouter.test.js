const request = require("supertest");

const db = require("../../data/dbConfig");

const server = require("../../server/server");

beforeEach(async () => {
  // this function executes and clears out the table before each test
  await db.seed.run();
});

describe("postRouter", () => {
  describe("GET /post", () => {
    //? Does it return the correct status code for the input provided?
    test("should return an OK status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/api/posts");

      expect(response.status).toEqual(expectedStatusCode);
    });

    //? Does it return the data in the expected format?
    test("should return 3 posts by default", async () => {
      const expectedPostCount = 3;

      const response = await request(server).get("/api/posts");

      expect(response.body).toHaveLength(expectedPostCount);
    });

    //? Does the data returned, if any, have the right content type?
    test("should return a content type of application/json", async () => {
      const expectedContentType = "application/json";
      const response = await request(server).get("/api/posts");

      expect(response.type).toEqual(expectedContentType);
    });
  });
});
