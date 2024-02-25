import dotenv from "dotenv"
import express from 'express';
import logger from "./utils/logger";

import cors from 'cors';
import routes from "./routes";

dotenv.config();
const app = express();

enum ExitStatus {
    falha = 1,
    sucesso = 0,
}

process.on("unhandledRejection", (reason, promise) => {
    logger.error(`O servidor irá ser desligado devido a uma promise que teve seu erro mal resolvido : ${promise}. Motivo: ${reason}`);
    throw reason;
});

process.on("uncaughtException", (error) => {
    logger.fatal(`O servidor irá ser desligado devido a uma exceção nao capturada: ${error}`);
    process.exit(ExitStatus.falha);
});

const PORT = process.env.PORT || 3034;
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(PORT, () => {
    try {
        logger.info(`Servidor inicializado na porta ${PORT}`);
        const exitSignals: NodeJS.Signals[] = ["SIGINT", "SIGTERM", "SIGQUIT"];
        exitSignals.map((signal) =>
            process.on(signal, async () => {
                try {
                    logger.info("Servidor desligado com sucesso.");
                    process.exit(ExitStatus.sucesso);
                } catch (error) {
                    logger.error(`Error ao finalizar o servidor ${error}`);
                    process.exit(ExitStatus.falha);
                }
            })
        );
    } catch (err) {
        logger.fatal(err, "Erro na inicialização do server");
        process.exit(ExitStatus.falha);
    }
});