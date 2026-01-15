import BLUR from '../data/assets/BLUR.svg';
import bNEO from '../data/assets/bNEO.svg';
import BUSD from '../data/assets/BUSD.svg';
import USD from '../data/assets/USD.svg';
import ETH from '../data/assets/ETH.svg';
import GMX from '../data/assets/GMX.svg';
import stEVMOS from '../data/assets/stEVMOS.svg';
import LUNA from '../data/assets/LUNA.svg';
import STRD from '../data/assets/STRD.svg';
import EVMOS from '../data/assets/EVMOS.svg';
import IBCX from '../data/assets/IBCX.svg';
import IRIS from '../data/assets/IRIS.svg';
import AMP_LUNA from '../data/assets/ampLUNA.svg';
import KUJI from '../data/assets/KUJI.svg';
import USDC from '../data/assets/USDC.svg';
import AXLUSDC from '../data/assets/axlUSDC.svg';
import ATOM from '../data/assets/ATOM.svg';
import OSMO from '../data/assets/OSMO.svg';
import RSWTH from '../data/assets/rSWTH.svg';
import LSI from '../data/assets/LSI.svg';
import OKB from '../data/assets/OKB.svg';
import OKT from '../data/assets/OKT.svg';
import SWTH from '../data/assets/SWTH.svg';
import USC from '../data/assets/USC.svg';
import WBTC from '../data/assets/WBTC.svg';
import WSTETH from '../data/assets/wstETH.svg';
import YIELDUSD from '../data/assets/YieldUSD.svg';
import ZIL from '../data/assets/ZIL.svg';

interface Token {
  id: number;
  currency: string;
  price: number;
  icon: string;
}

const data: Token[] = [
  { id: 1, currency: "Currency", price: 0, icon: "" },
  { id: 2, currency: "BLUR", price: 0.208115254237288, icon: BLUR },
  { id: 3, currency: "bNEO", price: 7.1282679, icon: bNEO },
  { id: 4, currency: "BUSD", price: 0.999183113, icon: BUSD },
  { id: 5, currency: "BUSD", price: 0.999878261118644, icon: BUSD },
  { id: 6, currency: "USD", price: 1, icon: USD },
  { id: 7, currency: "ETH", price: 1645.93373737374, icon: ETH },
  { id: 8, currency: "GMX", price: 36.3451143728814, icon: GMX },
  { id: 9, currency: "STEVMOS", price: 0.0727670677966102, icon: stEVMOS },
  { id: 10, currency: "LUNA", price: 0.409556389830508, icon: LUNA },
  { id: 11, currency: "STRD", price: 0.738655338983051, icon: STRD },
  { id: 12, currency: "EVMOS", price: 0.062461813559322, icon: EVMOS },
  { id: 13, currency: "IBCX", price: 41.268113559322, icon: IBCX },
  { id: 14, currency: "IRIS", price: 0.0177095593220339, icon: IRIS },
  { id: 15, currency: "ampLUNA", price: 0.495485898305085, icon: AMP_LUNA },
  { id: 16, currency: "KUJI", price: 0.675, icon: KUJI },
  { id: 17, currency: "USDC", price: 0.989832, icon: USDC },
  { id: 18, currency: "axlUSDC", price: 0.989832, icon: AXLUSDC },
  { id: 19, currency: "ATOM", price: 7.18665733333333, icon: ATOM },
  { id: 20, currency: "OSMO", price: 0.377297433333333, icon: OSMO },
  { id: 21, currency: "rSWTH", price: 0.00408771, icon: RSWTH },
  { id: 22, currency: "LSI", price: 67.6966152542373, icon: LSI },
  { id: 23, currency: "OKB", price: 42.9756205932203, icon: OKB },
  { id: 24, currency: "OKT", price: 13.5615779661017, icon: OKT },
  { id: 25, currency: "SWTH", price: 0.00403985045501208, icon: SWTH },
  { id: 26, currency: "USC", price: 0.994, icon: USC },
  { id: 27, currency: "USDC", price: 1, icon: USDC },
  { id: 28, currency: "USDC", price: 1, icon: USDC },
  { id: 29, currency: "USDC", price: 0.999878261118644, icon: USDC },
  { id: 30, currency: "WBTC", price: 26002.822020202, icon: WBTC },
  { id: 31, currency: "wstETH", price: 1872.25797423729, icon: WSTETH },
  { id: 32, currency: "YieldUSD", price: 1.02908479661017, icon: YIELDUSD },
  { id: 33, currency: "ZIL", price: 0.0165181355932203, icon: ZIL },
];


export default data;
