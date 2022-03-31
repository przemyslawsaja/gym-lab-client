interface IBreakpoints {
  mobileS: string,
  mobileM: string,
  mobileL: string,
  tabletS: string,
  tabletM: string,
  tabletL: string,
  laptop: string,
  laptopL: string,
  desktop: string
}

interface IBreakpointsValues {
  mobileS: number,
  mobileM: number,
  mobileL: number,
  tabletS: number,
  tabletM: number,
  tabletL: number,
  laptop: number,
  laptopL: number,
  desktop: number
}

const size: IBreakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tabletS: '575px',
  tabletM: '625px',
  tabletL: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const deviceValues: IBreakpointsValues = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tabletS: 575,
  tabletM: 625,
  tabletL: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device: IBreakpoints = {
  mobileS: `(min-width: ${ size.mobileS })`,
  mobileM: `(min-width: ${ size.mobileM })`,
  mobileL: `(min-width: ${ size.mobileL })`,
  tabletS: `(min-width: ${ size.tabletS })`,
  tabletM: `(min-width: ${ size.tabletM })`,
  tabletL: `(min-width: ${ size.tabletL })`,
  laptop: `(min-width: ${ size.laptop })`,
  laptopL: `(min-width: ${ size.laptopL })`,
  desktop: `(min-width: ${ size.desktop })`,
};