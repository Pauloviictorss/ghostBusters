import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {cpf: '01429582386', nome: 'João', telefone: '61 9 9253 6402', sexo: 'M', endereco: 'Setor O', cargoId: 1},
    ])
  }
}
