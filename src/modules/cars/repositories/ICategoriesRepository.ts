/** 
 * A interface ICategoriesRepository é um contrato e é usado para implementar nas class de repository
 * Vamos supor que mais para frente queira mudar de banco de dados
 * como essa interface está vinculada a um banco de dados então qualquer novo banco que usar
 * vai usar essa interface com suas regras e o código continuarar funcionando
**/

import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}


interface ICategoriesRepository {
    findByName(name: string): Category;
    create( { name, description}: ICreateCategoryDTO ): void;
    list(): Category[];
}

export { ICategoriesRepository, ICreateCategoryDTO }