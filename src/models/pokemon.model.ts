/* eslint-disable @typescript-eslint/no-explicit-any */
export class PokemonListResponse {
  public count: number;
  public next: string;
  public previous: string;
  public results: PokemonListItem[];
  constructor(data: any) {
    this.count = data.count != null ? data.count : null;
    this.next = data.next ? data.next : null;
    this.previous = data.previous ? data.previous : null;
    this.results = data.results
      ? data.results.map((item: any) => new PokemonListItem(item))
      : [];
  }
}

export class PokemonListRequest {
  public offset: number;
  public limit: number;
  constructor(data: any) {
    this.offset = data.offset ? data.offset : 0;
    this.limit = data.limit ? data.limit : 10;
  }
}

export class PokemonListItem {
  public name: string;
  public url: string;
  constructor(data: any) {
    this.name = data.name ? data.name : null;
    this.url = data.url ? data.url : null;
  }
}

export class PokemonDetailsResponse {
  public sprites: PokemonSprites;
  public id: number;
  public name: string;
  public types: PokemonTypeItem[];
  public height: number;
  public weight: number;

  constructor(data: any) {
    this.sprites = data.sprites
      ? new PokemonSprites(data.sprites)
      : new PokemonSprites({});
    this.id = data.id != null ? data.id : null;
    this.name = data.name ? data.name : null;
    this.height = data.height != null ? data.height : 0;
    this.weight = data.weight != null ? data.weight : 0;
    this.types = data.types
      ? data.types.map((item: any) => new PokemonTypeItem(item))
      : [];
  }
}

export class PokemonSprites {
  public front_default: string;
  public front_shiny: string;
  constructor(data: any) {
    this.front_default = data.front_default ? data.front_default : null;
    this.front_shiny = data.front_shiny ? data.front_shiny : null;
  }
}

export class PokemonTypeItem {
  public slot: number;
  public type: PokemonType;
  constructor(data: any) {
    this.slot = data.slot ? data.slot : null;
    this.type = data.type ? new PokemonType(data.type) : new PokemonType({});
  }
}

export class PokemonType {
  public name: string;
  public url: string;
  constructor(data: any) {
    this.name = data.name ? data.name : null;
    this.url = data.url ? data.url : null;
  }
}
