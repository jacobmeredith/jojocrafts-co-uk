import { IGuide } from "models/guide";
import { faker } from "@faker-js/faker";

export const generateGuide = (): IGuide => {
  return {
    id: faker.datatype.uuid(),
    slug: faker.lorem.slug(),
    title: faker.lorem.sentence(),
    published: faker.random.arrayElement(["published", "draft", "deleted"]),
    content: faker.lorem.paragraphs(),
  };
};
