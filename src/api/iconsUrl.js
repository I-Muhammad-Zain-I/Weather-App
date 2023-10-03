

const urlDictionary = {
    "200":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/167119506381c409c26686b5a7bc1583/raw/beb2a2993d1322b5e499452fc1ccab6361626dde/200.svg",
    "201":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/c8fe9800d0eec7ba4818ffa712ee9dc5/raw/6f0654defadff62e49b3cc880eeb1327cc6e6f66/201.svg",
    "202":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/53cb15c590da4c7ec00f70d36ccd3f10/raw/152c40d4d6e37475b3734c3e5270ef864b74d071/202.svg",
    "210":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/c2639bf7d7d5f635482ded8fca5ac3bf/raw/0cce49ab4040a77aaf4098d558510d1479e67d1c/210.svg",
    "211":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/fcf36de5a6cdb0100c2beaf064ca5c86/raw/68ac460ec93cc8098e6a670662b622c518281d22/211.svg",
    "212":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/fdd424690d5fc902ede2e31b8465b231/raw/b78ae4c99358d8a2a4f68e0e7817828842ee4535/212.svg",
    "221":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/18d97d7636003548d6b1ec1f6b63ad6d/raw/df8b0dacecc024e844db8a617fb39af62b8fdc4a/221.svg",
    "230":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/27ef0bb400cd6613306077dcb72222f9/raw/877be9d0b356357a6f136128cfd105188cfdadd5/230.svg",
    "231":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/adb6f8c7c5ccd5c664ed017dc78fa3c1/raw/19c9b0622c9b6b367dedea4b8240c1575dca0d94/231.svg",
    "232":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/97092fe5443dbdba3715df20a216f693/raw/84bdc91c989c308f978920e9e7fdbdbc0372162e/232.svg",

    "300":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/3f287594e0feff4d02758532d7eb060c/raw/02164710a494f6799f70b9c524c3498b45e2b548/300.svg",
    "301":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/668f9b28f170643894d369deebbb8d30/raw/bca4ca7236a9bf9358b316e65a5473fda3982656/301.svg",
    "302":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/f11c78e76a323d511be69646d41f2091/raw/1501a66922548a54d1ad5d1820b08dd4f17e364f/302.svg",
    "310":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/947c20fd010ceb8fa232f217e6171798/raw/7d5f573e3d0ba154ee907b1d06e35dc8ea5e0872/310.svg",
    "311":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/00f06f1e047aeb32fda728e4f0de1e4d/raw/f332cbb142129d5053983bb7f92743674127a359/311.svg",
    "312":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/6e4b9472f02bf94e5030b6a8ee8856d3/raw/2002fe046bfd690bd06d12dee82a00194501a648/312.svg",
    "313":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/4da6b0e672d0fb9833d4a8c0034dda55/raw/6d0c8cb84677bbb2396e6eacd40394985e8263e4/313.svg",
    "314":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/3157d54f230321954a5323bea19a7681/raw/10b8920e4b0c11e5ebed660031b8f27d46d56b7d/314.svg",
    "321":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/a32c96ee9806b0d70e24a1985e82430a/raw/8e2b3338e6d8f33d3a7149f67ab14b4f5cf1a827/321.svg",

    "500":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/0c72a9c51bae438144451bc43ec157f4/raw/3be7b241730bb9ee6cedae072e4ab1fdeea1ce8d/500.svg",
    "501":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/c25f561b5fb09bf88950716007a56361/raw/504246ef3f2a03b64ee73de3624bad6242cef1c9/501.svg",
    "502":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/349c7afb3987cfb3130eb9ee1e56168e/raw/f1fcd4529d8ee255a11864059ebb3555f8745106/502.svg",
    "503":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/05c17505c4d6c13a868c7868f98e1895/raw/a1dbc2957457022fab9d0a9f60ebc75da3f96633/503.svg",
    "504":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/54834ae6e6ab6fcaf962c2b4298e31d6/raw/3589d3053ea0cbf8b47a855e6f0cad7cd7c11817/504.svg",
    "511":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/1851ec12872b988565249b7c2da04378/raw/4ea33d7e02bc1c3a45e9bb7e383a0d1dba170ee1/511.svg",
    "520":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/15ec15cc8f7a91b142144b5bf7097f80/raw/a6039d266ea18c734114290a8aeb8e03e43231ad/520.svg",
    "521":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/43493c1b01d174420c22443537d739b1/raw/41a073594da11460091fa00f4418d7e53b748e7d/521.svg",
    "522":	"https://gist.githubusercontent.com/I-Muhammad-Zain-I/8c692ac9ad95a9cd3edd71181c6a06b9/raw/24893fd3a4abce5ba78158a8d6e37077588e2ab7/522.svg",
    "531":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/7e5eb54f997a2a5df2060b6bd5166e7f/raw/f2cc96be6d9ff3d04371f3e35d1af8465df09ea7/531.svg",

    "600":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/e25bfd45be9c920b048b2ce3ac8d1087/raw/0e9da8f4a0df2935bb31aa13ec938d0a72752d1c/600.svg",
    "601":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/d31166ce5e4e4e45eb26376d363b986f/raw/e5a0cc69fab42d625d73338a3f35d6d54a431e5c/601.svg",
    "602":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/e904eea8467116c17905245e7557b76f/raw/c82b54ca511fe01de146b2b175713596ca1eb952/602.svg",
    "611":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/600527d5bf70ccc1aac83c3175dcbeb5/raw/88dad20e4ef2108112ec01f5186eb4e51e78f34b/611.svg",
    "612":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/1523e583c634ec05ce6e5a1ea158569e/raw/19cddfe1cc0836e142a95130d246aa3413256e6b/612.svg",
    "613":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/c4f8587926dd35a73e7146bea8273687/raw/e14d2e08d4290aedf369da03a6a30bb2a5be10b8/613.svg",
    "615":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/8af08f52cc5f773bd56e41abcfd671e4/raw/47cc5121b6a09107ce304ce52c07840f458780f6/615.svg",
    "616":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/076b62000f3995509100c707dc5a7888/raw/2c047ab6d4de3c4c91ec621c2a5d4f235267d32a/616.svg",
    "620":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/b6903f3bb4f725eaa1f78ab224993607/raw/3d4c2a50b9d568d34a2250fe0acdce766dfddda6/620.svg",
    "621":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/a57630bf3b537b59305c233e8194ea9b/raw/2151014ba53b59e7989977527455b8044458bd7e/621.svg",
    "622":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/ac0529721187bf64eaba8d3206e70228/raw/400aeda51229e2b375b4b9be7d915506ce779805/622.svg",

    "701":	"https://gist.githubusercontent.com/I-Muhammad-Zain-I/ffb130fe0f49cd68e2bbf2d6f067a195/raw/d49564c3977e3dc2ae2852af426886ae99ac2eca/701.svg",
    "711":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/efbd0fdecbcd52f23a5c014abf1bee23/raw/a61ab96f1ab6adf385c1ed2645517a7d40798e6e/711.svg",
    "721":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/6c98e64e2e461ea2af460e8e9a70facd/raw/a5c297a1f4086c35d67c1a0d287e6a92e8cd1286/721.svg",
    "731":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/ac0456b239eff420e72525b283d192e5/raw/f1c10b2442b4551a1b81cfe22d36652b60464515/731.svg",
    "741":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/9ff5c81563b9a023c798ea6442176e89/raw/7d0db40647d9a7d4fd270287a863a607ed761093/741.svg",
    "751":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/d97de6b910d5500c9f4196aa52b7f14e/raw/e5b0b017521cb3feae73ee7ad287f8296fc86b41/751.svg",
    "761":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/193fbe378e2caedf72863dfad8039a94/raw/f19bab3790f36bc48439120a48bca725325d7542/761.svg",
    "762":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/31cea1523645d5a8ddee1073f779921d/raw/d42255980b0b2643e58ba00cf7f3f42993eac3e4/762.svg",
    "771":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/02fb5c6fc393d9916cd68b89cede97c1/raw/8104cdd35d5ecc99f9c2c94c623b91e90e57d2c6/771.svg",
    "781":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/7e1aa13fa8421cda9ba95c5a038c5db5/raw/cff4e8453e5bceb17eecae65105947045e9915b6/781.svg",

    "800n":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/a4e2c30feb056cf6a9bda0f95faa2b9a/raw/6f9c913fbd832a888578a854b444ef2d846c9fd8/800n.svg",
    "800d":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/6e0d96f1f34cdb9d584037f675989f70/raw/b49c6a58e4c9473a941e75e154a6d8b41f16c3a1/800d.svg",

    "801":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/225c9dcd0035cb7fb20fab429b1e952d/raw/8681df5564825ea8bf945d7726c770a9976c1ecf/801.svg",
    "802":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/30becae30868650dc17c33813627619a/raw/bb6d4d0e9c658e1d504b10e7331b805a717110e0/802.svg",
    "803":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/38586f18d3034f823863fea3eaad9b6b/raw/ebe60daf81834c4eb738261f0cb6c02c56845d3d/803.svg",
    "804":	"https://gistcdn.githack.com/I-Muhammad-Zain-I/9256d9ed84931abe597f03fe18c00f91/raw/ac82fcce27564042cd44f0a08f193f5462d0a655/804.svg",
}

const findUrl = (id) => {
    
    return urlDictionary[id];
   
} 
export default findUrl;

const secondaryFindUrl = (id, icon) => {
    if(id == 800) {
        if(icon[2] == 'd') return urlDictionary['800d'];
        else return urlDictionary['800n']
    } else {
        return urlDictionary[id]
    }

}
export {secondaryFindUrl}