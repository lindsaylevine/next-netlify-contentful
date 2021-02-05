import type { NextApiHandler } from 'next'

// Source: https://stackoverflow.com/a/19692053
const isAbsoluteUrl = (url: string) => {
  const isAbsolute = new RegExp('^([a-z]+://|//)', 'i')
  return isAbsolute.test(url)
}

const preview: NextApiHandler = async (request, response) => {
  const { secret, redirectUrl } = request.query

  /* if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET || !redirectUrl) { */
  /*   return response.status(401).json({ message: 'Invalid token' }) */
  /* } */

  /* if (Array.isArray(redirectUrl) || isAbsoluteUrl(redirectUrl)) { */
  /*   response.status(400).json('Invalid redirect URL') */
  /* } */

  // Enable Preview Mode by setting the cookies
  response.setPreviewData({})

  response.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`,
  )
  return response.end()
}

export default preview
