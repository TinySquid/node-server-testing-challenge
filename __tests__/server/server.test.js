const request = require("supertest");

const server = require("../../server/server");

describe("server", () => {
  describe("GET /", () => {
    //? Does it return the correct status code for the input provided?
    test("should return an OK status code", async () => {
      const expectedStatusCode = 200;

      const response = await request(server).get("/");

      expect(response.status).toEqual(expectedStatusCode);
    });

    //? Does it return the data in the expected format?
    test("should return a default message", async () => {
      const expectedMessage = { message: "API running!" };

      const response = await request(server).get("/");

      expect(response.body).toEqual(expectedMessage);
    });

    //? Does the data returned, if any, have the right content type?
    test("should return a content type of application/json", async () => {
      const expectedContentType = "application/json";
      const response = await request(server).get("/");

      expect(response.type).toEqual(expectedContentType);
    });
  });

  describe("GET /invalid-route", () => {
    //? Does it return the correct status code for the input provided?
    test("should return a 404 status code", async () => {
      const expectedStatusCode = 404;

      const response = await request(server).get("/invalid-route");

      expect(response.status).toEqual(expectedStatusCode);
    });

    //? Does it return the data in the expected format?
    test("should return a default message", async () => {
      const expectedMessage = { message: "Not found" };

      const response = await request(server).get("/invalid-route");

      expect(response.body).toEqual(expectedMessage);
    });

    //? Does the data returned, if any, have the right content type?
    test("should return a content type of application/json", async () => {
      const expectedContentType = "application/json";
      const response = await request(server).get("/invalid-route");

      expect(response.type).toEqual(expectedContentType);
    });
  });
});
