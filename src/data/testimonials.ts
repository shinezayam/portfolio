export type Testimonial = {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Б. Энхжин",
    role: "Бүтээгдэхүүний менежер",
    company: "LendMN",
    content:
      "Шинэзаяагийн хийсэн UX сайжруулалт бидний гол урсгалуудыг мэдэгдэхүйц оновчтой болгосон. A/B тестийн үр дүнгээр даалгавар гүйцэтгэх хугацаа 32%-иар богиносож, хэрэглэгчийн сэтгэл ханамж өссөн.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 2,
    name: "Г. Мөнх-Эрдэнэ",
    role: "CTO",
    company: "AND Global",
    content:
      "Wireframe-аас эхлээд дизайн систем хүртэл маш эмх цэгцтэй, инженерчлэлтэй нийцсэн шийдлүүд санал болгосон. Хөгжүүлэлтийн багийн маань хурд мэдэгдэхүйц нэмэгдсэн.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 3,
    name: "Ч. Ариунтуяа",
    role: "Маркетингийн захирал",
    company: "Tavan Bogd Group",
    content:
      "Брэндийн өнгө төрхийг шингээсэн, хэрэглэгчдэд ойлгомжтой дизайн гаргасан нь онлайн сувгийн хөрвөлтийг өсгөхөд чухал нөлөө үзүүлсэн.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 4,
    name: "Д. Наранбат",
    role: "Үйл ажиллагааны захирал",
    company: "Unitel",
    content:
      "Кейз судалгаа, хэрэглэгчийн ярилцлага дээр тулгуурласан шийдлүүд бодит үр дүн авчирсан. Тэрээр багийн ажил, харилцаанд ч маш өндөр стандарт баримталдаг.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
  {
    id: 5,
    name: "С. Баярмаа",
    role: "UX Lead",
    company: "Khan Bank",
    content:
      "Комплекс процессуудыг энгийн, ойлгомжтой урсгал болгон буулгаж чадсан. Хэрэглэгчийн замналыг оношилж, оновчилсон шийдлүүд нь дотоод KPI-уудыг сайжруулсан.",
    rating: 5,
    avatar: "/api/placeholder/60/60",
  },
] 