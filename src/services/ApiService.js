import { BINANCE_BASE_URL } from 'helpers/Constants'

const getAllAssets = async () => {
  try {
    const resp = await fetch(
      `${BINANCE_BASE_URL}bapi/composite/v1/public/marketing/symbol/list`
    )
    const data = await resp.json()
    return data?.data
  } catch (error) {
    throw error
  }
}

const getAllList = async () => {
  try {
    const resp = await fetch(
      `${BINANCE_BASE_URL}bapi/asset/v2/public/asset/asset/get-all-asset`
    )
    const data = await resp.json()
    return data?.data
  } catch (error) {
    throw error
  }
}
export { getAllAssets, getAllList }
