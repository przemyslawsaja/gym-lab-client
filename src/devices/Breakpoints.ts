interface IBreakpoints {
  mobileS: string,
  mobileM: string,
  mobileL: string,
  tablet: string,
  laptop: string,
  laptopL: string,
  desktop: string
}

const size: IBreakpoints = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
};

export const device: IBreakpoints = {
  mobileS: `(min-width: ${ size.mobileS })`,
  mobileM: `(min-width: ${ size.mobileM })`,
  mobileL: `(min-width: ${ size.mobileL })`,
  tablet: `(min-width: ${ size.tablet })`,
  laptop: `(min-width: ${ size.laptop })`,
  laptopL: `(min-width: ${ size.laptopL })`,
  desktop: `(min-width: ${ size.desktop })`,
};