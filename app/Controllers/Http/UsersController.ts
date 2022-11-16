import User from "App/Models/User"

export default class UsersController {
    async store ({request}){
        const dados = request.only(['email', 'password'])
        return await User.create(dados)
    }

    async login ({request, auth}){
        const email = request.input('email')
        const password = request.input('password')  

        return await auth.use('api').attempt(email, password)
    }
}