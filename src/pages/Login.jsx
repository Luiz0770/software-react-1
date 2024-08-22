function Login() {
  return (
    <main class="main container">
      <section class="section-login card-login-cadastro">
        <form id="loginForm" class="card-login-cadastro-conteudo">
          <h2>Login</h2>
          <div>
            <label for="usuario">Nome de Usuário</label>
            <input type="text" name="usuario" id="usuario" placeholder="Seu nome"/>
          </div>
          <div>
            <label for="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="*******"/>
          </div>
          <p id="dica"></p>
          <p class="link-cadastro">Não tem cadastro? <a href="./cadastro">Clique aqui</a></p>
          <button onclick="validarLogin()" class="btn-login-cadastro">Entrar</button>
        </form>
      </section>
    </main>
  )
}

export default Login