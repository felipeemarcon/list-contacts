const request = require("supertest");
const app = require("../app/app");

const Contact = require("../app/models/Contact");

const contactId = "5dcc1d6b7485e352c25b2e75"

describe("Contact", () => {
  it("should create a contact", async (done) => {
    const contact = await Contact.create({
      name: "Matheus Santos",
      cel_phone: "15997958677",
      email: "matheus@gmail.com",
      address: "R. Emerenciano Prestes de Barros, 680 - Sorocaba/SP - Brasil"
    })

    const response = await request(app)
      .post("/contact")
      .send({
        _id: contactId,
        name: contact.name,
        cel_phone: contact.cel_phone,
        email: contact.email,
        address: contact.address
      });

    expect(response.status).toBe(200);

    done();

  });

  it("should remove a contact", async (done) => {
    const response = await request(app)
      .del(`/contact/${contactId}`);

      expect(response.status).toBe(200);

      done();

  })
});
