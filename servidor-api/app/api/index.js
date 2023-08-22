/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {};

api.dados = function (req, res) {
  res.json([
    { valor: 200.5, quantidade: 2 },
    { valor: 100.2, quantidade: 5 },
    { valor: 50.5, quantidade: 1 },
    { valor: 70.5, quantidade: 2 },
    { valor: 72.5, quantidade: 2 },
  ]);
};

module.exports = api;
