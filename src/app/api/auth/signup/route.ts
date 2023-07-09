import { API_ENDPOINTS } from "./../../../../config/index";
import { postData } from "./../../../../utils/HTTPService";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(API_ENDPOINTS.signup);
  try {
    const apiRes = await postData("http://127.0.0.1:8000/api/register", body);
    const data = await apiRes.json();
    // console.log(apiRes.status)
    // Set httponly Cookie
    // const token = data?.token;
    if (!apiRes.ok) {
      return NextResponse.json(data, {
        status: apiRes.status,
      });
    }
    const response = NextResponse.json(
      { data: data.data.user },
      { status: apiRes.status }
    );
    const token = data?.data.token;

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      maxAge: 7 * 24 * 3600 * 1000,
    });
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
