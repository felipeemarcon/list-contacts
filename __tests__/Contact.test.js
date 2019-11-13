const request = require("supertest");
const app = require("../app/app");
// const Contact = require("../app/models/Contact");

describe("Contact", () => {
  it("should create a contact", async done => {
    const response = await request(app)
      .post("/contact")
      .send({
        name: "Matheus Santos",
        cel_phone: "15997958677",
        email: "matheus@gmail.com",
        address: "R. Emerenciano Prestes de Barros, 680 - Sorocaba/SP - Brasil"
      });

    expect(response.status).toBe(200);

    done();
  });
});
