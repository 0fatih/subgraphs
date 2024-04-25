import { Address } from "@graphprotocol/graph-ts";

////////////////////////
///// Schema Enums /////
////////////////////////

// The network names corresponding to the Network enum in the schema.
// They also correspond to the ones in `dataSource.network()` after converting to lower case.
// See below for a complete list:
// https://thegraph.com/docs/en/hosted-service/what-is-hosted-service/#supported-networks-on-the-hosted-service
export namespace Network {
  export const ARBITRUM_ONE = "ARBITRUM_ONE";
  export const AVALANCHE = "AVALANCHE";
  export const AURORA = "AURORA";
  export const BSC = "BSC"; // aka BNB Chain
  export const CELO = "CELO";
  export const MAINNET = "MAINNET"; // Ethereum mainnet
  export const FANTOM = "FANTOM";
  export const FUSE = "FUSE";
  export const MOONBEAM = "MOONBEAM";
  export const MOONRIVER = "MOONRIVER";
  export const NEAR_MAINNET = "NEAR_MAINNET";
  export const OPTIMISM = "OPTIMISM";
  export const MATIC = "MATIC"; // aka Polygon
  export const XDAI = "XDAI"; // aka Gnosis Chain
  export const FUJI = "FUJI";
  export const ARBITRUM_ORBIT = "ARBITRUM_ORBIT";

  // other networks
  export const UBIQ = "UBIQ";
  export const SONGBIRD = "SONGBIRD";
  export const ELASTOS = "ELASTOS";
  export const KARDIACHAIN = "KARDIACHAIN";
  export const CRONOS = "CRONOS";
  export const RSK = "RSK";
  export const TELOS = "TELOS";
  export const XDC = "XDC";
  export const ZYX = "ZYX";
  export const CSC = "CSC";
  export const SYSCOIN = "SYSCOIN";
  export const GOCHAIN = "GOCHAIN";
  export const ETHEREUMCLASSIC = "ETHEREUMCLASSIC";
  export const OKEXCHAIN = "OKEXCHAIN";
  export const HOO = "HOO";
  export const METER = "METER";
  export const NOVA_NETWORK = "NOVA_NETWORK";
  export const TOMOCHAIN = "TOMOCHAIN";
  export const VELAS = "VELAS";
  export const THUNDERCORE = "THUNDERCORE";
  export const HECO = "HECO";
  export const XDAIARB = "XDAIARB";
  export const ENERGYWEB = "ENERGYWEB";
  export const HPB = "HPB";
  export const BOBA = "BOBA";
  export const KUCOIN = "KUCOIN";
  export const SHIDEN = "SHIDEN";
  export const THETA = "THETA";
  export const SX = "SX";
  export const CANDLE = "CANDLE";
  export const ASTAR = "ASTAR";
  export const CALLISTO = "CALLISTO";
  export const WANCHAIN = "WANCHAIN";
  export const METIS = "METIS";
  export const ULTRON = "ULTRON";
  export const STEP = "STEP";
  export const DOGECHAIN = "DOGECHAIN";
  export const RONIN = "RONIN";
  export const KAVA = "KAVA";
  export const IOTEX = "IOTEX";
  export const XLC = "XLC";
  export const NAHMII = "NAHMII";
  export const TOMBCHAIN = "TOMBCHAIN";
  export const CANTO = "CANTO";
  export const KLAYTN = "KLAYTN";
  export const EVMOS = "EVMOS";
  export const SMARTBCH = "SMARTBCH";
  export const BITGERT = "BITGERT";
  export const FUSION = "FUSION";
  export const OHO = "OHO";
  export const ARB_NOVA = "ARB_NOVA";
  export const OASIS = "OASIS";
  export const REI = "REI";
  export const REICHAIN = "REICHAIN";
  export const GODWOKEN = "GODWOKEN";
  export const POLIS = "POLIS";
  export const KEKCHAIN = "KEKCHAIN";
  export const VISION = "VISION";
  export const HARMONY = "HARMONY";
  export const PALM = "PALM";
  export const CURIO = "CURIO";

  export const UNKNOWN_NETWORK = "UNKNOWN_NETWORK";
}
export type Network = string;

export namespace ProtocolType {
  export const EXCHANGE = "EXCHANGE";
  export const LENDING = "LENDING";
  export const YIELD = "YIELD";
  export const BRIDGE = "BRIDGE";
  export const GENERIC = "GENERIC";
}

export namespace RewardTokenType {
  export const DEPOSIT = "DEPOSIT";
  export const BORROW = "BORROW";
}

export namespace LendingType {
  export const CDP = "CDP";
  export const POOLED = "POOLED";
}

export namespace RiskType {
  export const GLOBAL = "GLOBAL";
  export const ISOLATED = "ISOLATED";
}

export namespace InterestRateType {
  export const STABLE = "STABLE";
  export const VARIABLE = "VARIABLE";
  export const FIXED = "FIXED";
}

export namespace InterestRateSide {
  export const LENDER = "LENDER";
  export const BORROWER = "BORROWER";
}

export namespace TransactionType {
  export const DEPOSIT = "DEPOSIT";
  export const WITHDRAW = "WITHDRAW";
  export const BORROW = "BORROW";
  export const REPAY = "REPAY";
  export const LIQUIDATE = "LIQUIDATE";
}

export namespace AccountActiity {
  export const DAILY = "DAILY";
  export const HOURLY = "HOURLY";
}

//////////////////////////////
///// Ethereum Addresses /////
//////////////////////////////

export const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

export const ETH_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const ETH_NAME = "Avax";
export const ETH_SYMBOL = "AVAX";

export const COMPTROLLER_ADDRESS = "0x37f362759325f9082f4053412372ea2627411af9";
export const PRICE_ORACLE1_ADDRESS =
  "0x516e69f98d134555c92a82a4b6527e654c840fe1";
export const USDC_ADDRESS = "0x6ce92b8a357450074e2dca0b6c75de2ba2d6ef5f";
export const CUSDC_ADDRESS = "0x39aa39c021dfbae8fac545936693ac917d5e7563";
export const CETH_ADDRESS = "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5";
export const COMP_ADDRESS = "0xc00e94cb662c3520282e6f5717214004a7f26888";
export const CCOMP_ADDRESS = "0x70e36f6bf80a52b3b46b3af8e106cc0ed743e8e4";
export const CUSDT_ADDRESS = "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9";
export const CTUSD_ADDRESS = "0x12392f67bdf24fae0af363c24ac620a2f67dad86";

/////////////////////////////
///// Protocol Specific /////
/////////////////////////////

export const PROTOCOL_NAME = "Milli Lend";
export const PROTOCOL_SLUG = "mlend";
export const USDC_DECIMALS = 6;
export const comptrollerAddr = Address.fromString(COMPTROLLER_ADDRESS);
export const ETH_DECIMALS = 18;
