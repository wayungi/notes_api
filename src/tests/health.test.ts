import app from "../app.js";
import request from "supertest";
import { expect, describe, it } from "vitest";

describe("GET /api/health", () => {
  it("should return status 200 and a JSON response", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      status: "UP",
      message: "Notes API is running",
    });
  });
});