'use client'
import axios from "axios";
import { useState } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";

export default function HomePage() {
    const [url, setUrl] = useState('');
    const [data, setData] = useState(
        {
            errUrl: [
                ""],
            pdferr: [
                ""
            ]

        }
    )
    const urlRetry=async()=>{


    }
    const screenShotUrl=async()=>{

    }
    const getCredentials = async (link: string) => {
        console.log('welcomje', link)
        try {
            const response = await axios.get(`/api/sitemap/${link}`);
            setData(prevData => ({
                errUrl: [...prevData.errUrl, response.data.data.errUrl],
                pdferr: [...prevData.pdferr, response.data.data.pdferr]
            }))
            // await removeEmptyLinks();
            console.log('the reply', data)
            console.log("the errurl", response.data.data.errUrl)
            console.log("the pdferrr", response.data.data.pdferr)

        } catch (error: any) {
            console.log("noooo", error);
        }
    };


    const UrlTxtBox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    };

    return (
        <>
            <div className="flex flex-col justify-center h-[700px]">
                <div className="my-4 flex w-full justify-center gap-3">
                    <input type="text" className="input input-bordered input-md w-full max-w-xs" placeholder="Enters Website Url" onChange={UrlTxtBox} />
                    <button className="btn btn-sm my-2 btn-secondary" onClick={async () => getCredentials(url)}>Save as PDF</button>
                </div>

                <div className="flex justify-center h-90 gap-14 mx-10 my-10">
                    <div className="flex flex-col justify-evenly h-full w-[50%]">
                        <p>Error in fetching the URLs in these links</p>
                        <div className="w-full min-h-[300px] max-h-[300px] border rounded-2xl overflow-y-auto overflow-x-auto">
                            {data.errUrl.map((urls, i) => {
                                return (
                                    <div key={i} className="ml-4">
                                        <p>{urls}</p>
                                    </div>)
                            })

                            }
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-sm btn-info">Retry</button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-evenly h-full w-[50%]">
                        <p>List of non-generated screenshot URL list</p>
                        <div className="w-full min-h-[300px] max-h-[300px]  border rounded-2xl overflow-y-auto overflow-x-auto">

                            {data.pdferr.map((urls, index) => {
                                return (
                                    <div key={index} className="ml-4">
                                        <p>{urls}</p>
                                    </div>)
                            })
                            }
                        </div>
                        <div className="flex justify-end">
                            <button className="btn btn-sm btn-info">Retry</button>
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <p className="font-semibold ">Convert the generated PDF into a single pdf file ,by entering the new file and click on convert button</p>

                </div>
                <div className="my-4 flex w-full justify-center gap-3">
                    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
                    <button className="btn btn-sm my-2 btn-secondary">convert</button>

                </div>

            </div ></>
    );
}
