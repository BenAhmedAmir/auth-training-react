import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useToken} from "../auth/useToken";
import {EmailVerificationFail} from "../components/EmailVerificationFail";
import {EmailVerificationSuccess} from "../components/EmailVerificationSuccess";
import axios from "axios";

export const EmailVerificationPage = () => {

    const [isLoading,setIsLoading] = useState(true)
    const [isSuccess,setIsSuccess] = useState(false)
    const {verificationString} = useParams()
    const [,setToken] = useToken()

    useEffect(() =>{
        const loadVerification = async () => {
            try{
                const response = await axios.put('/api/verify-email', {verificationString})
                const { token } = response.data
                setToken(token)
                setIsSuccess(true)
                console.log(isSuccess)
                setIsLoading(false)
            }catch (e) {
                console.log(e)
                setIsSuccess(false)
                setIsLoading(false)
            }
        }
        loadVerification()
    }, [setToken, verificationString])
    console.log("outside",isSuccess)
    if(isLoading) return <p>Loading ...</p>

    if(!isSuccess) return <EmailVerificationFail/>

    return <EmailVerificationSuccess/>
}