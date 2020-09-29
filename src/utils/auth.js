import Cookies from "js-cookie";

 const uid="uid";
 const Did="did"
const MUSIC_U="MUSIC_U"

export function setId(id){  //存推荐id
    return Cookies.set(uid,id)
}

export function getToken(){  //获取token
    return Cookies.get(MUSIC_U)
}

export function removeToken(){  //删除token
    return Cookies.remove(MUSIC_U)
}

export function getId(){  //获取id
    return Cookies.get(uid)
}

export function setToken(Tid){  //设置token
    return Cookies.set(MUSIC_U,Tid)
}

export function setDid(id){  //存歌单id
    return Cookies.set(Did,id)
}

export function getDid(){  //取歌单id
    return Cookies.get(Did)
}