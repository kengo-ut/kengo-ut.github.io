import { JsonData } from "@/types";

async function fetchData(url: string, options: RequestInit = {}): Promise<JsonData> {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

export { fetchData };
