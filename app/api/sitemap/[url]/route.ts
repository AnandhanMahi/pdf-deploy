import axios from "axios";
import { NextResponse } from "next/server";
import { isDataView } from "util/types";


export async function GET(request: Request, { params }: { params: { url: string } }) {
    try {
        const url =params.url
        const response = await axios.get('http://localhost:3001/sitemap?url=https://www.worldwidegolfshops.com/sitemap.xml');
        console.log('response',response)
        const responseData = response.data; 

        return NextResponse.json({ data:responseData, status: 200, message: "successfully" });
    } catch (error) {
        return NextResponse.json({ status: 400, error });
    }
}
