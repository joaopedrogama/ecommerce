import IClientDTO from "../dtos/IClientDTO";
import Client from "../infra/typeorm/entities/Client";
import ClientRepository from "../infra/typeorm/repositories/ClientRepository";
import { cpf } from 'cpf-cnpj-validator';

/**
 * O service terá toda a regra de negócio. Cada service é responsável por
 * uma única atividade.
 *
 * Por Exemplo: Esse service é o responsável por cadastrar um usuário.
 * Todas as operações/regras/verificações que precisam ser feitas para que
 * o usuário seja cadastrado devem ser feitas aqui
 *
 * Como um service só tem uma função ele deve ter apenas um método público
 */
export default class CreateClientService {
  public async execute(data: IClientDTO): Promise<Client | string> {
    const clientRepository = new ClientRepository();

    const client = await clientRepository.create(data);
    const clientes = await clientRepository.get();

    // for (let i = 0; i < clientes.length; i++) {
    //   if (data.cpf == clientes[i].cpf) {
    //     return "CPF ja existe";
    //   }
    // }

    // const cpfCliente = data.cpf;
    // if (!(cpf.isValid(cpfCliente))) {
    //   return "CPF inválido";
    // }

    return client;
  }
}
