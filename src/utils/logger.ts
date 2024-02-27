import pino from "pino";

export default pino({
    enabled: true,
    level: "info",
    // timestamp: pino.stdTimeFunctions.isoTime,
    timestamp: () => `, "timestamp":"${new Date().toLocaleString('pt-br')}"`,
    formatters: {
        level: (label) => {
            return { severity: label.toUpperCase() };
        },
    },

});