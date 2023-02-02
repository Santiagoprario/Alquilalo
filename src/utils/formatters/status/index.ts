
const status = {
  'VENCIDA' : 'orange-500',
  'INFORME' : 'yellow-500',
  'ASIGNADA' : 'blue-300',
  'CERRADA_OK' : 'green-500',
  'CANCELADA' : 'red-500'

}

export const formatStatus = (code : string) => {
  return status[code]
}