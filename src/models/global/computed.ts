import { St } from './state';
import { sys } from 'configs/constant';

export function contentLayoutStyle(n: St) {
  const minHeight = 'calc(100vh - 120px)';
  return n.siderVisible
    ? { marginLeft: sys.siderWidthPx, minHeight }
    : { marginLeft: '0', minHeight };
}

export function headerStyle(n: St) {
  const { headerTheme, themeColor, siderVisible } = n;
  const hstyle = { marginLeft: '', color: '', backgroundColor: '' };
  siderVisible ? hstyle.marginLeft = sys.siderWidthPx : hstyle.marginLeft = '0';
  headerTheme === 'dark' ? hstyle.color = 'white' : hstyle.color = themeColor;
  headerTheme === 'dark' ? hstyle.backgroundColor = 'black' : hstyle.backgroundColor = 'white';
  return hstyle;
}

export function siderIconDes(n: St) {
  return n.siderVisible ? 'left' : 'right';
}

export function siderThemeSwitchChecked(n: St) {
  const { siderTheme } = n;
  return siderTheme === 'dark' ? true : false;
}

export function headerThemeSwitchChecked(n: St) {
  const { headerTheme } = n;
  return headerTheme === 'dark' ? true : false;
}
