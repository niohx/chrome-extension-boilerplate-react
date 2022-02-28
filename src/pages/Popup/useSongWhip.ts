import axios from "axios";
import {
    atom,
    SetStateAction,
    useAtom
} from "jotai";
import {
    useCallback,
    useEffect,
    useState
} from "react";

export const resultUrlAtom = atom("");
export const targetUrlAtom = atom("");
export const statusAtom = atom < status > ("pending");

const status = {
    loading: "loading",
    success: "success",
    error: "error",
    pending: "pending"
}as const;

    type status = typeof status[keyof typeof status];

const isSpotify = (url: string) => {
    let isSpotify: boolean = ((url: string) => url.includes('https://open.spotify.com/track/'))(url)
    return isSpotify;
}

const useSongWhip = ():[string,string,(update:SetStateAction<string>)=>void] => {
    const [status, setStatus] = useState < status > ('pending');
    const [result, setResult] = useAtom(resultUrlAtom);
    const [targetUrl, setTargetUrl] = useAtom(targetUrlAtom);
    const fetchedData = async (url: string) => {
        const response = await axios.post('https://songwhip.com/', {
            "url": targetUrl
        })


        return response;
    }
    useEffect(() => {
        if(targetUrl!=""){if (isSpotify(targetUrl)) {
            console.log('detected spotify url!')
            setStatus("loading");
            fetchedData(targetUrl).then((response) => {
                console.log(response.data);
                setResult(response.data);
                setStatus('success')
            })
        }else{
            console.log('its not spotify url!!')
        }}
    }, [targetUrl]);


    return [status, result , setTargetUrl];
}

export default useSongWhip;