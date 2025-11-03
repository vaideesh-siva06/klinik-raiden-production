export interface Work {
  _id?: string;
  title: string;
  img: string;
  bookCoverImg: string,
  quote?: string;
  description?: string;
  downloadLink: string;
  newRelease?: boolean;
  downloads?:number;
}
