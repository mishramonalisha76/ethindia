import { ConnectButton,lightTheme } from '@rainbow-me/rainbowkit';

export const ConnectWallet = () => {
  return <ConnectButton theme={lightTheme({
    accentColor: '#2fc9d6',
    accentColorForeground: 'white',
    borderRadius: 'small',
    fontStack: 'system',
    overlayBlur: 'small',
  })}/>;
};