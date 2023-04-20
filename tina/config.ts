import { defineConfig } from "tinacms";
import { actionFields } from "./templates";
import { authorFields } from "./templates";
import { blogFields } from "./templates";
import { global_site_configFields } from "./templates";
import { contactFields } from "./templates";
import { section_with_contact_formFields } from "./templates";
import { content_section_with_optional_imageFields } from "./templates";
import { hero_sectionFields } from "./templates";
import { homeFields } from "./templates";
import { pageFields } from "./templates";
import { portfolioFields } from "./templates";
import { latest_projectsFields } from "./templates";
import { postFields } from "./templates";
import { latest_postsFields } from "./templates";
import { projectFields } from "./templates";
import { sectionFields } from "./templates";
import { services_sectionFields } from "./templates";
import { social_linksFields } from "./templates";
import { testimonials_sectionFields } from "./templates";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "c166ba24-7482-4632-8dee-e498773b1018", // Get this from tina.io
  token: "0f87c33787f15a7f6f4281fbc4046aed502ecb15", // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        format: "yml",
        label: "Global Site Config",
        name: "global_site_config",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "_config",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Social Links",
        name: "social_links",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "social",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "json",
        label: "Author",
        name: "author",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "author",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
      {
        format: "md",
        label: "Home",
        name: "home",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "object",
            list: true,
            templateKey: "template",
            label: "Sections",
            name: "sections",
            templates: [
              {
                fields: section_with_contact_formFields(),
                label: "Section with Contact Form",
                name: "contactblock",
              },
              {
                fields: content_section_with_optional_imageFields(),
                label: "Content Section with Optional Image",
                name: "contentblock",
              },
              {
                fields: hero_sectionFields(),
                label: "Hero Section",
                name: "heroblock",
              },
              {
                fields: latest_projectsFields(),
                label: "Latest Projects",
                name: "portfolioblock",
              },
              {
                fields: latest_postsFields(),
                label: "Latest Posts",
                name: "postsblock",
              },
              {
                fields: services_sectionFields(),
                label: "Services Section",
                name: "servicesblock",
              },
              {
                fields: testimonials_sectionFields(),
                label: "Testimonials Section",
                name: "testimonialsblock",
              },
            ],
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Blog",
        name: "blog",
        path: "blog",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Portfolio",
        name: "portfolio",
        path: "portfolio",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "index",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "string",
            name: "layout_style",
            label: "Layout Style",
            options: ["mosaic", "tiles"],
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Contact",
        name: "contact",
        path: ".",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Title",
            required: true,
          },
          {
            type: "string",
            name: "subtitle",
            label: "Subtitle",
          },
          {
            type: "image",
            name: "img_path",
            label: "Image",
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
          },
        ],
      },
      {
        format: "md",
        label: "Project",
        name: "project",
        path: "projects",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          ...projectFields(),
        ],
      },
      {
        format: "yml",
        label: "Site Menus",
        name: "site_menus",
        path: "_data",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "menus",
        },
        fields: [
          {
            name: "dummy",
            label: "Dummy field",
            type: "string",
            description:
              "This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info",
          },
        ],
      },
    ],
  },
});
