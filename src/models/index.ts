type GENDER =
  'male' |
  'female';

export interface People {
  name: string,
  height: number,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: GENDER,
}