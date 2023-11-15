exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelGlobal = 'Este é o valor da variável local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};