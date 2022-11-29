import {getGoogleOAuthUrl} from "../utils/getGoogleOAuthUrl";

export const getGoogleOAuthRoute = {
    path:'/auth/google/url',
    method: 'get',
    handler: (req, res) => {
        const url = getGoogleOAuthUrl()
        res.status(200).json({ url })
    }
}