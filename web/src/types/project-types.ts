import * as z from "zod";

export const ImageSchema = z.object({
    "image": z.string(),
    "alt": z.string(),
    "caption": z.string(),
});
export type Image = z.infer<typeof ImageSchema>;

export const ProjectSchema = z.object({
    "id": z.string(),
    "name": z.string(),
    "category": z.string(),
    "tags": z.array(z.string()),
    "description": z.string(),
    "moreUrl": z.string(),
    "openUrl": z.string(),
    "date": z.string(),
    "bannerUrl": z.string(),
    "images": z.array(ImageSchema),
});
export type Project = z.infer<typeof ProjectSchema>;

