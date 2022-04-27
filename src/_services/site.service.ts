import datas from '../data/nav.json';

export async function GetHeaderData() {
  try {
    return {
      primaryMenu: datas.primaryMenu,
      secondaryMenu: datas.secondaryMenu,
      footerMenu: datas.footerMenu,
      productMenu: datas.productMenu,
    };
  } catch (error) {
    return error;
  }
}
