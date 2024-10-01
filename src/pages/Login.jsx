function Login() {
  return (
    <main className="main container">
      <section className="section-login card-login-cadastro">
        <form id="loginForm" className="card-login-cadastro-conteudo">
          <h2>Login</h2>
          <div>
            <label htmlFor="usuario">Nome de Usuário</label>
            <input type="text" name="usuario" id="usuario" placeholder="Seu nome" />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" name="senha" id="senha" placeholder="*******" />
          </div>
          <p id="dica"></p>
          <p className="link-cadastro">Não tem cadastro? <a href="./cadastro">Clique aqui</a></p>
          <button className="btn-login-cadastro">Entrar</button>
        </form>
      </section>
    </main>
  )
}

export default Login