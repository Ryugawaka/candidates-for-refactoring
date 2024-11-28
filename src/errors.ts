// вместо отдельных проверок на статус сделал функцию getStatus с возвращаемым статусом запроса
const enum Stasuses {
  [HttpStatusCode.NOT_FOUND_404]: 'notFound',
  [HttpStatusCode.FORBIDDEN_403]: 'forbidden',
  '503': 'serviceUnavailable'
}

const getStatus = (responce: Response) => {
  return Stasuses[responce.status.toString()] || 'unexpectedError'
}