function Cadastro() {
  return (
    <main className="main container">
      <section className="section-cadastro card-login-cadastro">
        <form className="card-login-cadastro-conteudo">
          <h2>Cadastro</h2>
          <div>
            <label htmlFor="usuarioCd">Nome de Usuário</label>
            <input type="text" name="usuarioCd" id="usuarioCd" placeholder="Seu nome"/>
          </div>
          <div>
            <label htmlFor="senhaCd">Senha</label>
            <input type="password" name="senhaCd" id="senhaCd" placeholder="*******"/>
          </div>
          <div>
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input type="password" name="confirmarSenha" id="confirmarSenha" placeholder="*******"/>
          </div>
          <button className="btn-login-cadastro">Cadastrar</button>
        </form>
      </section>
    </main>
  )
}

export default Cadastro