import Link from 'next/link';
import Image from 'next/image';
import Card from "components/card";
import Twitter from "../../../../public/img/followers/twitter-followers.webp"
import FacebookV from "../../../../public/img/followers/facebook-page-likes.webp"
import Facebook from "../../../../public/img/followers/facebook.png"
import Tiktok from "../../../../public/img/followers/tiktok-likes.webp"
import Youtube from "../../../../public/img/followers/youtube-comments.webp"
import Instagram from "../../../../public/img/followers/instagram-followers.webp"



type Product = {
    id: number;
    image: any;
    title: string;
    price: number;
}


const products: Product[] = [
    {
        id: 1,
        image: Twitter,
        title: "Twitter Profile visit",
        price: 1200,
    },
    {
        id: 2,
        image: Twitter,
        title: "Twitter Likes",
        price: 7000,
    },
    {
        id: 3,
        image: Twitter,
        title: "Twitter Impressions",
        price: 1200,
    },
    {
        id: 4,
        image: Twitter,
        title: "Twitter Followers",
        price: 6500,
    },
    {
        id: 5,
        image: Youtube,
        title: "Youtube Comments",
        price: 7500,
    },
    {
        id: 6,
        image: Youtube,
        title: "Youtube Views services",
        price: 7500,
    },
    {
        id: 7,
        image: Youtube,
        title: "Youtube Subscribers",
        price: 10000
    },
    {
        id: 8,
        image: Tiktok,
        title: "Tiktok views",
        price: 1500,
    },
    {
        id: 9,
        image: Tiktok,
        title: "Tiktok Likes",
        price: 8000,
    },
    {
        id: 10,
        image: Tiktok,
        title: "Tiktok Followers",
        price: 7500,
    },
    {
        id: 11,
        image: FacebookV,
        title: "Facebok video view",
        price: 3000
    },
    {
        id: 12,
        image: FacebookV,
        title: "Facebook Post likes",
        price: 6000
    },
    {
        id: 13,
        image: FacebookV,
        title: "Facebook Page likes",
        price: 7000,
    },
    {
        id: 14,
        image: Instagram,
        title: "Instagram Views",
        price: 3000
    },
    {
        id: 15,
        image: Instagram,
        title: "Instagram Likes",
        price: 6000,
    },
    {
        id: 16,
        image: Instagram,
        title: "Instagram followers",
        price: 6000
    },
    {
        id: 17,
        image: Facebook,
        title: "Facebook followers",
        price: 6000,
    },
];


export default function BuyFollowers() {
  return (
    <>
      {/* cards */}
      <section className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {products.map((product) => (
          <Card key={product.id} extra="border border-gray-200 dark:border-navy-600">
            <div className="p-4 flex flex-col">
            <div className='flex justify-center'>
              <Image 
                src={product.image.src}
                alt={product.title}
                width={96}
                height={96}
                className="w-24 h-24 object-contain mb-4"
              />
              </div>
              <h1 className="text-base font-semibold mb-2 break-words">{product.title}</h1>
              <p className="text-sm mb-4">Price: ₦{product.price} <span className='italic'>per 1k</span></p>
              <button className="bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors w-full">
                Buy Now
              </button>
            </div>
          </Card>
        ))}
      </section>
    </>
  );
}
