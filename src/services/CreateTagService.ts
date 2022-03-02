import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

interface ITagRequest {
  name: string;
}

class CreateTagService {
  async execute({ name }: ITagRequest) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    console.log("Nome", name);
    // verifica se email esta preenchido corretamente
    if (!name) {
      throw new Error("Name incorrect");
    }

    // verifica de o nome existe - deve ser único
    const tagAlreadyExists = await tagsRepository.findOne({ name });
    if (tagAlreadyExists) {
      throw new Error("Tag already exists");
    }
    // cria uma instancia com o objeto do nome
    const tag = tagsRepository.create({
      name
    });
    // salva no db o objeto
    await tagsRepository.save(tag);

    return tag;
  }
}

export { CreateTagService };
