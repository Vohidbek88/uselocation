
const initCard =[{
    "id": "1",
    "logo": "https://avatars.mds.yandex.net/i?id=c4f874341741b2e0931874ea90ffa0a47a8181d1-7662450-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=2c9c9c8e4e3675a8cc15bdcdb4fbe45b883d932e-7284491-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Obebor"
  },
  {
    "id": "10",
    "logo": "https://avatars.mds.yandex.net/i?id=ee9c2cc6fb95a73d6d6b40c496dc48f1c2b28544-7992926-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=e4b24f61a21b7501ba6ac54f404a5810-5359509-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Motley Fool"
  },
  {
    "id": "3",
    "logo": "https://avatars.mds.yandex.net/i?id=b3205b8bb54eda0a345fee8106addddbe26f2507-8182686-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=48c943fac52f54f1c72c2c9b5cb33a945211c3cc-8497159-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Kevin"
  },
  {
    "id": "4",
    "logo": "https://avatars.mds.yandex.net/i?id=19ab4484bb07aeb3c69c95c814f6a51f6c04b40a-7106899-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=53e3f540258b42804ca66b1ad7d3d62250fe9a21-6968661-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Mamarayim"
  },
  {
    "id": "5",
    "logo": "https://avatars.mds.yandex.net/i?id=f53efce688d733fc4bb714a8c21ce20b-5231332-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=bc7aaa5f2eedb528c2e3815d91514784a2069427-5888651-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Jack"
  },
  {
    "id": "6",
    "logo": "https://avatars.mds.yandex.net/i?id=91701d057d2eb21d1998f728836d463a057ac427-5246350-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=dda40cf5faca9c925b909d7f0f3dc52a2659a4db-8310601-images-thumbs&n=13",
    "status": "true",
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae tenetur dolore ratione consectetur facilis doloribus, asperiores ab quibusdam sint repellendus laudantium aut? Unde magni dicta, deleniti pariatur ipsam autem fuga.",
    "Small_name": "Tashkent,Uzbekistan",
    "first_name": "Jack Varabey"
  },
  {
    "id": "7",
    "logo": "https://avatars.mds.yandex.net/i?id=adffb5a52b67b9c48605f33a478ce26d19b04db7-8207729-images-thumbs&n=13",
    "avatar": "https://avatars.mds.yandex.net/i?id=c906c86171b102fe4d8d622d94ed997cfda8e2ac-8497033-images-thumbs&n=13",
    "status": "true"
}
]

function setCard(state=initCard,action){
  if(action.type=='edit'){
    let curentMassiv=[...state]
    curentMassiv.splice(action.payload.del,1,action.payload)
    state=curentMassiv
    return state
  }
    return state
}

export {setCard}