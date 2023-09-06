import connection from '../config/database';

// models
import Aluno from '../models/Aluno';
import User from '../models/User';

const models = [Aluno, User];

models.forEach((model) => model.init(connection));
