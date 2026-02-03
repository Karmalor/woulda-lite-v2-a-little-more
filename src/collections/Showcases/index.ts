import type { CollectionConfig } from "payload";

export const Showcases: CollectionConfig = {
  slug: "showcases",
  access: {
    read: ({ req: { user } }) => {
      return Boolean(user);
    },
    create: ({ req: { user } }) => {
      return user?.collection === "users";
    },
    update: ({ req: { user } }) => {
      return user?.collection === "users";
    },
    delete: ({ req: { user } }) => {
      return user?.collection === "users";
    },
  },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "image",
      label: "Image",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "venue",
      label: "Venue",
      type: "text",
    },
    {
      name: "dateAndTime",
      label: "Date & Time",
      type: "date",
      timezone: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "",
        },
      },
    },
    {
      name: "doors",
      label: "Doors",
      type: "date",
      timezone: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "",
        },
      },
    },
  ],
};
