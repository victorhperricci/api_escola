import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;

      if (!email || !password) {
        return res.status(401).json({
          errors: ['Credenciais inválidas'],
        });
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({
          errors: ['Usuário não existe'],
        });
      }

      const passwordIsValid = await user.passwordIsValid(password);

      if (!passwordIsValid) {
        return res.status(401).json({
          errors: ['Senha inválida'],
        });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.TOKEN_SECRET,
        {
          expiresIn: process.env.TOKEN_EXPIRATION,
        },
      );

      const auth = {
        id: user.id,
        nome: user.nome,
        email: user.email,
        token,
      };

      return res.json({ auth });
    } catch (err) {
      console.log(err);
      return res.status(400).json({ errors: ['Error on create token'] });
    }
  }
}

export default new TokenController();
