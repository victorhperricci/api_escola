import jwt from 'jsonwebtoken';

export default (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['É necessário fazer login'],
    });
  }

  const [, token] = authorization.split(' ');

  if (!token) {
    return res.status(401).json({
      errors: ['É necessário fazer login'],
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

    const { id, email } = decoded;

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (err) {
    return res.status(401).json({
      errors: ['Token expirado ou inválido'],
    });
  }
};
