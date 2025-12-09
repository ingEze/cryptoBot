export const patterns = [
  { regex: /(\d+)\s*d[ií]as?/i, multiplier: 1 },
  { regex: /(\d+)\s*days?/i, multiplier: 1 },
  { regex: /(\d+)\s*semanas?/i, multiplier: 7 },
  { regex: /(\d+)\s*weeks?/i, multiplier: 7 },
  { regex: /(\d+)\s*meses?/i, multiplier: 30 },
  { regex: /(\d+)\s*months?/i, multiplier: 30 }
]
