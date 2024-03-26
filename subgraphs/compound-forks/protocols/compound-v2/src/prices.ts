// compound's price oracle price getter
import {
  COMPTROLLER_ADDRESS,
  PRICE_ORACLE1_ADDRESS,
  USDC_ADDRESS,
  CETH_ADDRESS,
  CUSDC_ADDRESS,
  CUSDT_ADDRESS,
  CTUSD_ADDRESS,
  USDC_DECIMALS,
} from "./constants";
import { Token, LendingProtocol, Market } from "../../../generated/schema";
import { Address, BigDecimal, log } from "@graphprotocol/graph-ts";
import { PriceOracle2 } from "../../../generated/Comptroller/PriceOracle2";
import { PriceOracle1 } from "../../../generated/Comptroller/PriceOracle1";
import {
  BIGDECIMAL_ONE,
  BIGDECIMAL_ZERO,
  exponentToBigDecimal,
} from "../../../src/constants";

// returns the token price
export function getUSDPriceOfToken(
  market: Market,
  blockNumber: i32,
): BigDecimal {
  const cTokenAddress = market.id;
  const getToken = Token.load(market.inputToken);
  if (getToken == null) {
    log.error("Couldn't find input token for market {}", [market.id]);
    return BIGDECIMAL_ZERO;
  }
  const getTokenAddress = getToken.id;
  const getTokenDecimals = getToken.decimals;

  const tokenPriceUSD = getTokenPrice(
    blockNumber,
    Address.fromString(cTokenAddress),
    Address.fromString(getTokenAddress),
    getTokenDecimals,
  );

  return tokenPriceUSD.truncate(getTokenDecimals);
}

/////////////////
//// Helpers ////
/////////////////

// get usd price of underlying tokens (NOT eth)
function getTokenPrice(
  blockNumber: i32,
  cTokenAddress: Address,
  underlyingAddress: Address,
  underlyingDecimals: i32,
): BigDecimal {
  const protocol = LendingProtocol.load(COMPTROLLER_ADDRESS)!;
  const oracle2Address = Address.fromString(protocol._priceOracle);

  const mantissaDecimalFactor = 18 - underlyingDecimals + 18;
  const bdFactor = exponentToBigDecimal(mantissaDecimalFactor);
  const priceOracle2 = PriceOracle2.bind(oracle2Address);
  const tryPrice = priceOracle2.try_getUnderlyingPrice(cTokenAddress);

  return tryPrice.reverted
    ? BIGDECIMAL_ZERO
    : tryPrice.value.toBigDecimal().div(bdFactor);
}
