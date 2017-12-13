declare interface AllServices {
  services: Service[];
  result: boolean;
}

declare interface Service {
  servicereference: string;
  subservices: SubServices[];
  servicename: string;
}

declare interface SubServices {
  servicereference: string;
  program: number;
  servicename: string;
  pos: number;
}
