function Cadastro() {
  return (
    <main class="main container">
      <section class="section-cadastro card-login-cadastro">
        <form class="card-login-cadastro-conteudo">
          <h2>Cadastro</h2>
          <div>
            <label for="usuarioCd">Nome de Usuário</label>
            <input type="text" name="usuarioCd" id="usuarioCd" placeholder="Seu nome"/>
          </div>
          <div>
            <label for="senhaCd">Senha</label>
            <input type="password" name="senhaCd" id="senhaCd" placeholder="*******"/>
          </div>
          <div>
            <label for="confirmarSenha">Confirmar Senha</label>
            <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="*******"/>
          </div>
          <button onclick="validarCadastro()" class="btn-login-cadastro">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}

export default Cadastro