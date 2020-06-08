import Map from "ol/Map";

export type TMapProps = {};

export type TMapState = {
  mapContext?: IMapContext;
};

export interface IMapContext {
  map: Map;
}
