//setando deixar tudo formatado em reais

export const formatPrice = (number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(number / 100)
}

export const getUniqueValues = () => {}
