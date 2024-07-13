import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

async function fetchImages(data: string[]): Promise<string[]> {
  const fetchImagePromises = data.map(async (url: string) => {
    try {
      if(url.startsWith("data:")){
        return url; 
      }else{
        const response = await axios.get(url, { responseType: 'arraybuffer' });
        const imageBuffer = Buffer.from(response.data, 'binary');
        const base64Image = imageBuffer.toString('base64');
        const imageSrc = `data:${response.headers['content-type']};base64,${base64Image}`;
        return imageSrc;

      }
     
    } catch (error) {
      // Handle individual image fetch errors here
      console.error(`Error fetching image from ${url}:`, error);
      return null; // or handle error response as needed
    }
  });

  const imagesData = await Promise.all(fetchImagePromises);
  return imagesData.filter(image => image !== null) as string[]; // Filter out null values
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { data1, data2, data3 } = await req.json();

  try {
    const imagesData1 = await fetchImages(data1);
    const imagesData2 = await fetchImages(data2);
    const imagesData3 = await fetchImages(data3);

    // Adjust response structure as needed
    return NextResponse.json({ data1: imagesData1, data2: imagesData2, data3: imagesData3 });
  } catch (error) {
    console.error("Error processing image fetches:", error);
    return NextResponse.json({ error: "Failed to fetch images" });
  }
}
