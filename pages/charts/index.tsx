import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import styles from './charts.module.css';

const TradingViewThingy = () => (
  <div className={styles.container}>
    <TradingViewWidget symbol="NASDAQ:AAPL" theme={Themes.DARK} autosize />
  </div>
);

export default TradingViewThingy;
