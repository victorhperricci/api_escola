import User from '../models/User';

class UserController {
  async create(req, res) {
    try {
      const { nome, email, password } = req.body;

      const newUser = await User.create({
        nome,
        email,
        password,
      });

      const { id } = newUser;

      return res.json({ id, nome, email });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.json({ users });
    } catch (err) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }

      const user = await User.findByPk(id, {
        attributes: ['id', 'nome', 'email'],
      });

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      return res.json({ user });
    } catch (err) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;
      const { nome, email, password } = req.body;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const updatedUser = await user.update({
        nome,
        email,
        password,
      });

      return res.json({ updatedUser });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const id = req.userId;

      const user = await User.findByPk(id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const deletedUser = await user.destroy();

      return res.json({ deletedUser });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
