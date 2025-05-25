import express from 'express'
import helmet from 'helmet'
import router from './routes';

const server = express();

server.use(helmet());
server.use(express.json())
server.use(express.urlencoded({extended:true}))

server.use('/', router);

const porta = 3000;
server.listen(porta, () => {
    console.log(`Servidor rodando na porta: http://localhost:${porta}`)
})