// ===== ROKOMARI FINDS — SHARED DATA =====
// Edit this file to add/update books and reviews

const BOOKS = [
  {
    id: 1,
    title_bn: "মুহাম্মাদ আল ফাতিহ",
    title_en: "Muhammad Al Fatih",
    author_bn: "ড. রাগিব সারজানি",
    author_en: "Dr. Ragib Sarjani",
    category_bn: "ইসলামি ইতিহাস",
    category_en: "Islamic History",
    price: "৳ ৩৫০",
    color: "#1a3a5c",
    featured: true,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "কনস্টান্টিনোপল বিজয়ের মহানায়ক সুলতান মুহাম্মাদ আল ফাতিহের অসাধারণ জীবনকথা।",
    description_en: "The extraordinary life of Sultan Muhammad Al Fatih, the conqueror of Constantinople."
  },
  {
    id: 2,
    title_bn: "ইসলামি ইতিহাস (১-৫)",
    title_en: "Islamic History Vol. 1–5",
    author_bn: "ড. রাগিব সারজানি",
    author_en: "Dr. Ragib Sarjani",
    category_bn: "ইসলামি ইতিহাস",
    category_en: "Islamic History",
    price: "৳ ১,৬০০",
    color: "#6b3f1f",
    featured: true,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "ইসলামের সোনালি ইতিহাসের পাঁচ খণ্ডের সম্পূর্ণ সিরিজ।",
    description_en: "The complete five-volume series on the golden history of Islam."
  },
  {
    id: 3,
    title_bn: "সালাহউদ্দিন আইয়ুবি",
    title_en: "Salahuddin Ayyubi",
    author_bn: "ড. আলী মুহাম্মাদ",
    author_en: "Dr. Ali Muhammad",
    category_bn: "ইসলামি ইতিহাস",
    category_en: "Islamic History",
    price: "৳ ৪২০",
    color: "#4a6741",
    featured: true,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "বায়তুল মুকাদ্দাস পুনরুদ্ধারকারী মহান বীর সালাহউদ্দিনের জীবন ও যুদ্ধ।",
    description_en: "The life and battles of the great hero who reclaimed Jerusalem."
  },
  {
    id: 4,
    title_bn: "বিশ্বনবী",
    title_en: "The World Prophet",
    author_bn: "গোলাম মোস্তফা",
    author_en: "Golam Mustafa",
    category_bn: "সীরাত",
    category_en: "Seerah",
    price: "৳ ৩৮০",
    color: "#b84c2a",
    featured: true,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "রাসূলুল্লাহ (স.)-এর জীবনের অসাধারণ কাব্যিক বর্ণনা।",
    description_en: "A beautiful poetic account of the life of the Prophet (peace be upon him)."
  },
  {
    id: 5,
    title_bn: "খলিফাদের ইতিহাস",
    title_en: "History of the Caliphs",
    author_bn: "ইমাম জালালুদ্দিন সুয়ুতি",
    author_en: "Imam Jalal al-Suyuti",
    category_bn: "ইসলামি ইতিহাস",
    category_en: "Islamic History",
    price: "৳ ৪৮০",
    color: "#2a4a6b",
    featured: false,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "ইসলামের মহান খলিফাদের শাসনামলের বিস্তারিত ইতিহাস।",
    description_en: "A detailed history of the great Caliphs of Islam."
  },
  {
    id: 6,
    title_bn: "আল আন্দালুস",
    title_en: "Al Andalus",
    author_bn: "ড. রাগিব সারজানি",
    author_en: "Dr. Ragib Sarjani",
    category_bn: "ইসলামি ইতিহাস",
    category_en: "Islamic History",
    price: "৳ ৩৯০",
    color: "#7a3f1f",
    featured: false,
    rokomari_link: "https://www.rokomari.com",
    description_bn: "মুসলিম স্পেনের গৌরবময় ইতিহাস এবং পতনের করুণ কাহিনী।",
    description_en: "The glorious history and tragic fall of Muslim Spain."
  }
];

const REVIEWS = [
  {
    id: 1,
    title_bn: "কনস্টান্টিনোপলের বিজয়ী — এক অবিস্মরণীয় পাঠ",
    title_en: "The Conqueror of Constantinople — An Unforgettable Read",
    book_bn: "মুহাম্মাদ আল ফাতিহ",
    book_en: "Muhammad Al Fatih",
    excerpt_bn: "ড. রাগিব সারজানির এই বইটি পড়লে মনে হয় সেই যুগে ফিরে গেছি। সুলতানের দৃঢ়তা, ঈমান আর অসাধারণ রণকৌশল — সব মিলিয়ে এটি একটি অনন্য সাধারণ রচনা।",
    excerpt_en: "Reading this book feels like traveling back in time. The Sultan's resolve, faith, and brilliant strategy make this an extraordinary work.",
    stars: 5,
    date: "নভেম্বর ২০২৪",
    tag_bn: "বই রিভিউ",
    tag_en: "Book Review"
  },
  {
    id: 2,
    title_bn: "ইসলামি ইতিহাসের সেরা বাংলা রচনা",
    title_en: "The Best Bengali Work on Islamic History",
    book_bn: "ইসলামি ইতিহাস (সিরিজ)",
    book_en: "Islamic History (Series)",
    excerpt_bn: "পাঁচ খণ্ডের এই সিরিজটি বাংলাভাষী পাঠকদের জন্য ইসলামের ইতিহাস জানার সবচেয়ে সহজ ও প্রামাণিক পথ।",
    excerpt_en: "This five-volume series is the easiest and most authentic way for Bengali readers to learn Islamic history.",
    stars: 5,
    date: "অক্টোবর ২০২৪",
    tag_bn: "সিরিজ রিভিউ",
    tag_en: "Series Review"
  },
  {
    id: 3,
    title_bn: "বায়তুল মুকাদ্দাসের মুক্তিদাতা",
    title_en: "The Liberator of Jerusalem",
    book_bn: "সালাহউদ্দিন আইয়ুবি",
    book_en: "Salahuddin Ayyubi",
    excerpt_bn: "সালাহউদ্দিনের জীবন কাহিনী পড়তে পড়তে চোখ ভেজে যায়। তাঁর নীতিবোধ, সাহস ও মানবতা — এই বই পড়লে মনে অনুপ্রেরণা জাগে।",
    excerpt_en: "Reading Salahuddin's story brings tears to the eyes. His principles, courage, and humanity — this book is deeply inspiring.",
    stars: 5,
    date: "সেপ্টেম্বর ২০২৪",
    tag_bn: "বই রিভিউ",
    tag_en: "Book Review"
  }
];

const CATEGORIES = {
  bn: ["সব", "ইসলামি ইতিহাস", "সীরাত", "বাংলা সাহিত্য", "আত্মজীবনী"],
  en: ["All", "Islamic History", "Seerah", "Bengali Literature", "Biography"]
};
