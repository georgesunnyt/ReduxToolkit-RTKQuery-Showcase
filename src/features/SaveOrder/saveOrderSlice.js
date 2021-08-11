import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const placeOrderApi = createApi({
    reducerPath: 'placeOrderApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://reqres.in/api/'}),
    endpoints: (build) => ({
        createOrder: build.mutation({
            query(body) {
                return {
                    url: `users`,
                    method: 'POST',
                    body,
                }
            } 
        })
    })
})

export const {useCreateOrderMutation} = placeOrderApi