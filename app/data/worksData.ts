import { v4 as uuid } from "uuid";
import { Work } from "../types/work";

export const worksData: Work[] = [
  {
    _id: "tending-humanitys-flame",
    newRelease: true,
    title: "Tending Humanity's Flame",
    img: "https://res.cloudinary.com/dsspy8fjw/image/upload/v1762108484/TendingHumanitysFlameBookCover_gidffm.png",
    bookCoverImg:
      "https://res.cloudinary.com/dsspy8fjw/image/upload/v1762108484/tending-humanitys-flame_ljoywa.png",
    quote: "“The tragedy is not that we will die, but that we have forgotten we must.”",
    description:
      "This book was written because the universe will end—not now, but trillions of years into the future, according to science. If everything inevitably dissolves, what is the point of our existence?\n\nHere we will place humanity’s scientific discoveries of existence, space, and physics under a philosophical lens to find the truth to our existence and light the flame.",
    downloadLink:
      "https://www.dropbox.com/scl/fi/7feuz9oq6thoj87y9cdyi/Tending-Humanity-s-Flame-Klinik-Raiden.pdf?rlkey=f6q8c7jnrwj9linfr92p4o05r&st=vq0glmz0&dl=1",
    type:
    "Books"
  },
  {
  _id: "scientific-philosophy-meaning-exists",
  newRelease: false,
  title: "Scientific Philosophy: Why Meaning Exists Despite Inevitable Extinction",
  quote: "“Even if humans spread across galaxies, colonize stars, meet extraterrestrial life, and upload minds into machines, there is one fact they will eventually have to accept: The universe itself is decaying.”",
  description:
    "This article explores the intersection of science and philosophy, asking how humans can find meaning in a universe that will eventually end. Drawing on scientific discoveries about existence, space, and the inevitable extinction of all things, it argues that meaning arises from our conscious engagement with life and the pursuit of knowledge.",
  downloadLink: "https://medium.com/@klinikraiden/scientific-philosophy-why-meaning-exists-despite-inevitable-extinction-af49ba75adae",
  type: "Public Writings"
}

];
