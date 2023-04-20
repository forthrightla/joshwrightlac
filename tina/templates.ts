import type { TinaField } from "tinacms";
export function actionFields() {
  return [
    {
      type: "string",
      name: "label",
      label: "Label",
      required: true,
    },
    {
      type: "string",
      name: "url",
      label: "Button URL",
    },
  ] as TinaField[];
}
export function authorFields() {
  return [
    {
      type: "string",
      name: "name",
      label: "Name",
    },
    {
      type: "string",
      name: "email",
      label: "Email",
    },
    {
      type: "image",
      name: "avatar",
      label: "Avatar",
    },
  ] as TinaField[];
}
export function blogFields() {
  return [
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
  ] as TinaField[];
}
export function global_site_configFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "baseurl",
      label: "Base URL",
    },
    {
      type: "string",
      name: "permalink",
      label: "Permalink",
    },
    {
      type: "string",
      name: "color_scheme",
      label: "Color Scheme",
      options: ["light", "dark"],
    },
    {
      type: "string",
      name: "accent_color",
      label: "Accent Color",
      options: ["pink", "green", "blue", "violet", "yellow"],
    },
    {
      type: "object",
      name: "header",
      label: "Header Configuration",
      fields: [
        {
          type: "string",
          name: "title",
          label: "Header Title",
        },
        {
          type: "image",
          name: "logo_img",
          label: "Logo Image",
        },
        {
          type: "boolean",
          name: "has_nav",
          label: "Enable Navigation Menu",
        },
      ],
    },
    {
      type: "object",
      name: "footer",
      label: "Footer Configuration",
      fields: [
        {
          type: "string",
          name: "content",
          label: "Footer Content",
        },
        {
          type: "object",
          name: "links",
          label: "Links",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "Link text",
            },
            {
              type: "string",
              name: "url",
              label: "URL",
            },
            {
              type: "boolean",
              name: "new_window",
              label: "Open in new window",
            },
          ],
        },
        {
          type: "boolean",
          name: "has_social",
          label: "Enable Social Links",
        },
      ],
    },
    {
      type: "object",
      name: "sass",
      label: "Sass",
      fields: [
        {
          type: "number",
          name: "indentWidth",
          label: "Indent Width",
        },
        {
          type: "string",
          name: "style",
          label: "Output Style",
          options: ["nested", "expanded", "compact", "compressed"],
        },
        {
          type: "number",
          name: "precision",
          label: "Precision",
        },
      ],
    },
    {
      type: "string",
      name: "plugins",
      label: "Plugins",
      list: true,
    },
    {
      type: "string",
      name: "exclude",
      label: "Exclude",
      list: true,
    },
  ] as TinaField[];
}
export function contactFields() {
  return [
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
  ] as TinaField[];
}
export function section_with_contact_formFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function content_section_with_optional_imageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "image",
      name: "image",
      label: "Image",
    },
    {
      type: "object",
      name: "actions",
      label: "Action Buttons",
      list: true,
      fields: [...actionFields()],
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function hero_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "content",
      label: "Content",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function homeFields() {
  return [
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
  ] as TinaField[];
}
export function pageFields() {
  return [
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
  ] as TinaField[];
}
export function portfolioFields() {
  return [
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
  ] as TinaField[];
}
export function latest_projectsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
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
      type: "number",
      name: "num_projects_displayed",
      label: "Number of projects to display",
      required: true,
    },
    {
      type: "string",
      name: "view_all_text",
      label: "All projects button text",
    },
    {
      type: "string",
      name: "view_all_url",
      label: "All projects button URL",
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function postFields() {
  return [
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
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "image",
      name: "thumb_img_path",
      label: "Featured Image",
    },
    {
      type: "image",
      name: "content_img_path",
      label: "Alternative Featured Image",
    },
    {
      type: "string",
      name: "excerpt",
      label: "Excerpt",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
  ] as TinaField[];
}
export function latest_postsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "number",
      name: "num_posts_displayed",
      label: "Number of posts to display",
      required: true,
    },
    {
      type: "object",
      name: "actions",
      label: "Action Buttons",
      list: true,
      fields: [...actionFields()],
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function projectFields() {
  return [
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
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "image",
      name: "thumb_img_path",
      label: "Featured Image",
    },
    {
      type: "image",
      name: "content_img_path",
      label: "Alternative Featured Image",
    },
    {
      type: "string",
      name: "layout",
      label: "Layout",
      required: true,
    },
  ] as TinaField[];
}
export function sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
  ] as TinaField[];
}
export function services_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "serviceslist",
      label: "Services",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Title",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
export function social_linksFields() {
  return [
    {
      type: "object",
      name: "links",
      label: "Social Links",
      list: true,
      fields: [
        {
          type: "string",
          name: "type",
          label: "Type",
        },
        {
          type: "string",
          name: "title",
          label: "Title",
          required: true,
        },
        {
          type: "string",
          name: "icon",
          label: "Icon",
          required: true,
        },
        {
          type: "string",
          name: "url",
          label: "URL",
          required: true,
        },
      ],
    },
  ] as TinaField[];
}
export function testimonials_sectionFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "string",
      name: "section_id",
      label: "Element ID",
    },
    {
      type: "string",
      name: "component",
      label: "Component",
      required: true,
    },
    {
      type: "string",
      name: "subtitle",
      label: "Subtitle",
    },
    {
      type: "object",
      name: "testimonialslist",
      label: "Testimonials",
      list: true,
      fields: [
        {
          type: "string",
          name: "author",
          label: "Author",
        },
        {
          type: "image",
          name: "avatar",
          label: "Avatar",
        },
        {
          type: "string",
          name: "content",
          label: "Content",
        },
      ],
    },
    {
      type: "string",
      name: "type",
      label: "Reference Type Name",
      required: true,
    },
  ] as TinaField[];
}
