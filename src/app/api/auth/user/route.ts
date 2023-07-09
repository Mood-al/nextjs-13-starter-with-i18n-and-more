import { getData } from "./../../../../utils/HTTPService";
import { API_ENDPOINTS } from "./../../../../config/index";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookieStore = cookies();
  const token: any = cookieStore.get("token")?.value;

  try {
    const apiRes = await getData(API_ENDPOINTS.user, token);

    const data = await apiRes.json();
    // console.log(apiRes.status)
    // Set httponly Cookie
    if (!apiRes.ok) {
      return NextResponse.json(data, {
        status: apiRes.status,
      });
    }
    // console.log();
    const response = NextResponse.json(
      { data: data },

      { status: apiRes.status }
    );

    // response.cookies.set({
    //   name: "token",
    //   value: token,
    //   httpOnly: true,
    //   maxAge: 60 * 60,
    // });
    return response;
  } catch (err: unknown) {
    if (err instanceof Error) {
      const response = NextResponse.json(
        {
          error: { stack: err.stack, message: err.message, name: err.name },
        },
        { status: 400 }
      );

      return response;
    }
    // Send error to the client side
  }
  // Then set a cookie
  // response.cookies.set({
  //   name: "token",
  //   value: token,
  //   httpOnly: true,
  //   maxAge: 60 * 60,
  // });
}
