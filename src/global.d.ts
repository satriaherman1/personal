declare interface IFloatButton {
  buttonList: IButtonFloatList[];
  active: string;
}

declare interface ISimpleCard {
  image: any;
  title: string;
  bottomAction: React.ReactElement;
}

interface IButtonFloatList {
  name: string;
  action?: () => any;
  children: any;
}

declare interface IServiceCard {
  title: string;

  imageBg: string;
  description: string;
  icon: React.ReactElement;
}
