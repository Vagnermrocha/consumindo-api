export type Music = {
  id?: string,
  author: string,
  text: string
}

export type MusicCadastrar = Omit<Music, 'id'>;
