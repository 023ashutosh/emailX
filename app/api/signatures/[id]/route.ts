import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const signature = await prisma.signature.findUnique({
      where: { id: params.id },
      include: { user: true },
    })

    if (!signature) {
      return NextResponse.json(
        { message: "Signature not found" },
        { status: 404 }
      )
    }

    if (signature.user.email !== session.user.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    return NextResponse.json(signature)
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const signature = await prisma.signature.findUnique({
      where: { id: params.id },
      include: { user: true },
    })

    if (!signature) {
      return NextResponse.json(
        { message: "Signature not found" },
        { status: 404 }
      )
    }

    if (signature.user.email !== session.user.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const { name, content } = await req.json()

    const updatedSignature = await prisma.signature.update({
      where: { id: params.id },
      data: { name, content },
    })

    return NextResponse.json(updatedSignature)
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession()

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    const signature = await prisma.signature.findUnique({
      where: { id: params.id },
      include: { user: true },
    })

    if (!signature) {
      return NextResponse.json(
        { message: "Signature not found" },
        { status: 404 }
      )
    }

    if (signature.user.email !== session.user.email) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      )
    }

    await prisma.signature.delete({
      where: { id: params.id },
    })

    return NextResponse.json(
      { message: "Signature deleted successfully" },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}