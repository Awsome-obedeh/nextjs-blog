import personModel from "@/models/person"
import { NextResponse } from "next/server"
import bcryptjs from "bcryptjs"

export const POST = async (request) => {
    // take incoming values
    const { email, password } = await request.json()
    try {
        // chehck if user mail exists in database
        const user = await personModel.findOne({ email: email })
        if (user) {
            const passwordTrue = bcryptjs.compareSync(password, user.password)
            if (passwordTrue) {
                    const {password, ...others}=user._doc
                return new NextResponse(JSON.stringify(others), { status: 200 })
            }
            else {
                return new NextResponse("Invaalid credentials 2 ", { status: 400 })

            }
        }

        else {
            return new NextResponse("Invaalid credentials 1", { status: 400 })
        }

    }

    catch (err) {
        console.log(err)
        return new NextResponse("server Error", { status: 500 })
    }

}