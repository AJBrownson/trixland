import Link from 'next/link';
import Image from 'next/image';
import Card from "components/card";
import OldInstagram from "../../../../public/img/availableProducts/old-instagram-2018-2022.webp"
import FacebookFanPage from "../../../../public/img/availableProducts/facebook-fan-page-marketplace.webp"
import FacebookMail from "../../../../public/img/availableProducts/2020-facebook-mail-rambler-ru-onet-pl.webp"
import YankeeFacebook from "../../../../public/img/availableProducts/yankee-facebook.webp"
import OldNigFacebook from "../../../../public/img/availableProducts/old-nigerian-facebook.webp"
import OldUsGoogle from "../../../../public/img/availableProducts/old-usa-google-voice-high-quality.webp"
import UsaInstagram from "../../../../public/img/availableProducts/usa-instagram-2018-2019-random-followers.webp"
import Linkedin from "../../../../public/img/availableProducts/linkedin-ukraine-2fa-cookie.webp"
import ExpressVPN from "../../../../public/img/availableProducts/express-vpn.png"
import OldGmail from "../../../../public/img/availableProducts/old-gmail-account.jpg"
import Textplus from "../../../../public/img/availableProducts/text-plus.jpg"
import Talkatone from "../../../../public/img/availableProducts/talkatone.jpg"
import FacebookDating from "../../../../public/img/availableProducts/facebook-dating.jpg"



type Product = {
    id: number;
    image: any;
    title: string;
    stock: number;
    price: number;
}


const products: Product[] = [
    {
        id: 1,
        image: OldInstagram,
        title: "Old Instagram|🇯🇵||2018-2022✅💣💥",
        stock: 0,
        price: 3499
    },
    {
        id: 2,
        image: FacebookFanPage,
        title: "Facebook|🇺🇸|Fan page/Marketplace|✅💣💥",
        stock: 0,
        price: 6599
    },
    {
        id: 3,
        image: FacebookMail,
        title: "2020 Facebook|🌍|Mail:rambler.ru/onet.pl|✅💣💥",
        stock: 9,
        price: 5900
    },
    {
        id: 4,
        image: YankeeFacebook,
        title: "Yankee|🇺🇸/Mix Geo| Facebook|Preview 💣💥",
        stock: 11,
        price: 2999
    },
    {
        id: 5,
        image: OldNigFacebook,
        title: "Old Nigerian Facebook🇳🇬💣💥",
        stock: 0,
        price: 3999
    },
    {
        id: 6,
        image: OldUsGoogle,
        title: "Old |🇺🇸 Google voice✅|💣💥",
        stock: 0,
        price: 7999
    },
    {
        id: 7,
        image: UsaInstagram,
        title: "Yankee Instagram|🇺🇸| 2018/2019|random followers|Posts💣💥",
        stock: 6,
        price: 3900
    },
    {
        id: 8,
        image: Linkedin,
        title: "LinkedIn|Mix🌍 IP|Recovery mail|✅",
        stock: 3,
        price: 2900
    },
    {
        id: 9,
        image: ExpressVPN,
        title: "Express VPN✅",
        stock: 0,
        price: 4000
    },
    {
        id: 10,
        image: OldGmail,
        title: "Old| 🌍|Gmail Account |🥶No refund🥶",
        stock: 32,
        price: 800
    },
    {
        id: 11,
        image: Talkatone,
        title: "Talkatone|🇺🇸|✅",
        stock: 0,
        price: 5000
    },
    {
        id: 12,
        image: Textplus,
        title: "Text Plus|🇺🇸✅",
        stock: 0,
        price: 3000
    },
    {
        id: 13,
        image: FacebookDating,
        title: "Old Facebook|🇺🇸 Dating|Friends|✅💣💥",
        stock: 2,
        price: 16999
    },
];


export default function AvailableProducts() {
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
              <p className="text-sm mb-1">In Stock: {product.stock} pcs</p>
              <p className="text-sm mb-4">Price: ₦{product.price}</p>
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
