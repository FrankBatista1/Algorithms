function wrapping(gifts) {
  const wrappedGifts = gifts.map((word) => {
    const material = '*'
    const wrapper =  material.repeat(word.length + 2)
    return `${wrapper}\n*${word}*\n${wrapper}`
            
  });
  return wrappedGifts;
}

const gifts = ['cat', 'game', 'socks']

console.log(wrapping(gifts))