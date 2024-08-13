// __tests__/items.test.js
const request = require('supertest');
const app = require('../app');
let items = require('../fakeDb');

beforeEach(() => {
  items.push({ name: "popsicle", price: 1.45 });
});

afterEach(() => {
  items.length = 0; // clear the array
});

describe("GET /items", () => {
  test("Get all items", async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: "popsicle", price: 1.45 }]);
  });
});

describe("POST /items", () => {
  test("Add a new item", async () => {
    const res = await request(app)
      .post('/items')
      .send({ name: "cheerios", price: 3.40 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ added: { name: "cheerios", price: 3.40 } });
  });
});

describe("GET /items/:name", () => {
  test("Get an item by name", async () => {
    const res = await request(app).get('/items/popsicle');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: "popsicle", price: 1.45 });
  });
});

describe("PATCH /items/:name", () => {
  test("Update an item", async () => {
    const res = await request(app)
      .patch('/items/popsicle')
      .send({ name: "new popsicle", price: 2.45 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ updated: { name: "new popsicle", price: 2.45 } });
  });
});

describe("DELETE /items/:name", () => {
  test("Delete an item", async () => {
    const res = await request(app).delete('/items/popsicle');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ message: "Deleted" });
  });
});
