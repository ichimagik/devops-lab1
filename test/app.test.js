const request = require("supertest");
const express = require("express");

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

test("GET /health should return ok", async () => {
  const res = await request(app).get("/health");
  expect(res.statusCode).toBe(200);
});
