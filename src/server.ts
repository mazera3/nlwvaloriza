import express from "express";

const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

// app.get('rota','função');
// GET
app.get("/test-get", (request, response) => {
  // Request => Entrando
  // Response => Saindo
  return response.send("Teste GET!!!");
});
// POST
app.post("/test-post", (request, response) => {
    return response.send("Teste POST!!!");
  });

// executar: yarn dev OU npm dev
// http://localhost:3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
