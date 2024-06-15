import { z } from 'zod'
import data from '../data.json'

type ReqParams = {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: ReqParams) {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const slug = z.string().parse(params.slug)
  const product = data.products.find((product) => product.slug === slug)
  if (!product) {
    return Response.json({ message: 'Product not found' }, { status: 400 })
  }
  return Response.json(product)
}
