const exepciones = function (res: any, code: number, text: string) {
    // console.log(code, text);
    switch (code) {
        case 400:
            return res.status(code).json({
                code: code,
                status: 'Bad request',
                error: text
            });
            break;
        case 401:
            return res.status(code).json({
                code: code,
                status: 'Unauthorized',
                error: text
            });
            break;
        case 404:
            return res.status(code).json({
                code: code,
                status: 'Not found',
                error: text + ' no encontrado(s)'
            });
            break;
        case 500:
            return res.status(code).json({
                code: code,
                status: 'Error internal server',
                error: text
            });
            break;
        default:
            break;
    }
};

export default exepciones;