import dbConnect from "@/db/dbConnect";
import ShortLink from "@/db/models/ShortLink";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context) {
  const { shortUrl } = context.query;
  await dbConnect();
  const shortLink = await ShortLink.findOne({ shortUrl });
  if (shortLink) {
    return {
      redirect: {
        destination: shortLink.url,
        permanent: false,
      },
    };
  }
  return {
    notFount: true,
  };
}

export default function ShortUrlPage() {
  return null;
}
