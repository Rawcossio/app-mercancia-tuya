import Card from './Card'
import MenuLateral from './MenuLateral'
const PanelControl = () => {
  let envios = [
    {
      origen: 'Medellin',
      destino: "Bogotá",
      id: "PEDIDO2390"
    },
    {
      origen: 'Medellin',
      destino: "Cali",
      id: "PEDIDO9008"
    },
    {
      origen: 'Medellin',
      destino: "Necoclí",
      id: "PEDIDO3453"
    },
    {
      origen: 'Bogotá',
      destino: "Necoclí",
      id: "PEDIDO3335"
    },
  ]
  return (
    <section className="panel-control">
      <MenuLateral />
      <div className="panel-control-contenido">
        {
          envios.map((envio) => {
            return <Card info={envio} />
          })
        }
      </div>
    </section>
  )
}


export default PanelControl

