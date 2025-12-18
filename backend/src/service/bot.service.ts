/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCoinFromMsg, coinNotFound, getParams, getLevel, fetchAPI, buildResponse, sanitizeResponse } from '../utils/index.js'
import logger from '../utils/logger.js'
import { dontNeedCoinInfo } from '../utils/getLevel.js'
import { BotServiceResponse, CoinData } from 'src/types/types.js'

export async function botService(msg: string): Promise<BotServiceResponse> {
  let endpoint: string
  let params: any
  let coinData: CoinData | null = null

  const needsCoin = !dontNeedCoinInfo(msg)

  if (needsCoin) {
    coinData = getCoinFromMsg(msg)

    if (!coinData) {
      const responseBot = coinNotFound()
      return {
        success: true,
        level: 'notFound',
        message: responseBot,
        data: {}
      }
    }
  }

  // const intent = getActionFromMsg(msg) => por el momento no hace nada, si se progresa, se usará para detectar diferentes intenciones, ej: get_price, get_history
  let level = getLevel(msg, coinData)

  switch (level) {
  case 'simpleInfo':
    endpoint = '/simple/price'
    params = getParams(level, coinData)
    logger.info('simple')
    break
  case 'tokenInfo':
    if (!coinData?.network || !coinData?.contract) {
      logger.warn(`Token endpoint requested but missing data. Using simpleInfo instead for ${coinData?.id}`)
      endpoint = '/simple/price'
      params = getParams('simpleInfo', coinData)
      level = 'simpleInfo'
      logger.info('simpleInfo (fallback from tokenInfo)')
    } else {
      endpoint = `/simple/token_price/${coinData?.network}`
      params = getParams(level, coinData)
      logger.info(`tokenInfo - Network: ${coinData?.network}, Contract: ${coinData.contract}`)
    }
    break
  case 'marketInfo':
    endpoint = '/coins/markets'
    params = getParams(level, coinData, msg)
    logger.info('marketInfo')
    break
  case 'fullInfo':
    endpoint = `/coins/${coinData?.id}`
    params = getParams(level, coinData)
    logger.info('fullInfo')
    break
  case 'tickersInfo':
    endpoint = `/coins/${coinData?.id}/tickers`
    params = getParams(level, coinData, msg)
    logger.info('tickerInfo')
    break
  case 'exchanges':
    endpoint = '/exchanges'
    params = getParams(level, null, msg)
    logger.info('exchanges')
    break
  case 'graph':
    endpoint = `/coins/${coinData?.id}/market_chart`
    params = getParams(level, coinData, msg)
    logger.info('graph')
    break
  case 'trending':
    endpoint = '/search/trending'
    params = getParams(level, null)
    logger.info('trending')
    break
  case 'global':
    endpoint = '/global'
    params = getParams(level, null)
    logger.info('global')
    break
  default: {
    logger.error('Invalid level detected')
    return {
      success: false,
      level: 'error',
      message: 'Lo siento! no he logrado conseguir información de lo que me has pedido',
      data: {}
    }
  }}

  const response = await fetchAPI(endpoint, params)

  if (!response) {
    throw new Error('Ha ocurrido un error al obtener la información que me pediste. Lo siento, trabajaré en solucionarlo.')
  }

  return {
    success: true,
    level,
    message: buildResponse(level, response, msg),
    data: sanitizeResponse(level, response)
  }
}

export type { BotServiceResponse }
