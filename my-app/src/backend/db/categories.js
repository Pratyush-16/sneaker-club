import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "fiction",
    description:
      "literature in the form of prose, especially novels, that describes imaginary events and people",
  },
  {
    _id: uuid(),
    categoryName: "non-fiction",
    description:
      "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  },
  {
    _id: uuid(),
    categoryName: "horror",
    description:
      "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  },
];

export const homecategories = [
  {
    _id: uuid(),
    category: "Running",
    img: "https://wepik.com/api/image/ai/8d5a3ef6-13cc-427c-9525-6d1bc2ff2bf8",
  },
  {
    _id: uuid(),
    category: "Lifestyle",
    img: "https://wepik.com/api/image/ai/24e01635-0596-42e0-9db0-8a8a6e0ad7a4",
  },
  {
    _id: uuid(),
    category: "Skateboarding",
    img: "https://wepik.com/api/image/ai/c6ba863a-808d-45e7-8548-c38a2bfe2bb1",
  },
];
