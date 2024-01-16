export type pokemonData = {
  id:number
  name:string,
  sprites: {
    "other": {
      "home": {
        "front_default":string
      }
    }
  },
  "types": {
    "slot": number,
    "type": {
        "name": string
      }
  }[]
}

