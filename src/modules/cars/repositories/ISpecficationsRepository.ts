import { Specification } from "../model/Specifications";

interface ICreateSpecificationsDTO {
    name: string;
    description: string;
}

interface ISpecficationsRepository {

    create({ name, description }: ICreateSpecificationsDTO): void

    findByName(name: string): Specification
}

export { ISpecficationsRepository, ICreateSpecificationsDTO }