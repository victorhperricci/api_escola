import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newStudent = await Aluno.create({
      nome: 'Diego Fernandes',
      sobrenome: 'Rocketseat',
      email: 'valvesperri@yahoo.com.br',
      idade: 23,
      peso: 80,
      altura: 1.80,
    });

    return res.json({ newStudent });
  }
}

export default new HomeController();
