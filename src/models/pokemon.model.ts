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

export class PokemonListItem {
  public name: string;
  public url: string;
  constructor(data: any) {
    this.name = data.name ? data.name : null;
    this.url = data.url ? data.url : null;
  }
}
