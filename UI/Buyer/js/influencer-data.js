// Influencer Data Store
const influencerDatabase = {
  'jane-style': {
    id: 'jane-style',
    name: "Jane's Style Hub",
    fullName: "Jane Doe",
    verified: true,
    bio: "Your go-to for trendy finds and honest reviews. Helping you find your perfect style effortlessly. ✨",
    category: "Fashion & Lifestyle",
    followers: "1.2M",
    rating: 4.9,
    profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDWC92mODFFcvGQJA2DlW1volbSLXzj93VyhMwjUfqUbGWJj9_ji_w1NWJqfBMxt-0YE1NkKjF-0FojnXoB6c4VFLmaylWlT7K3HlgCm1rOE9MYyAeR1bSO17YZjUSssDpi5UeOMQDxRbmUr0uKavAeJ7GBS86dgxm_N3ViLVam5EhEFlLoX1O0wqmhbvi4nDwNi312xN0yZM6QlwnzD-2EaM4ua-9nMNrJE0V7nzkUGYIYdbNboOKVl3_8b4W9ETvCClOxeS86g0",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiRg-gC_uh7Xq1Z3TbvVlKxWlJTnblDvj7bgRA0vCyEYRI4-LPMeWRZsp3miB8Q0CZIc-s-GgEGJn93vgGRdXml5KykCWIyOvE7bwPzYNXG3fUNe2KT3XX7gIOUwXqxFdrPh3CcBj-8DXlTaDc34TGpLFhNlrsbuRapw_yQDqq_UQELffKpCPUoiOEUU1XreIWiyzDVvKEbV0HvFIlQqF6D18mqQg0KyC9PY1PCKbMWfMA4K0gsr__jrSaUDVg6tM5BXYKVf3sVQqe",
    shortDesc: "Curated fashion for the modern woman.",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      youtube: "#"
    },
    featuredProducts: [
      {
        name: "Elegant Summer Dress",
        price: 89,
        originalPrice: 110,
        discount: 20,
        rating: 4.8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3lfzrSARGbfy7LIH7_OyEb0VJlilAr48O-p65HnvuFSxrXe1wLn4AwT1gt0kMo1WYCUVxuoS8AmtybO5mSjlsBj9cOcGDK_SToiJTI5LNhWgFA6WQi4daBBy_e32lMXaN7mh3qhONu0xmgMT7aKpzaVCXKqtt45nG-PHXuZBJQaw1FMSMdyr2So12htvOGM6GDLVCLCRioxImEVMn5Om2IOWB2XWSpImArDeKQaWv0mMHePnCr9sHY_7J_yq8jogcNibN4yRyz5l-"
      },
      {
        name: "Designer Handbag",
        price: 249,
        originalPrice: null,
        discount: 0,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQegjSoFOB41jhKptARwff5JCM26cQNrz4COhS6FZOWnnwqqiJ8y_42YxsYMFa1pyBe6LAOsTTe3upkKNhKoTkggAPIn1ef1aWi6eFW_HhmYe9PmKj3-8b5b7XrZNuNx71qrZdXxALtBhsAlqNrtLXRnhVo-TnBXfoRAzRDBn1SV2jDM-kf6TwAwzuMZaha79ItjtL-u_QeoPcXFVAJfB3dC_WmGS5bHb9Z6Lr7Uwty8TV3132ipPpQvnrgaY8Nzy6abVM6na-kqmJ"
      },
      {
        name: "Stylish Sunglasses",
        price: 65,
        originalPrice: 85,
        discount: 15,
        rating: 4.7,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZjs6DvKUyLsa7K0ZmUWtvqKvCYuq_aaiRM9RxYfEmi3rErYsX7eXz9kTVsXzuFvLH27cjx3xoP0fxhvaeDo5bpnxORhUnCudZU48c29B98EsbRocSyGYCKMc3UgESwBCFpDaonVj0RSPPVMCtqkT65iiOKo5Xq84fv47FDGAfhBROKif6MR4fUGGS1gSHnV11Wf8UESlIymLUW1xeZOVUdHxTnswoW6C4c25OWCmwvmeN7WNT7Cx_ACufPZFT9Cbh2nGHFzEfwOFz"
      },
      {
        name: "Leather Ankle Boots",
        price: 159,
        originalPrice: null,
        discount: 0,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0P7Sm6vrZa704nPjaxzCtwMOXmOol5WkNSm1zbdu8YbucUrCv8i2ettoqTlir_wg85FOScTMrkQ0hQCoWA-QLUaecRI5vMMK5snFbs0Xqrm8U4-xAaPQlMBjQ1l6_RosERKqlNB7ZePumSbYp98FhO6rUBIVfthBxOYTaaqXYrzcPDPB2yv8ExQ8-4k9N-L-oBkOEXEFqQDagX1dnqQj08YZgkbOYvdzp25v0ikJXTCv3Yc5B-XI4QFuWdai4GcUH8hEkXUWrMjU"
      }
    ]
  },
  'tech-guru': {
    id: 'tech-guru',
    name: "Tech Guru's Gear",
    fullName: "Alex TechGuru",
    verified: true,
    bio: "Reviewing the latest tech gadgets and helping you make informed decisions. From smartphones to smart homes. 🚀💻",
    category: "Technology & Gadgets",
    followers: "850K",
    rating: 4.8,
    profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLg97VfNjrj0YQxN7WwlhKS-k_9Vn2qej8V7i8QHA2qZo262IB79YJxAs6qHbj0y8sUa_jK-iz4IsKowFTH0QeQODAOFnV-BmWbr7Hit_2n7yWoqfi6ZwszHCzzL9yPU1E_l0GEWKCtg3QCptu2xQ9t8HctVAz9xYymDG_8PA5_WXJK7VCM20cLdbBixrsuOcDfvN4Os6Ff2ZbHCGji15YKCgIRjk7EsRaTiHLHFR6Tj4dHU1fzgTrHDS2OgAM3TggMOa0pIOCYSw",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_UaLumQFwI0PCqdmHIpmoaXq5Anbo83xLORaPTYi9g7jN09MPzwZPnt3daS3IdQWX9Xw3I9Ybgugm4JEioVZG1C-v6kHV3kpeRm6RRBcroGZIFaQNzstMg0JcluPcoeqBw7G3Pqmfk-QZME-faxHV-jTc_3DSXWh1TxLUzNAOuLp-C5FKY_44-FCgaWNkvKyORGVFeGANllEY5TLjx7PAEWbE0HeP3eNonZjUN6GocRSElYm24hAxx4d9mk7qpf6tiQ5TK_mkdG4",
    shortDesc: "The best gadgets, tested and approved.",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      youtube: "#"
    },
    featuredProducts: [
      {
        name: "Pro Gamer RGB Mouse",
        price: 59,
        originalPrice: 79,
        discount: 25,
        rating: 4.8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_UaLumQFwI0PCqdmHIpmoaXq5Anbo83xLORaPTYi9g7jN09MPzwZPnt3daS3IdQWX9Xw3I9Ybgugm4JEioVZG1C-v6kHV3kpeRm6RRBcroGZIFaQNzstMg0JcluPcoeqBw7G3Pqmfk-QZME-faxHV-jTc_3DSXWh1TxLUzNAOuLp-C5FKY_44-FCgaWNkvKyORGVFeGANllEY5TLjx7PAEWbE0HeP3eNonZjUN6GocRSElYm24hAxx4d9mk7qpf6tiQ5TK_mkdG4"
      },
      {
        name: "Wireless Mechanical Keyboard",
        price: 129,
        originalPrice: null,
        discount: 0,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRRKw34R7b3j5BY3SEkt32V5FQ3pqJLCcXB6b8P3b1QH1vej8fHIzIv1zSqkE4mkJZWU-8uC8_BmCI1H9kF2B7_wopZgxZ07VRMWOkAcmAMTYeKd5SbVRpEUh5RMdMujLu48V-YQ8ROEK64F9dBOdB_0Me5c0ggcRYV8iLrU0trijU2UfC5sCPOnCE_b-rGBl7yDFsDCIx7EMoV4CoA-8100nByPZqCTTjF2qRlLVlFG4oqHCX5NfmuplA95kGx7mUxSbWUHfP1oI"
      },
      {
        name: "4K Webcam Pro",
        price: 199,
        originalPrice: 249,
        discount: 20,
        rating: 4.7,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDA3ef7auU_8Ewz3G_ljTr3hNsIvs7vJLuMVHMsnuFp26_m9G-Uvm4zvjXen4cpO9N4xgqWtz4jL3mYqFquaHwyZNpU8bjh1VEpKf4r5X9BaXvljBb619Fmfymwn3K8dJoyQLz9ClmtpmzQ03JcQH2rha46-iVo56NjmhJ3DcUzUq139tf1d1zG7ICKU1jPxon6wOj-iBBcWVWYMWAtMoxVUjFaTXzpv_tPSXf_Oq9sM7IL7YITr3bF6yZBnnhIx8037QfiWPK9pkU"
      },
      {
        name: "Noise-Cancelling Headphones",
        price: 299,
        originalPrice: null,
        discount: 0,
        rating: 5.0,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeC_FLjW0UNM7gHVNDkUXN8zYldMrNgP246toTqqifivnyj77QGZt5q1WvrxCitkMhvxfSgigHVkREcmGJE98Z-MkMgOiX8kNKVgcNQXTFaIHApbfcbuntwlesEuVhlw2GGK6OODuQYuVhPigq9lOq-YXDz273lOHYACf1H01pYlnxLyGhcYtTHRJj3NVIdlYmnHm7dBv6Kvhqh7B5lJQwb9tV-t6fXyoGTDutqk4Tu57Ntzk3skLuplXly89-qIwQtv8IEy1UBik"
      }
    ]
  },
  'cozy-home': {
    id: 'cozy-home',
    name: "Cozy Home Finds",
    fullName: "Sarah HomeBody",
    verified: true,
    bio: "Creating warm, inviting spaces you'll love coming home to. Interior design tips and cozy product finds. 🏡✨",
    category: "Home & Living",
    followers: "620K",
    rating: 4.9,
    profileImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVdgJNBHF0QtlrfDQFnh1NWjimLcPaplQ_8pLZ__JldJZxZMCaNHFJM0tSzuKGfUva64ToU4ec6N6QPxj1oVaNdbaMDDbuLPR9CKf9qGqmOx8kxPd5X8vaflYfi-loB2xDhCtrUq3bS7YjlkSQoTo9sXIMvje-g_Dyh_Npv_TTf9319xu7sg34wrrvYw2ZLmZk-b9Zvl_KL-qSw_L_R2-DgRPmSCUiA6P94fzovZtbDl2LzIKCuSrY0DtpUa3LuV-Hgwm1K8qCEUQ",
    bannerImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnwKgB9rHBO5e_N6OtCPl4hIFbhfud9z4ht-5uYuZSMNpjDjq5dQXHOkVXcUUVcd7O-z5-vWF5WSj0pL6Sv_Q_S6ufF75pLAwc3IiI0hy4vnppXwpJYCuVSwdg-FF6d1DGE9dVOcxFR1DWXWdskhgnFp4mK8dht5RwYet66yfgQSigQlnBtW8UURdJUPsswrG7WiRZg5hb-jkP76j6Eb-Nv3NvsWtb1EwfhQXGv5paw18wUHvUyoELdSBmZab57HPycgJ3dSyoVVE",
    shortDesc: "Elevate your living space with comfort.",
    socialLinks: {
      twitter: "#",
      instagram: "#",
      youtube: "#"
    },
    featuredProducts: [
      {
        name: "Luxury Throw Blanket",
        price: 79,
        originalPrice: 99,
        discount: 20,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnwKgB9rHBO5e_N6OtCPl4hIFbhfud9z4ht-5uYuZSMNpjDjq5dQXHOkVXcUUVcd7O-z5-vWF5WSj0pL6Sv_Q_S6ufF75pLAwc3IiI0hy4vnppXwpJYCuVSwdg-FF6d1DGE9dVOcxFR1DWXWdskhgnFp4mK8dht5RwYet66yfgQSigQlnBtW8UURdJUPsswrG7WiRZg5hb-jkP76j6Eb-Nv3NvsWtb1EwfhQXGv5paw18wUHvUyoELdSBmZab57HPycgJ3dSyoVVE"
      },
      {
        name: "Scented Candle Set",
        price: 45,
        originalPrice: null,
        discount: 0,
        rating: 4.8,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIfiRmnuL6NmYTIBIOPHUZJrD6LREhZozYnDA0zUEi0PlGnIs0SGEGlfmyb69JFr-Xzuey-trazpvZMXBvglCpmecKe85HYuQ8HQWR1rrIAzMkbO-6OIEVzG9_512-R5X-sjn881Ig39Xi-rpB1pkDGcszU9EWj981LbBWSobp4BTIx_gXI-0pPqdIr2GoWxIFRSPC3PoLCw3TJfT1Vf5IxHOA29yJcwTBQwWMqwX5McPROo5YoYM6NbHMdxbqiMArTmRq9f6B-C8"
      },
      {
        name: "Decorative Cushion Set",
        price: 59,
        originalPrice: 75,
        discount: 15,
        rating: 4.7,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6kGAwZB0FYB-tkQD9iigUmZNGA9FJe8THBM-duJCNqUmWF1ynLrN6eBLOwMZwU1pbvPDhdvbAdIzECk6InLpuxkhiN7mcwC2vGQhSxF__QWAFCIeVMJ8QgnGFIAVD566yp4EBjneqTEpAkKkA4Mv2QSXKxjwgc8QVlg9I0qT5Ji_8qYxZDhdZuTA21gw1uc-oaj1lJEthy1-KOZPCDqPEGn2_joY5HstQ32QupOsofC0SM0DRI1MSl65-9BT1xBFb8O28j3Qois0"
      },
      {
        name: "Modern Table Lamp",
        price: 89,
        originalPrice: null,
        discount: 0,
        rating: 4.9,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxCn0JanQTw9Vw5kTzJZ5tS3iuabPSWuJZU3qFuRMc1k3_r4pUbQBkJeDIuK8knXahjM0G2-ywwSzzBEGsB7zm9fxFJHIyyQ7GUVLNrN6c8v9wfWkvCwkIM7d2Sd_rzWU2jZ_3dP9IQDn3y_muexaEgw9hSmFbfambnj1x3CKcgmvGFqKE_Unf8952n-_LVU6hqffXMAPve3zdmTnybQQN6lj62j9AkAE3KQKLCXaykS1W9HoRHQQLVM40b-Xh6uhwkmUOvQ_Tbx4"
      }
    ]
  }
};

// Helper function to get influencer by ID
function getInfluencer(id) {
  return influencerDatabase[id] || null;
}

// Helper function to get all influencer IDs
function getAllInfluencerIds() {
  return Object.keys(influencerDatabase);
}
