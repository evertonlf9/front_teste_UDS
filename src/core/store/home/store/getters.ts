export const getAlertShow = ({ alertShow }: any) => alertShow;
export const getMenuOpen = ({ menuOpen }: any) => menuOpen;
export const getSize = ({ size }: any) => size;
export const getFlavor = ({ flavor }: any) => flavor;
export const getCustomization = ({ customization }: any) => customization;
export const getSizeSelected = ({ sizeSelected }: any) => sizeSelected;
export const getFlavorSelected = ({ flavorSelected }: any) => flavorSelected;
export const getCustomizationSelected = ({ customizationSelected }: any) =>
  customizationSelected;
export const getDataList = ({ data }: any) => data;
export const getTime = ({ time }: any) => time;
export const getTotal = ({ total }: any) => total;
export const getState = ({
  key,
  time,
  total,
  sizeSelected,
  flavorSelected,
  customizationSelected
}: any) => {
  return {
    key,
    time,
    total,
    sizeSelected,
    flavorSelected,
    customizationSelected
  };
};
