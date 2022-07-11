import Entrada from './Entrada'

const Blog = ({entradas}) => {
  return (
    <div
    pagina='Blog'
    >
        <main className='contenedor'>
          <h2 className='heading'>Blog</h2>

          <div className={Blog}>
            {entradas.map(entrada => (
              <Entrada
                key={entrada.id}
                entrada={entrada}
              />
            ))}
          </div>
        </main>
    </div>

  )
}
export async function getStaticProps() {
  const url = "https://api-dolar-argentina.herokuapp.com/api/dolaroficial"
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  
  
  return {
    props: {
      entradas
    }
  }
}

export default Blog