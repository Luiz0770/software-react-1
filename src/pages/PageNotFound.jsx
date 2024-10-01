import Error from '../assets/ilustrations/404.svg'

function PageNotFound() {
  return (
    <main className="error-main container">
      <h1>Página não encontrada</h1>
      <img src={Error} alt="404 Error" />
    </main>
  )
}

export default PageNotFound