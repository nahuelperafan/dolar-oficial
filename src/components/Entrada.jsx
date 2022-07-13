const Entrada = ({ entrada }) => {
  const { fecha, compra, venta } = entrada
  return (
    
      <div className={compra}>
        <p className={fecha}></p>
        <p className={venta}></p>
      </div>
  )
}

export default Entrada