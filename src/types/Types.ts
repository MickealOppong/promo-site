export type Slider = {
  title: string,
  colour: string,
  img?: string
}

export type About = {

  overview: string
  name: string;
  email: string
  location: string
  nationality: string;
  status: string;
  education: string[];
  experience: string[]

}

export type Project = {
  id: number,
  img: string,
  text: string
  github: string
  url: string
  description: string
}


export type Skill = {

  title: string,
  description: string
}