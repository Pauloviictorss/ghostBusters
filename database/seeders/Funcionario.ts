import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {cpf: '05874286257', nome: 'Paulo', telefone: '61 9 9874 5842', sexo: 'M', endereco: 'Rua 12', cargoId: 1},
    ])
  }
}
