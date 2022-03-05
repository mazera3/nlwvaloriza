import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    /* let tags = await tagsRepositories.find();
    tags = tags.map((tag) => ({ ...tag, nameCuston: `#${tag.name}` }));
    // Resultado: "nameCuston": "#Inspiração" */
    // name_custom
    return classToPlain(tags);
    return tags;
  }
}

export { ListTagsService };
