/* eslint-disable @typescript-eslint/no-explicit-any */
import { LevelType } from 'src/types/types.js'
import { responseHandlers, sanitizeResponse } from './index.js'

export function buildResponse(level: LevelType, rawResponse: any): string {
  const sanitized = sanitizeResponse(level, rawResponse)
  const handler = responseHandlers[level]

  if (!handler) {
    return '❌ No puedo procesar ese nivel de información'
  }

  return handler(sanitized)
}
