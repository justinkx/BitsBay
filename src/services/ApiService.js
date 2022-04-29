import { BINANCE_BASE_URL } from 'helpers/Constants'

const getAllAssets = async () => {
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

export { getAllAssets }
