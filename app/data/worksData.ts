import axios from "axios";
import { Work } from "../types/work";

/*
Structure:
{
  newRelease --> optional (if not newRelease then don't put it in the object at all),
  title,
  img,
  quote,
  description,
  downloadLink
}
*/

// ✅ Fetch works dynamically from your API
export const works = async (): Promise<Work[]> => {
  try {
    const response = await axios.get("/api/works");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching works:", error);
    return [];
  }
};